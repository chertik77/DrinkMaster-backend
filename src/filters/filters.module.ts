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

import { FiltersController } from './filters.controller'
import { FiltersService } from './filters.service'

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
  controllers: [FiltersController],
  providers: [FiltersService]
})
export class FiltersModule {}
