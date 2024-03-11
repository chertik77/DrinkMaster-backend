import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { verify } from 'argon2'
import { Response } from 'express'
import { Types } from 'mongoose'

import { UserService } from 'user/user.service'

import { SigninDto, SignupDto } from './auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UserService
  ) {}

  REFRESH_TOKEN_EXPIRE_DAY = 1
  REFRESH_TOKEN_NAME = 'refreshToken'

  async signup(dto: SignupDto) {
    const isUserExists = await this.userService.findOneByEmail(dto.email)

    if (isUserExists) throw new ConflictException('User already exists')

    const user = await this.userService.createNewUser(dto)

    const tokens = this.issueTokens(user._id)

    return { user, ...tokens }
  }

  async signin(dto: SigninDto) {
    const user = await this.validateUser(dto)

    const tokens = this.issueTokens(user._id)

    return { user, ...tokens }
  }

  async getNewTokens(refreshToken: string) {
    const result = await this.jwt.verifyAsync(refreshToken)

    if (!result) throw new UnauthorizedException('Invalid refresh token')

    const user = await this.userService.findById(result.id)

    const tokens = this.issueTokens(user?._id as Types.ObjectId)

    return { user, ...tokens }
  }

  private issueTokens(userId: Types.ObjectId) {
    const data = { id: userId }

    const accessToken = this.jwt.sign(data, {
      expiresIn: '1h'
    })

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d'
    })

    return { accessToken, refreshToken }
  }

  private async validateUser(dto: SigninDto) {
    const user = await this.userService.findOneByEmail(dto.email)

    if (!user) throw new NotFoundException('User not found')

    const isValidPassword = await verify(user.password, dto.password)

    if (!isValidPassword) throw new UnauthorizedException('Invalid password')

    return user
  }

  addRefreshTokenToResponse(res: Response, refreshToken: string) {
    const expiresIn = new Date()
    expiresIn.setDate(expiresIn.getDate() + this.REFRESH_TOKEN_EXPIRE_DAY)

    res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
      httpOnly: true,
      //TODO: Set domain to your production domain
      domain: 'localhost',
      expires: expiresIn,
      sameSite: 'lax',
      secure: true
    })
  }

  removeRefreshTokenFromResponse(res: Response) {
    res.cookie(this.REFRESH_TOKEN_NAME, '', {
      httpOnly: true,
      //TODO: Set domain to your production domain
      domain: 'localhost',
      expires: new Date(0),
      sameSite: 'lax',
      secure: true
    })
  }
}
