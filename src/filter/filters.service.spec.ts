import type { Model } from 'mongoose'

import { getModelToken } from '@nestjs/mongoose'
import { Test, TestingModule } from '@nestjs/testing'

import { Category, Glass, Ingredient } from 'schemas'

import { FilterService } from './filters.service'

describe('filterService', () => {
  let service: FilterService
  let categoryModel: Model<Category>
  let glassModel: Model<Glass>
  let ingredientModel: Model<Ingredient>

  const mockCategoryService = {
    find: jest.fn()
  }

  const mockGlassService = {
    find: jest.fn()
  }

  const mockIngredientService = {
    find: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FilterService,
        {
          provide: getModelToken(Ingredient.name),
          useValue: mockIngredientService
        },
        {
          provide: getModelToken(Glass.name),
          useValue: mockGlassService
        },
        {
          provide: getModelToken(Category.name),
          useValue: mockCategoryService
        }
      ]
    }).compile()

    service = module.get<FilterService>(FilterService)
    categoryModel = module.get<Model<Category>>(getModelToken(Category.name))
    glassModel = module.get<Model<Glass>>(getModelToken(Glass.name))
    ingredientModel = module.get<Model<Ingredient>>(
      getModelToken(Ingredient.name)
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return an array of categories', async () => {
    const result = [{ id: '65e239dc2410175666785c6d', name: 'Cocoa' }]

    const findSpy = jest.spyOn(categoryModel, 'find').mockResolvedValue(result)

    const categories = await service.getAllCategories()

    expect(findSpy).toHaveBeenCalledTimes(1)

    expect(categories).toStrictEqual(result)

    expect(categories).toHaveLength(result.length)

    categories.forEach(category => {
      expect(category).toHaveProperty('id')
      expect(category).toHaveProperty('name')
    })
  })

  it('should return an array of glasses', async () => {
    const result = [{ id: '65e239dc2410175666785c6d', name: 'Jar' }]

    const findSpy = jest.spyOn(glassModel, 'find').mockResolvedValue(result)

    const glasses = await service.getAllGlasses()

    expect(findSpy).toHaveBeenCalledTimes(1)

    expect(glasses).toStrictEqual(result)

    expect(glasses).toHaveLength(result.length)

    glasses.forEach(glass => {
      expect(glass).toHaveProperty('id')
      expect(glass).toHaveProperty('name')
    })
  })

  it('should return an array of ingredients', async () => {
    const result = [
      {
        title: 'Tea',
        ingredientThumb:
          'https://ftp.goit.study/img/drinkify/ingredients/Tea.png',
        'thumb-medium':
          'https://ftp.goit.study/img/drinkify/ingredients/Tea-Medium.png',
        'thumb-small':
          'https://ftp.goit.study/img/drinkify/ingredients/Tea-Small.png',
        abv: '0',
        alcohol: 'No',
        description:
          "Tea is a popular aromatic beverage made by steeping the dried leaves of the Camellia sinensis plant in hot water. It's one of the most widely consumed beverages in the world, known for its diverse flavours and potential health benefits.",
        type: 'Tea',
        flavour: 'tea',
        country: 'United States',
        id: '64aebb7f82d96cc69e0eb4b4'
      }
    ]

    const findSpy = jest
      .spyOn(ingredientModel, 'find')
      .mockResolvedValue(result)

    const ingredients = await service.getAllIngredients()

    expect(findSpy).toHaveBeenCalledTimes(1)

    expect(ingredients).toStrictEqual(result)

    expect(ingredients).toHaveLength(result.length)

    ingredients.forEach(ingredient => {
      expect(ingredient).toMatchObject(result[0])
    })
  })
})
