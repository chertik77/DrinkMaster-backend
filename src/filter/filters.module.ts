import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import {
  Category,
  CategorySchema,
  Glass,
  GlassSchema,
  Ingredient,
  IngredientSchema
} from 'schemas'

import { FilterController } from './filter.controller'
import { FilterService } from './filters.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Glass.name, schema: GlassSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema }
    ]),
    MongooseModule.forFeature([
      { name: Ingredient.name, schema: IngredientSchema }
    ])
  ],
  controllers: [FilterController],
  providers: [FilterService]
})
export class FilterModule {}
