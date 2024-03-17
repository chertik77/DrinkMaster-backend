import type { Model } from 'mongoose'

import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { UserService } from 'user/user.service'

import { Drink } from 'schemas'

import { SearchDrinksDto } from './drink.dto'

@Injectable()
export class DrinkService {
  constructor(
    @InjectModel(Drink.name) private readonly drinkModel: Model<Drink>,
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
    const favoriteDrinks = await this.drinkModel.find().limit(4).exec()

    return favoriteDrinks
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
