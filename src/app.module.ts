import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthModule } from './auth/auth.module'
import { DrinksModule } from './drinks/drinks.module'
import { FiltersModule } from './filters/filters.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST!),
    AuthModule,
    DrinksModule,
    UserModule,
    FiltersModule
  ]
})
export class AppModule {}
