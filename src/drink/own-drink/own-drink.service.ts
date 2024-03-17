import type { Model } from 'mongoose'

import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UserService } from 'user/user.service'

import { OwnDrink } from 'schemas'

import { CreateOwnDrinkDto } from './own-drink.dto'

@Injectable()
export class OwnDrinkService {
  constructor(
    @InjectModel(OwnDrink.name)
    private readonly ownDrinkModel: Model<OwnDrink>,
    private readonly userService: UserService
  ) {}

  async getAllOwnDrinks(userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const ownDrinks = await this.ownDrinkModel.find({ owner: userId }).exec()

    return ownDrinks
  }

  async addOwnDrink(dto: CreateOwnDrinkDto, userId: string) {
    const isUser18YearsOld = await this.userService.isUser18YearsOld(userId)

    if (!isUser18YearsOld) {
      throw new BadRequestException(
        'User is not 18 years old to add alcoholic drink'
      )
    }

    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const createdOwnDrink = await this.ownDrinkModel.create({
      ...dto,
      owner: userId
    })

    return createdOwnDrink
  }

  async removeOwnDrink(ownDrinkId: string, userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const ownDrink = await this.ownDrinkModel.findById(ownDrinkId)

    if (!ownDrink) throw new NotFoundException('Own drink not found')

    await this.ownDrinkModel.findByIdAndDelete(ownDrinkId)

    return true
  }
}
