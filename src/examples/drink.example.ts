export const DrinkByIdResponseExample = {
  content: {
    'application/json': {
      example: {
        drink: 'Quentin',
        category: 'Ordinary Drink',
        alcoholic: 'Alcoholic',
        glass: 'Cocktail glass',
        description:
          'Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.',
        instructions:
          'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
        drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
        ingredients: [
          {
            title: 'Irish whiskey',
            measure: '1 1/2 oz ',
            ingredientId: '64aebb7f82d96cc69e0eb4c2'
          },
          {
            title: 'Coffee',
            measure: '8 oz ',
            ingredientId: '64aebb7f82d96cc69e0eb4e7'
          },
          {
            title: 'Sugar',
            measure: '1 tsp ',
            ingredientId: '64aebb7f82d96cc69e0eb4bc'
          },
          {
            title: 'Whipped cream',
            measure: '1 tblsp ',
            ingredientId: '64f1d5c069d8333cf130fb38'
          }
        ],
        owner: '65e7a45e583124bf6afe431c',
        id: '639b6de9ff77d221f190c50f'
      }
    }
  }
}

export const DrinkInFavoritesBadRequestResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'Drink already in favorites',
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}

export const UserIsNot18YearsOldResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'User is not 18 years old to add alcoholic drink',
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}

export const OwnDrinkResponseExample = {
  content: {
    'application/json': {
      example: {
        title: 'Martini',
        description: 'A refreshing and citrusy cocktail with a hint of mint.',
        drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
        category: 'Ordinary Drink',
        glass: 'Cocktail glass',
        alcoholic: 'Alcoholic',
        portionCount: 1,
        ingredients: [
          { title: 'Vodka', measure: '50ml' },
          { title: 'Lemon', measure: '1' }
        ],
        owner: '65e7a45e583124bf6afe431c',
        id: '65e7a45e583124bf6afe431c'
      }
    }
  }
}

export const OwnDrinkEditedResponseExample = {
  content: {
    'application/json': {
      example: {
        title: 'Red Joi',
        description: 'A refreshing and citrusy cocktail with a hint of mint.',
        drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
        category: 'Ordinary Drink',
        glass: 'Cocktail glass',
        alcoholic: 'Alcoholic',
        portionCount: 1,
        ingredients: [
          { title: 'Vodka', measure: '50ml' },
          { title: 'Lemon', measure: '1' }
        ],
        owner: '65e7a45e583124bf6afe431c',
        id: '65e7a45e583124bf6afe431c'
      }
    }
  }
}

export const SearchDrinksResponseExample = {
  content: {
    'application/json': {
      example: {
        totalPages: 89,
        total: 441,
        page: 1,
        limit: 5,
        drinks: [
          {
            drink: 'Quentin',
            category: 'Ordinary Drink',
            alcoholic: 'Alcoholic',
            glass: 'Cocktail glass',
            description:
              'Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.',
            instructions:
              'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
            id: '639b6de9ff77d221f190c50f'
          },
          {
            drink: 'Affair',
            category: 'Ordinary Drink',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              'Affair is a seductive and sophisticated cocktail that combines a mix of spirits and fruit juices. It is made with vodka, peach schnapps, cranberry juice, and orange juice. The combination of flavors creates a balanced and tantalizing drink that is sure to impress. It is best enjoyed in the company of someone special.',
            instructions:
              'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Affair.jpg',
            id: '639b6de9ff77d221f190c51e'
          },
          {
            drink: 'Avalon',
            category: 'Ordinary Drink',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              'Avalon is a tropical and fruity cocktail that transports you to a sunny beach with its blend of rum and tropical fruit juices. It is made with white rum, pineapple juice, orange juice, and a splash of grenadine. The result is a vibrant and refreshing drink that captures the essence of paradise. Sit back, relax, and enjoy the taste of the tropics.',
            instructions:
              'Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Avalon.jpg',
            id: '639b6de9ff77d221f190c520'
          },
          {
            drink: "Owen's Grandmother's Revenge",
            category: 'Ordinary Drink',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              "Owen's Grandmother's Revenge is a spicy and flavorful cocktail that pays homage to a family recipe. It is made with bourbon, ginger beer, lime juice, and a dash of bitters. The combination of spicy ginger, smooth bourbon, and tangy lime creates a unique and satisfying flavor profile. It's a drink that packs a punch and leaves a lasting impression.",
            instructions: 'Add ingredients and mix in blender.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Owen_s_Grandmother_s_Revenge.jpg',
            id: '639b6de9ff77d221f190c53d'
          },
          {
            drink: 'Porto flip',
            category: 'Ordinary Drink',
            alcoholic: 'Alcoholic',
            glass: 'Cocktail glass',
            description:
              "Porto flip is a rich and creamy cocktail that combines the flavors of port wine, brandy, and an egg yolk. It is made by shaking port wine, brandy, simple syrup, and an egg yolk together with ice. The result is a velvety smooth drink with a hint of sweetness and a touch of richness from the egg yolk. It's a sophisticated and indulgent choice for a special occasion.",
            instructions:
              'Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Porto_flip.jpg',
            id: '639b6de9ff77d221f190c549'
          }
        ]
      }
    }
  }
}

export const InvalidObjectIdResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'Invalid ObjectId',
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}

export const FavoriteDrinksResponseExample = {
  content: {
    'application/json': {
      example: [
        {
          drink: 'Orange Crush',
          category: 'Shot',
          alcoholic: 'Alcoholic',
          glass: 'Shot glass',
          description:
            'Orange Crush is a citrusy and effervescent cocktail that combines the flavors of orange vodka and fresh orange juice. It is made by muddling fresh orange slices with sugar, adding orange vodka and ice, and topping it off with sparkling water. The result is a bright and refreshing drink that is perfect for summer gatherings and brunches.',
          instructions: 'Add all ingredients to tumbler-Pour as shot',
          drinkThumb:
            'https://ftp.goit.study/img/drinkify/recipes/Orange_Crush.jpg',
          ingredients: [
            {
              title: 'Vodka',
              measure: '1 oz ',
              ingredientId: '64aebb7f82d96cc69e0eb4b9'
            },
            {
              title: 'Triple sec',
              measure: '1 oz ',
              ingredientId: '64aebb7f82d96cc69e0eb4ac'
            },
            {
              title: 'Orange juice',
              measure: '1 oz ',
              ingredientId: '64f1d5c069d8333cf130fb3d'
            }
          ]
        }
      ]
    }
  }
}

export const OwnDrinksResponseExample = {
  content: {
    'application/json': {
      example: [
        {
          title: 'Martini',
          description: 'A refreshing and citrusy cocktail with a hint of mint.',
          drinkThumb: 'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
          category: 'Ordinary Drink',
          glass: 'Cocktail glass',
          alcoholic: 'Alcoholic',
          portionCount: 1,
          ingredients: [
            { title: 'Vodka', measure: '50ml' },
            { title: 'Lemon', measure: '1' }
          ],
          owner: '65e7a45e583124bf6afe431c',
          id: '65e7a45e583124bf6afe431c'
        }
      ]
    }
  }
}
