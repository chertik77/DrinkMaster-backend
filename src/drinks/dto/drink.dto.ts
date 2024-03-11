import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import { IsIn, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator'

import { categoryEnum } from 'schemas'

export class CheckUserIdDto {
  @ApiProperty({ example: '65e492cfb5052a006e97a580' })
  @IsMongoId()
  userId: string
}

export class FavoriteDrinkDto extends CheckUserIdDto {
  @ApiProperty({ example: '639b6de9ff77d221f190c50f' })
  @IsMongoId()
  favoriteDrinkId: string
}

export class OwnDrinkDto extends CheckUserIdDto {
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
