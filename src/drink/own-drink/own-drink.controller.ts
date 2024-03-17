import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
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
  InvalidObjectIdResponseExample,
  OwnDrinkResponseExample,
  UnauthorizedResponseExample,
  UserIsNot18YearsOldResponseExample,
  UserNotFoundResponseExample
} from 'examples'
import { IsObjectIdPipe } from 'nestjs-object-id'

import { Auth } from 'guards/auth.guard'

import { CreateOwnDrinkDto } from './own-drink.dto'
import { OwnDrinkService } from './own-drink.service'

@Controller()
@Auth()
@ApiBearerAuth()
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
@ApiTags('Drinks')
export class OwnDrinkController {
  constructor(private readonly ownDrinkService: OwnDrinkService) {}

  @Get()
  @ApiOperation({ summary: 'Get all own drinks' })
  @ApiOkResponse(DrinkByIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  getAllOwnDrinks(@CurrentUser('id') userId: string) {
    return this.ownDrinkService.getAllOwnDrinks(userId)
  }

  @UsePipes(new ValidationPipe())
  @Post('add')
  @ApiOperation({ summary: 'Add own drink' })
  @ApiCreatedResponse(OwnDrinkResponseExample)
  @ApiBadRequestResponse(UserIsNot18YearsOldResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  addOwnDrink(
    @Body() dto: CreateOwnDrinkDto,
    @CurrentUser('id') userId: string
  ) {
    return this.ownDrinkService.addOwnDrink(dto, userId)
  }

  @Delete('remove/:id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Remove own drink' })
  @ApiNoContentResponse({ description: 'No content' })
  @ApiBadRequestResponse(InvalidObjectIdResponseExample)
  @ApiNotFoundResponse(UserNotFoundResponseExample)
  removeOwnDrink(
    @Param('id', IsObjectIdPipe) id: string,
    @CurrentUser('id') userId: string
  ) {
    return this.ownDrinkService.removeOwnDrink(id, userId)
  }
}
