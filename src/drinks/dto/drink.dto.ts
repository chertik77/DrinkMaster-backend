import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import { IsIn, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator'

import { categoryEnum } from 'schemas'

export class FavoriteDrinkDto {
  @ApiProperty({ example: '639b6de9ff77d221f190c50f' })
  @IsMongoId()
  favoriteDrinkId: string
}

export class OwnDrinkDto {
  @ApiProperty({ example: '639b6de9ff77d221f190c50f' })
  @IsMongoId()
  ownDrinkId: string
}

export class SearchDrinksDto {
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  drinkName?: string

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({ enum: categoryEnum })
  @IsIn(categoryEnum)
  category?: string

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  ingredient?: string

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({ default: 1 })
  page?: number

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({ default: 9 })
  limit?: number
}
