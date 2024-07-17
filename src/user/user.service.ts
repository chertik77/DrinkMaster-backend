import type { Model } from 'mongoose'

import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { MailerService } from '@nestjs-modules/mailer'
import { hash } from 'argon2'
import { v2 } from 'cloudinary'

import { SignupDto } from 'auth/auth.dto'

import { User } from 'schemas'

import { SubscribeUserDto, UpdateUserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly mailerService: MailerService
  ) {}

  async getUserProfile(id: string) {
    const user = await this.findById(id)

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async update(file: Express.Multer.File, id: string, dto: UpdateUserDto) {
    let data = dto

    let avatar

    if (file) {
      await new Promise(resolve => {
        v2.uploader
          .upload_stream((error, uploadResult) => {
            if (error) throw new UnprocessableEntityException(error.message)

            return resolve((avatar = uploadResult?.url))
          })
          .end(file.buffer)
      })
    }

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }

    const user = await this.userModel.findByIdAndUpdate(
      id,
      { ...data, avatar },
      { new: true }
    )

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async createNewUser(dto: SignupDto) {
    return await this.userModel.create({
      ...dto,
      password: await hash(dto.password)
    })
  }

  findById(id: string) {
    return this.userModel.findById(id)
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email })
  }

  async isUser18YearsOld(id: string) {
    const user = await this.findById(id)

    if (!user) throw new NotFoundException('User not found')

    const today = new Date()
    const birthDate = new Date(user.dateOfBirth)
    const month = today.getMonth() - birthDate.getMonth()
    let age = today.getFullYear() - birthDate.getFullYear()

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age -= 1
    }

    return age >= 18
  }

  async sendSubscriptionEmail({ email }: SubscribeUserDto) {
    const user = await this.findOneByEmail(email)

    if (!user) throw new NotFoundException('User not found')

    await this.mailerService.sendMail({
      to: email,
      subject: 'Subscribe to the newsletter',
      template: 'email'
    })
  }
}
