import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import { CurrentUser } from 'decorators/user.decorator'
import {
  DrinkByIdResponseExample,
  InvalidObjectIdResponseExample,
  SearchDrinksResponseExample,
  UnauthorizedResponseExample
} from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth } from 'guards/auth.guard'

import { SearchDrinksDto } from './drink.dto'
import { DrinksService } from './drinks.service'

@Controller()
@Auth()
@ApiBearerAuth()
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
@ApiTags('Drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get()
  @ApiOkResponse(SearchDrinksResponseExample)
  @ApiOperation({ summary: 'Get all drinks' })
  getAllDrinks(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
        forbidUnknownValues: true
      })
    )
    query: SearchDrinksDto,
    @CurrentUser('id') userId: string
  ) {
    return this.drinksService.getAllDrinks(query, userId)
  }

  @Get('popular')
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiOperation({ summary: 'Get all popular drinks' })
  getPopularDrinks() {
    return this.drinksService.getMostFrequentFavoriteDrinks()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get drink by id' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiBadRequestResponse(InvalidObjectIdResponseExample)
  getDrinkById(@Param('id', IsObjectIdPipe) id: string) {
    return this.drinksService.getDrinkById(id)
  }
}
