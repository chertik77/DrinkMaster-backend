import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserModule } from 'user/user.module'

import { Drink, DrinkSchema } from 'schemas'

import { DrinkController } from './drink.controller'
import { DrinkService } from './drink.service'

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: Drink.name, schema: DrinkSchema }])
  ],
  controllers: [DrinkController],
  providers: [DrinkService]
})
export class DrinkModule {}
