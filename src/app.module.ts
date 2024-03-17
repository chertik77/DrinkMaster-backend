import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { RouterModule } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'

import { FavoriteDrinkModule } from 'drinks/favorite-drink/favorite-drink.module'
import { OwnDrinkModule } from 'drinks/own-drink/own-drink.module'

import { AuthModule } from './auth/auth.module'
import { DrinksModule } from './drinks/drinks.module'
import { FiltersModule } from './filters/filters.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST!),
    AuthModule,
    UserModule,
    FiltersModule,
    OwnDrinkModule,
    FavoriteDrinkModule,
    DrinksModule,
    RouterModule.register([
      {
        path: 'drinks',
        module: DrinksModule,
        children: [
          { path: 'own', module: OwnDrinkModule },
          { path: 'favorite', module: FavoriteDrinkModule }
        ]
      }
    ])
  ]
})
export class AppModule {}
