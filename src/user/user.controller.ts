import {
  Body,
  Controller,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import {
  UnauthorizedResponseExample,
  UserBadRequestResponseExample,
  UserLetterResponseExample,
  UserNotFoundResponseExample,
  UserResponseExample
} from 'examples'

import { Auth } from 'guards/auth.guard'

import { UpdateUserDto } from './user.dto'
import { UserService } from './user.service'

@Controller('user')
@Auth()
@ApiTags('User')
@ApiBearerAuth()
@UsePipes(new ValidationPipe())
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
@ApiNotFoundResponse(UserNotFoundResponseExample)
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @HttpCode(200)
  @Patch(':id')
  @ApiOkResponse(UserResponseExample)
  @ApiOperation({ summary: 'Update user' })
  @ApiBadRequestResponse(UserBadRequestResponseExample)
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const updatedUser = await this.usersService.update(id, dto)

    return updatedUser
  }

  @HttpCode(200)
  @Post('subscribe')
  @ApiCreatedResponse(UserLetterResponseExample)
  @ApiOperation({ summary: 'Subscribe to newsletter' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: { email: { example: 'test@gmail.com' } }
    }
  })
  async sendSubscriptionEmail(@Body('email') email: string) {
    await this.usersService.sendSubscriptionEmail(email)

    return { message: 'User successfully subscribed to our newsletter' }
  }
}
