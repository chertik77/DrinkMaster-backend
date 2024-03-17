import { ApiPropertyOptional } from '@nestjs/swagger'

import { IsIn, IsNotEmpty, IsOptional } from 'class-validator'

import { categoryEnum } from 'schemas'

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
