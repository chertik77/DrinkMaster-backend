import type { NestExpressApplication } from '@nestjs/platform-express'

import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import * as cookieParser from 'cookie-parser'
import * as mongoose from 'mongoose'
import * as morgan from 'morgan'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.setGlobalPrefix('api')

  app.use(cookieParser())

  app.use(morgan('dev'))

  app.disable('x-powered-by')

  app.enableCors({
    origin: [process.env.ALLOWED_ORIGINS!],
    credentials: true,
    exposedHeaders: 'set-cookie'
  })

  const config = new DocumentBuilder()
    .setTitle('Drink Master API')
    .setDescription(
      'The Drink Master API: A comprehensive solution for managing and discovering a wide variety of beverages.'
    )
    .addBearerAuth()
    .addServer('http://localhost:3000/api', 'Development')
    .addServer(
      'https://drinkmaster-backend-ex26.onrender.com/api',
      'Production'
    )
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true
  })

  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT!)
}

bootstrap()

mongoose.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform(_, ret) {
    delete ret._id
  }
})
