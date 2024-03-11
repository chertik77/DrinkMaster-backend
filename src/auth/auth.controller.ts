import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import {
  AuthResponseExample,
  ConflictResponseExample,
  SigninBadRequestResponseExample,
  SignupBadRequestResponseExample,
  UnauthorizedResponseExample,
  UserNotFoundResponseExample
} from 'examples'
import { Request, Response } from 'express'

import { SigninDto, SignupDto } from './auth.dto'
import { AuthService } from './auth.service'

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe())
  @Post('signup')
  @ApiOperation({ summary: 'Create new user' })
  @ApiCreatedResponse(AuthResponseExample)
  @ApiBadRequestResponse(SignupBadRequestResponseExample)
  @ApiConflictResponse(ConflictResponseExample)
  async signup(
    @Body()
    dto: SignupDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, ...response } = await this.authService.signup(dto)

    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @UsePipes(new ValidationPipe())
  @Post('signin')
  @HttpCode(200)
  @ApiOperation({ summary: 'Signin user' })
  @ApiOkResponse(AuthResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  @ApiBadRequestResponse(SigninBadRequestResponseExample)
  @ApiUnauthorizedResponse(UnauthorizedResponseExample)
  async login(
    @Body()
    dto: SigninDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, ...response } = await this.authService.signin(dto)
    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @Post('signin/access-token')
  @ApiOkResponse(AuthResponseExample)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get fresh and new tokens' })
  @ApiUnauthorizedResponse(UnauthorizedResponseExample)
  async getNewTokens(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const refreshTokenFromCookies =
      req?.cookies[this.authService.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenFromResponse(res)
      throw new UnauthorizedException('Refresh token not passed')
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies
    )

    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @HttpCode(204)
  @Post('signout')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Signout user' })
  @ApiNoContentResponse({ description: 'No content' })
  async signout(@Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshTokenFromResponse(res)

    return true
  }
}
