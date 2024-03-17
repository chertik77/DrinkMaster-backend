import { Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common'
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
  InvalidObjectIdResponseExample,
  UnauthorizedResponseExample,
  UserNotFoundResponseExample
} from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth } from 'guards/auth.guard'

import { FavoriteDrinkService } from './favorite-drink.service'

@Controller()
@Auth()
@ApiBearerAuth()
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
@ApiTags('Drinks')
export class FavoriteDrinkController {
  constructor(private readonly favoriteDrinkService: FavoriteDrinkService) {}

  @Get()
  @ApiOperation({ summary: 'Get all favorite drinks' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  async getAllFavorites(@CurrentUser('id') userId: string) {
    return this.favoriteDrinkService.getAllFavoriteDrinks(userId)
  }

  @Post('add/:id')
  @ApiOperation({ summary: 'Add drink to favorites' })
  @ApiCreatedResponse(DrinkByIdResponseExample)
  @ApiBadRequestResponse(DrinkInFavoritesBadRequestResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  async addToFavorites(
    @Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.favoriteDrinkService.addDrinkToFavorite(id, userId)
  }

  @Delete('remove/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remove drink from favorites' })
  @ApiNoContentResponse({ description: 'No content' })
  @ApiBadRequestResponse(InvalidObjectIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  removeDrinkFromFavorite(
    @Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.favoriteDrinkService.removeDrinkFromFavorite(id, userId)
  }
}
