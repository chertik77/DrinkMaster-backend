import { Controller, Get } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger'

import {
  CategoryResponseExample,
  GlassResponseExample,
  IngredientResponseExample,
  UnauthorizedResponseExample
} from 'examples'

import { Auth } from 'guards/auth.guard'

import { FiltersService } from './filters.service'

@Controller('filters')
@Auth()
@ApiTags('Filters')
@ApiBearerAuth()
@ApiUnauthorizedResponse(UnauthorizedResponseExample)
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get('/glasses')
  @ApiOkResponse(GlassResponseExample)
  @ApiOperation({ summary: 'Get all glasses' })
  getAllGlasses() {
    return this.filtersService.getAllGlasses()
  }

  @Get('/ingredients')
  @ApiOkResponse(IngredientResponseExample)
  @ApiOperation({ summary: 'Get all ingredients' })
  getAllIngredients() {
    return this.filtersService.getAllIngredients()
  }

  @Get('/categories')
  @ApiOkResponse(CategoryResponseExample)
  @ApiOperation({ summary: 'Get all categories' })
  getAllCategories() {
    return this.filtersService.getAllCategories()
  }
}
