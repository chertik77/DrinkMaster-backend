import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import { CurrentUser } from 'decorators/user.decorator'
import * as Examples from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth } from 'guards/auth.guard'

import { SearchDrinksDto } from './drink.dto'
import { DrinkService } from './drink.service'

@NestjsCommon.Controller()
@Auth()
@NestjsSwagger.ApiBearerAuth()
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@NestjsSwagger.ApiTags('Drinks')
export class DrinkController {
  constructor(private readonly drinkService: DrinkService) {}

  @NestjsCommon.Get()
  @NestjsSwagger.ApiOkResponse(Examples.SearchDrinksResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all drinks' })
  getAllDrinks(
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
    return this.drinkService.getAllDrinks(query, userId)
  }

  @NestjsCommon.Get('popular')
  @NestjsSwagger.ApiOkResponse(Examples.DrinkByIdResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all popular drinks' })
  getPopularDrinks() {
    return this.drinkService.getMostFrequentFavoriteDrinks()
  }

  @NestjsCommon.Get(':id')
  @NestjsSwagger.ApiOperation({ summary: 'Get drink by id' })
  @NestjsSwagger.ApiOkResponse(Examples.DrinkByIdResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(Examples.InvalidObjectIdResponseExample)
  getDrinkById(@NestjsCommon.Param('id', IsObjectIdPipe) id: string) {
    return this.drinkService.getDrinkById(id)
  }
}
