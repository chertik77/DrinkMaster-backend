import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

import { Model } from 'mongoose'

import { Category, Glass, Ingredient } from 'schemas'

@Injectable()
export class FilterService {
  constructor(
    @InjectModel(Glass.name) private drinkModel: Model<Glass>,
    @InjectModel(Ingredient.name) private ingredientModel: Model<Ingredient>,
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  getAllGlasses() {
    return this.drinkModel.find({})
  }

  getAllIngredients() {
    return this.ingredientModel.find({})
  }

  getAllCategories() {
    return this.categoryModel.find({})
  }
}
