import * as NestjsCommon from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'

import { Auth, CurrentUser } from 'decorators'

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
  constructor(private readonly userService: UserService) {}

  @NestjsCommon.Get('me')
  @NestjsSwagger.ApiOkResponse(Examples.UserProfileResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get current user' })
  async getUserProfile(@CurrentUser('id') userId: string) {
    const userProfile = await this.userService.getUserProfile(userId)

    return userProfile
  }

  @NestjsCommon.HttpCode(200)
  @NestjsCommon.Put(':id')
  @NestjsSwagger.ApiOkResponse(Examples.UserResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Update user' })
  @NestjsSwagger.ApiConsumes('application/json')
  @NestjsSwagger.ApiConsumes('multipart/form-data')
  @NestjsSwagger.ApiBody({
    schema: {
      example: { theme: 'dark' },
      type: 'object',
      properties: { avatar: { type: 'file', format: 'binary' } }
    }
  })
  @NestjsCommon.UseInterceptors(FileInterceptor('avatar'))
  async update(
    @NestjsCommon.Param('id') id: string,
    @NestjsCommon.Body() dto: UpdateUserDto,
    @NestjsCommon.UploadedFile(
      new NestjsCommon.ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: /(jpeg|png|webp)/ })
        .addMaxSizeValidator({
          maxSize: 5 * 1024 * 1024,
          message: 'File too large'
        })
        .build({ errorHttpStatusCode: 422, fileIsRequired: false })
    )
    file: Express.Multer.File
  ) {
    const updatedUser = await this.userService.update(file, id, dto)

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
    await this.userService.sendSubscriptionEmail(email)

    return { message: 'User successfully subscribed to our newsletter' }
  }
}
