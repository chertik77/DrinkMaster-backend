import type { Model } from 'mongoose'

import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { MailerService } from '@nestjs-modules/mailer'
import { hash } from 'argon2'

import { SignupDto } from 'auth/auth.dto'

import { User } from 'schemas'

import { UpdateUserDto } from './user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly mailerService: MailerService
  ) {}

  async update(id: string, dto: UpdateUserDto) {
    let data = dto

    if (dto.password) {
      data = { ...dto, password: await hash(dto.password) }
    }

    const user = await this.userModel.findByIdAndUpdate(
      id,
      { ...data, userTheme: data.theme },
      { new: true }
    )

    if (!user) throw new NotFoundException('User not found')

    return user
  }

  async createNewUser(dto: SignupDto) {
    const hashedPassword = await hash(dto.password)

    const user = await this.userModel.create({
      ...dto,
      password: hashedPassword
    })

    return user
  }

  findById(id: string) {
    return this.userModel.findById(id)
  }

  findOneByEmail(email: string) {
    return this.userModel.findOne({ email })
  }

  async isUser18YearsOld(id: string) {
    const user = await this.userModel.findById(id)

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

  async sendSubscriptionEmail(email: string) {
    const user = await this.findOneByEmail(email)

    if (!user) throw new NotFoundException('User not found')

    await this.mailerService.sendMail({
      to: email,
      subject: 'Subscribe to the newsletter',
      html: '<p>You successfully subsribed to our newsletter.</p>'
    })
  }
}
