import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import {
  IsDateString,
  IsEmail,
  IsIn,
  IsOptional,
  MinLength
} from 'class-validator'

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'John Doe' })
  @MinLength(2, { message: 'Name should be at least 2 characters long' })
  @IsOptional()
  name?: string

  @IsEmail()
  @IsOptional()
  email?: string

  @ApiPropertyOptional({ example: '12345678' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  @IsOptional()
  password?: string

  @IsDateString()
  @IsOptional()
  birthdate?: string

  @ApiPropertyOptional({ example: 'dark' })
  @IsIn(['light', 'dark'])
  @IsOptional()
  theme?: string
}

export class SubscribeUserDto {
  @ApiProperty({ example: 'test@gmail.com' })
  @IsEmail()
  email: string
}
