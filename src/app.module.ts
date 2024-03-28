import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { RouterModule } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'

import { FavoriteDrinkModule } from 'drink/favorite-drink/favorite-drink.module'
import { OwnDrinkModule } from 'drink/own-drink/own-drink.module'

import { AuthModule } from './auth/auth.module'
import { DrinkModule } from './drink/drink.module'
import { FilterModule } from './filter/filters.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_HOST!),
    AuthModule,
    UserModule,
    FilterModule,
    OwnDrinkModule,
    FavoriteDrinkModule,
    DrinkModule,
    RouterModule.register([
      {
        path: 'drinks',
        module: DrinkModule,
        children: [
          { path: 'own', module: OwnDrinkModule },
          { path: 'favorite', module: FavoriteDrinkModule }
        ]
      }
    ])
  ]
})
export class AppModule {}
