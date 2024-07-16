import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth, CurrentUser } from 'decorators'

import { CreateOwnDrinkDto, EditOwnDrinkDto } from './own-drink.dto'
import { OwnDrinkService } from './own-drink.service'

@NestjsCommon.Controller()
@NestjsSwagger.ApiBearerAuth()
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@NestjsSwagger.ApiTags('Drinks')
@Auth()
export class OwnDrinkController {
  constructor(private readonly ownDrinkService: OwnDrinkService) {}

  @NestjsCommon.Get()
  @NestjsSwagger.ApiOperation({ summary: 'Get all own drinks' })
  @NestjsSwagger.ApiOkResponse(Examples.OwnDrinksResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async getAllOwnDrinks(@CurrentUser('id') userId: string) {
    return await this.ownDrinkService.getAllOwnDrinks(userId)
  }

  @NestjsCommon.UsePipes(new NestjsCommon.ValidationPipe())
  @NestjsCommon.Post()
  @NestjsSwagger.ApiOperation({ summary: 'Add own drink' })
  @NestjsSwagger.ApiCreatedResponse(Examples.OwnDrinkResponseExample)
  @NestjsSwagger.ApiBadRequestResponse(
    Examples.UserIsNot18YearsOldResponseExample
  )
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async addOwnDrink(
    @NestjsCommon.Body() dto: CreateOwnDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return await this.ownDrinkService.addOwnDrink(dto, userId)
  }

  @NestjsCommon.UsePipes(new NestjsCommon.ValidationPipe())
  @NestjsCommon.Put(':id')
  @NestjsSwagger.ApiOperation({ summary: 'Update own drink' })
  @NestjsSwagger.ApiBody({ schema: { example: { title: 'Red Joi' } } })
  @NestjsSwagger.ApiOkResponse(Examples.OwnDrinkEditedResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async updateOwnDrink(
    @NestjsCommon.Param('id', IsObjectIdPipe) id: string,
    @NestjsCommon.Body() dto: EditOwnDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return await this.ownDrinkService.updateOwnDrink(id, dto, userId)
  }

  @NestjsCommon.Delete(':id')
  @NestjsCommon.HttpCode(204)
  @NestjsSwagger.ApiOperation({ summary: 'Remove own drink' })
  @NestjsSwagger.ApiNoContentResponse({ description: 'No content' })
  @NestjsSwagger.ApiBadRequestResponse(Examples.InvalidObjectIdResponseExample)
  @NestjsSwagger.ApiNotFoundResponse(Examples.UserNotFoundResponseExample)
  async removeOwnDrink(
    @NestjsCommon.Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return await this.ownDrinkService.removeOwnDrink(id, userId)
  }
}
