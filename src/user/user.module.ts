import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { MailerModule } from '@nestjs-modules/mailer'

import { getMailerConfig } from 'config'
import { User, UserSchema } from 'schemas'

import { CloudinaryProvider } from './cloudinary.provider'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MailerModule.forRootAsync({
      useFactory: getMailerConfig,
      inject: [ConfigService]
    })
  ],
  controllers: [UserController],
  providers: [UserService, CloudinaryProvider],
  exports: [UserService]
})
export class UserModule {}
