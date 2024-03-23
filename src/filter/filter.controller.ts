import * as NestjsCommon from '@nestjs/common'
import * as NestjsSwagger from '@nestjs/swagger'

import * as Examples from 'examples'

import { Auth } from 'decorators'

import { FilterService } from './filters.service'

@NestjsCommon.Controller('filters')
@NestjsSwagger.ApiTags('Filters')
@NestjsSwagger.ApiBearerAuth()
@NestjsSwagger.ApiUnauthorizedResponse(Examples.UnauthorizedResponseExample)
@Auth()
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @NestjsCommon.Get('glasses')
  @NestjsSwagger.ApiOkResponse(Examples.GlassResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all glasses' })
  getAllGlasses() {
    return this.filterService.getAllGlasses()
  }

  @NestjsCommon.Get('ingredients')
  @NestjsSwagger.ApiOkResponse(Examples.IngredientResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all ingredients' })
  getAllIngredients() {
    return this.filterService.getAllIngredients()
  }

  @NestjsCommon.Get('categories')
  @NestjsSwagger.ApiOkResponse(Examples.CategoryResponseExample)
  @NestjsSwagger.ApiOperation({ summary: 'Get all categories' })
  getAllCategories() {
    return this.filterService.getAllCategories()
  }
}
