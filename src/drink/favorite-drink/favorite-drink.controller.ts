import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth, CurrentUser } from 'decorators'

import { FavoriteDrinkService } from './favorite-drink.service'

@NestjsCommon.Controller()
@NestjsSwagger.ApiBearerAuth()
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@NestjsSwagger.ApiTags('Drinks')
@Auth()
export class FavoriteDrinkController {
  constructor(private readonly favoriteDrinkService: FavoriteDrinkService) {}

  @NestjsCommon.Get()
  @NestjsSwagger.ApiOperation({ summary: 'Get all favorite drinks' })
  @NestjsSwagger.ApiOkResponse(Examples.FavoriteDrinksResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async getAllFavorites(@CurrentUser('id') userId: string) {
    return this.favoriteDrinkService.getAllFavoriteDrinks(userId)
  }

  @NestjsCommon.Post('add/:id')
  @NestjsSwagger.ApiOperation({ summary: 'Add drink to favorites' })
  @NestjsSwagger.ApiCreatedResponse(Examples.DrinkByIdResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(
    Examples.DrinkInFavoritesBadRequestResponseExample
  )
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async addToFavorites(
    @NestjsCommon.Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.favoriteDrinkService.addDrinkToFavorite(id, userId)
  }

  @NestjsCommon.Delete('remove/:id')
  @NestjsCommon.HttpCode(204)
  @NestjsSwagger.ApiOperation({ summary: 'Remove drink from favorites' })
  @NestjsSwagger.ApiNoContentResponse({ description: 'No content' })
  @NestjsSwagger.ApiBadRequestResponse(Examples.InvalidObjectIdResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  removeDrinkFromFavorite(
    @NestjsCommon.Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.favoriteDrinkService.removeDrinkFromFavorite(id, userId)
  }
}
