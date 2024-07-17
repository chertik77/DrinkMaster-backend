import { ApiProperty, OmitType } from '@nestjs/swagger'

import { IsDateString, IsEmail, MinLength } from 'class-validator'

export class SignupDto {
  @ApiProperty({ example: 'Tom' })
  @MinLength(2, { message: 'Name should be at least 2 characters long' })
  name: string

  @ApiProperty({ example: 'test@gmail.com' })
  @IsEmail()
  email: string

  @ApiProperty({ example: 'qwerty' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string

  @ApiProperty({ example: '2001-01-01' })
  @IsDateString()
  birthdate: string
}

export class SigninDto extends OmitType(SignupDto, [
  'name',
  'birthdate'
] as const) {}
