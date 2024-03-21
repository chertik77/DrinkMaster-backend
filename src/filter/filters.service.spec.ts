import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { Model } from 'mongoose'

import { Category } from 'schemas/category.schema'
import { Glass } from 'schemas/glass.schema'
import { Ingredient } from 'schemas/ingredient.schema'

import { FilterService } from './filters.service'

describe('FilterService', () => {
  let service: FilterService
  let categoryModel: Model<Category>

  const mockCategoryService = {
    find() {
      return {}
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilterService,
        { provide: getModelToken(Glass.name), useValue: {} },
        { provide: getModelToken(Category.name), useValue: {} },
        {
          provide: getModelToken(Ingredient.name),
          useValue: mockCategoryService
        }
      ]
    }).compile()

    service = module.get<FilterService>(FilterService)
    categoryModel = module.get<Model<Category>>(getModelToken(Category.name))
  })

  it('should return all categories', async () => {
    const result = [{ _id: '65e239dc2410175666785c6d', name: 'Cocoa' }]
    jest.spyOn(categoryModel, 'find').mockResolvedValue(result)

    expect(await service.getAllCategories()).toBe(result)
  })
})
