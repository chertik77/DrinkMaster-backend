import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import { CurrentUser } from 'decorators/user.decorator'
import {
  DrinkByIdResponseExample,
  DrinkInFavoritesBadRequestResponseExample,
  InvalidIdResponseExample,
  OwnDrinkResponseExample,
  SearchDrinksResponseExample,
  UnauthorizedResponseExample,
  UserIsNot18YearsOldResponseExample,
  UserNotFoundResponseExample
} from 'examples'

import { Auth } from 'guards/auth.guard'

import { DrinksService } from './drinks.service'
import { FavoriteDrinkDto, OwnDrinkDto, SearchDrinksDto } from './dto/drink.dto'
import { CreateOwnDrinkDto } from './dto/own-drink.dto'

@Controller('drinks')
@Auth()
@ApiBearerAuth()
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
@ApiTags('Drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Get()
  @UsePipes(new ValidationPipe())
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

  @Get('own')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Get all own drinks' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  getAllOwnDrinks(@CurrentUser('id') userId: string) {
    return this.drinksService.getAllOwnDrinks(userId)
  }

  @Get('popular')
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiOperation({ summary: 'Get all popular drinks' })
  getPopularDrinks() {
    return this.drinksService.getMostFrequentFavoriteDrinks()
  }

  @UsePipes(new ValidationPipe())
  @Post('own/add')
  @ApiOperation({ summary: 'Add own drink' })
  @ApiCreatedResponse(OwnDrinkResponseExample)
  @ApiBadRequestResponse(UserIsNot18YearsOldResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  addOwnDrink(
    @Body() dto: CreateOwnDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return this.drinksService.addOwnDrink(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @Delete('own/remove')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remove own drink' })
  @ApiNoContentResponse({ description: 'No content' })
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  removeOwnDrink(@Body() dto: OwnDrinkDto, @CurrentUser('id') userId: string) {
    return this.drinksService.removeOwnDrink(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @Get('favorite')
  @ApiOperation({ summary: 'Get all favorite drinks' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  async getAllFavorites(@CurrentUser('id') userId: string) {
    return this.drinksService.getAllFavoriteDrinks(userId)
  }

  @UsePipes(new ValidationPipe())
  @Post('favorite/add')
  @ApiOperation({ summary: 'Add drink to favorites' })
  @ApiCreatedResponse(DrinkByIdResponseExample)
  @ApiBadRequestResponse(DrinkInFavoritesBadRequestResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  async addToFavorites(
    @Body() dto: FavoriteDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return this.drinksService.addDrinkToFavorite(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @Delete('favorite/remove')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remove drink from favorites' })
  @ApiNoContentResponse({ description: 'No content' })
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  removeDrinkFromFavorite(
    @Body() dto: FavoriteDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return this.drinksService.removeDrinkFromFavorite(dto, userId)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get drink by id' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiBadRequestResponse(InvalidIdResponseExample)
  getDrinkById(@Param('id') id: string) {
    return this.drinksService.getDrinkById(id)
  }
}
