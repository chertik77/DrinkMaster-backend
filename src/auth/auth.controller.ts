import type { Request, Response } from 'express'

import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'

import { SigninDto, SignupDto } from './auth.dto'
import { AuthService } from './auth.service'

@NestjsCommon.Controller('auth')
@NestjsSwagger.ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @NestjsCommon.UsePipes(new NestjsCommon.ValidationPipe())
  @NestjsCommon.Post('signup')
  @NestjsSwagger.ApiOperation({ summary: 'Create new user' })
  @NestjsSwagger.ApiCreatedResponse(Examples.AuthResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(Examples.SignupBadRequestResponseExample)
  @NestjsSwagger.ApiConflictResponse(Examples.ConflictResponseExample)
  async signup(
    @NestjsCommon.Body()
    dto: SignupDto,
    @NestjsCommon.Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, ...response } = await this.authService.signup(dto)

    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @NestjsCommon.UsePipes(new NestjsCommon.ValidationPipe())
  @NestjsCommon.Post('signin')
  @NestjsCommon.HttpCode(200)
  @NestjsSwagger.ApiOperation({ summary: 'Signin user' })
  @NestjsSwagger.ApiOkResponse(Examples.AuthResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(Examples.SigninBadRequestResponseExample)
  @NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
  async login(
    @NestjsCommon.Body()
    dto: SigninDto,
    @NestjsCommon.Res({ passthrough: true }) res: Response
  ) {
    const { refreshToken, ...response } = await this.authService.signin(dto)
    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @NestjsCommon.Post('signin/access-token')
  @NestjsSwagger.ApiOkResponse(Examples.AuthResponseExample)
  @NestjsCommon.HttpCode(200)
  @NestjsSwagger.ApiOperation({ summary: 'Get fresh and new tokens' })
  @NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
  async getNewTokens(
    @NestjsCommon.Req() req: Request,
    @NestjsCommon.Res({ passthrough: true }) res: Response
  ) {
    const refreshTokenFromCookies =
      req?.cookies[this.authService.REFRESH_TOKEN_NAME]

    if (!refreshTokenFromCookies) {
      this.authService.removeRefreshTokenFromResponse(res)
      throw new NestjsCommon.UnauthorizedException('Refresh token not passed')
    }

    const { refreshToken, ...response } = await this.authService.getNewTokens(
      refreshTokenFromCookies
    )

    this.authService.addRefreshTokenToResponse(res, refreshToken)

    return response
  }

  @NestjsCommon.HttpCode(204)
  @NestjsCommon.Post('signout')
  @NestjsSwagger.ApiBearerAuth()
  @NestjsSwagger.ApiOperation({ summary: 'Signout user' })
  @NestjsSwagger.ApiNoContentResponse({ description: 'No content' })
  async signout(@NestjsCommon.Res({ passthrough: true }) res: Response) {
    this.authService.removeRefreshTokenFromResponse(res)

    return true
  }
}
