import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserModule } from 'user/user.module'

import { OwnDrink, OwnDrinkSchema } from 'schemas'

import { OwnDrinkController } from './own-drink.controller'
import { OwnDrinkService } from './own-drink.service'

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: OwnDrink.name, schema: OwnDrinkSchema }])
  ],
  controllers: [OwnDrinkController],
  providers: [OwnDrinkService]
})
export class OwnDrinkModule {}
