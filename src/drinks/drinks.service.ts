import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { UserService } from 'user/user.service'

import { Drink, FavoriteDrink, OwnDrink } from 'schemas'

import { SearchDrinksDto } from './dto/drink.dto'
import { CreateOwnDrinkDto } from './dto/own-drink.dto'

@Injectable()
export class DrinksService {
  constructor(
    @InjectModel(Drink.name) private readonly drinkModel: Model<Drink>,
    @InjectModel(FavoriteDrink.name)
    private readonly favoriteDrinkModel: Model<FavoriteDrink>,
    @InjectModel(OwnDrink.name)
    private readonly ownDrinkModel: Model<OwnDrink>,
    private readonly userService: UserService
  ) {}

  async getAllDrinks(
    { drinkName, category, ingredient, page = 1, limit = 9 }: SearchDrinksDto,
    userId: string
  ) {
    const isUser18YearsOld = await this.userService.isUser18YearsOld(userId)

    const skip = (page - 1) * limit

    const query = this.buildQuery(isUser18YearsOld, {
      drinkName,
      category,
      ingredient
    })

    const total = await query.clone().countDocuments()
    const totalPages = Math.ceil(total / limit)
    const drinks = await query.skip(skip).limit(limit).exec()

    return { totalPages, total, page, limit, drinks }
  }

  async getMostFrequentFavoriteDrinks() {
    const favoriteDrinks = await this.favoriteDrinkModel.find().limit(4).exec()

    return favoriteDrinks
  }

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

  async getAllFavoriteDrinks(userId: string) {
    const user = await this.userService.findById(userId)

    if (!user) throw new NotFoundException('User not found')

    const favoriteDrinks = await this.favoriteDrinkModel
      .find({ owner: userId })
      .populate('drink')
      .exec()

    return favoriteDrinks.map(favoriteDrink => favoriteDrink.drink)
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

  async getDrinkById(id: string) {
    const drinkById = await this.drinkModel.findById(id)

    if (!drinkById) throw new NotFoundException('Drink not found')

    return drinkById
  }

  private buildQuery(
    isUser18YearsOld: boolean,
    { drinkName, category, ingredient }: SearchDrinksDto
  ) {
    const query = this.drinkModel.find()

    if (!isUser18YearsOld) query.where('alcoholic').equals('Non alcoholic')

    if (drinkName) query.where('drink').equals(new RegExp(drinkName, 'i'))

    if (category) query.where('category').equals(category)

    if (ingredient) query.where('ingredients.title').equals(ingredient)

    return query
  }
}
