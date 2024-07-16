import type { Model } from 'mongoose'

import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UserService } from 'user/user.service'

import { Drink, FavoriteDrink } from 'schemas'

@Injectable()
export class FavoriteDrinkService {
  constructor(
    @InjectModel(Drink.name) private readonly drinkModel: Model<Drink>,
    @InjectModel(FavoriteDrink.name)
    private readonly favoriteDrinkModel: Model<FavoriteDrink>,
    private readonly userService: UserService
  ) {}

  async getAllFavoriteDrinks(userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const favoriteDrinks = await this.favoriteDrinkModel
      .find({ owner: userId }, 'drink')
      .populate('drink')

    return favoriteDrinks.flatMap(({ drink }) => drink)
  }

  async addDrinkToFavorite(favoriteDrinkId: string, userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const drink = await this.drinkModel.findById(favoriteDrinkId)

    if (!drink) throw new NotFoundException('Drink not found')

    const isDrinkExistsInFavorites = await this.favoriteDrinkModel.findOne({
      drink: favoriteDrinkId,
      owner: userId
    })

    if (isDrinkExistsInFavorites) {
      throw new BadRequestException('Drink already in favorites')
    }

    await this.favoriteDrinkModel.create({
      drink: favoriteDrinkId,
      owner: userId
    })

    return drink
  }

  async removeDrinkFromFavorite(favoriteDrinkId: string, userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const favoriteDrink = await this.favoriteDrinkModel.findOne({
      drink: favoriteDrinkId,
      owner: userId
    })

    if (!favoriteDrink) throw new NotFoundException('Favorite drink not found')

    await this.favoriteDrinkModel.findOneAndDelete({
      drink: favoriteDrinkId,
      owner: userId
    })

    return true
  }
}
