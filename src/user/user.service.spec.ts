import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { MailerService } from '@nestjs-modules/mailer'

import { User } from 'schemas/user.schema'

import { UserService } from './user.service'

describe('userService', () => {
  let service: UserService
  // let model: Model<User>

  const mockAuthService = {
    create: jest.fn(),
    findByIdAndUpdate: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getModelToken(User.name), useValue: {} },
        { provide: MailerService, useValue: {} },
        {
          provide: getModelToken(User.name),
          useValue: mockAuthService
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
    // model = module.get<Model<User>>(getModelToken(User.name))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
