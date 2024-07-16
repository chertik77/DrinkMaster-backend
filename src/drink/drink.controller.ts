import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth, CurrentUser } from 'decorators'

import { SearchDrinksDto } from './drink.dto'
import { DrinkService } from './drink.service'

@NestjsCommon.Controller()
@NestjsSwagger.ApiBearerAuth()
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@NestjsSwagger.ApiTags('Drinks')
@Auth()
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}

  @NestjsCommon.Get()
  @NestjsSwagger.ApiOkResponse(Examples.SearchDrinksResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all drinks' })
  async getAllDrinks(
    @NestjsCommon.Query(
      new NestjsCommon.ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
        forbidUnknownValues: true
      })
    )
    query: SearchDrinksDto,
    @CurrentUser('id') userId: string
  ) {
    return await this.drinkService.getAllDrinks(query, userId)
  }

  @NestjsCommon.Get('popular')
  @NestjsSwagger.ApiOkResponse(Examples.DrinkByIdResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all popular drinks' })
  async getPopularDrinks() {
    return await this.drinkService.getMostFrequentFavoriteDrinks()
  }

  @NestjsCommon.Get(':id')
  @NestjsSwagger.ApiOperation({ summary: 'Get drink by id' })
  @NestjsSwagger.ApiOkResponse(Examples.DrinkByIdResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(Examples.InvalidObjectIdResponseExample)
  async getDrinkById(@NestjsCommon.Param('id', IsObjectIdPipe) id: string) {
    return await this.drinkService.getDrinkById(id)
  }
}
