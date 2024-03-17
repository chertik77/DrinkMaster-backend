import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserModule } from 'user/user.module'

import { Drink, DrinkSchema, FavoriteDrink, FavoriteDrinkSchema } from 'schemas'

import { FavoriteDrinkController } from './favorite-drink.controller'
import { FavoriteDrinkService } from './favorite-drink.service'

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Drink.name, schema: DrinkSchema }]),
    MongooseModule.forFeature([
      { name: FavoriteDrink.name, schema: FavoriteDrinkSchema }
    ])
  ],
  controllers: [FavoriteDrinkController],
  providers: [FavoriteDrinkService]
})
export class FavoriteDrinkModule {}
