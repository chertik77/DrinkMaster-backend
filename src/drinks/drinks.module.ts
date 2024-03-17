import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserModule } from 'user/user.module'

import { Drink, DrinkSchema } from 'schemas'

import { DrinksController } from './drinks.controller'
import { DrinksService } from './drinks.service'

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Drink.name, schema: DrinkSchema }])
  ],
  controllers: [DrinksController],
  providers: [DrinksService]
})
export class DrinksModule {}
