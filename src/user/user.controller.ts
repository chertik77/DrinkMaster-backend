import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'

import { Auth } from 'decorators'

import { UpdateUserDto } from './user.dto'
import { UserService } from './user.service'

@NestjsCommon.Controller('user')
@NestjsSwagger.ApiTags('User')
@NestjsSwagger.ApiBearerAuth()
@NestjsCommon.UsePipes(new NestjsCommon.ValidationPipe())
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
@Auth()
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @NestjsCommon.HttpCode(200)
  @NestjsCommon.Put(':id')
  @NestjsSwagger.ApiOkResponse(Examples.UserResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Update user' })
  @NestjsSwagger.ApiBadRequestResponse(Examples.UserBadRequestResponseExample)
  async update(
    @NestjsCommon.Param('id') id: string,
    @NestjsCommon.Body() dto: UpdateUserDto
  ) {
    const updatedUser = await this.usersService.update(id, dto)

    return updatedUser
  }

  @NestjsCommon.HttpCode(200)
  @NestjsCommon.Post('subscribe')
  @NestjsSwagger.ApiCreatedResponse(Examples.UserLetterResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Subscribe to our newsletter' })
  @NestjsSwagger.ApiBody({
    schema: {
      type: 'object',
      properties: { email: { example: 'test@gmail.com' } }
    }
  })
  async sendSubscriptionEmail(@NestjsCommon.Body('email') email: string) {
    await this.usersService.sendSubscriptionEmail(email)

    return { message: 'User successfully subscribed to our newsletter' }
  }
}
