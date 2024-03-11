import { ApiProperty } from '@nestjs/swagger'

import { Type } from 'class-transformer'
import {
  IsArray,
  IsIn,
  IsNumber,
  IsString,
  Min,
  MinLength,
  ValidateNested
} from 'class-validator'

import { alcoholicEnum, categoryEnum, glassEnum } from 'schemas'

import { CheckUserIdDto } from './drink.dto'

class IngredientDto {
  @ApiProperty()
  @MinLength(2, { message: 'Title should be at least 2 characters' })
  title: string

  @ApiProperty()
  @IsString()
  measure: string
}

export class CreateOwnDrinkDto extends CheckUserIdDto {
  @ApiProperty({ example: 'Martini' })
  @MinLength(2, { message: 'Title should be at least 2 characters' })
  title: string

  @ApiProperty({
    example: 'A refreshing and citrusy cocktail with a hint of mint.'
  })
  @MinLength(5, { message: 'Title should be at least 5 characters' })
  @IsString()
  description: string

  @ApiProperty({
    example: 'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg'
  })
  @IsString()
  drinkThumb: string

  @ApiProperty({ example: 'Ordinary Drink' })
  @IsIn(categoryEnum)
  category: string

  @ApiProperty({ example: 'Cocktail glass' })
  @IsIn(glassEnum)
  glass: string

  @ApiProperty({ example: 'Alcoholic' })
  @IsIn(alcoholicEnum)
  alcoholic: string

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Min(1)
  portionCount: number

  @ApiProperty({
    isArray: true,
    example: [
      { title: 'Vodka', measure: '50ml' },
      { title: 'Lemon', measure: '1' }
    ]
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IngredientDto)
  ingredients: IngredientDto[]

  @ApiProperty({
    example:
      'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.'
  })
  @MinLength(5, { message: 'Title should be at least 5 characters' })
  instructions: string
}
