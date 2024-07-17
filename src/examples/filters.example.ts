export const IngredientResponseExample = {
  content: {
    'application/json': {
      example: [
        {
          title: 'Light rum',
          ingredientThumb:
            'https://ftp.goit.study/img/drinkify/ingredients/Light_rum.png',
          'thumb-medium':
            'https://ftp.goit.study/img/drinkify/ingredients/Light_rum-Medium.png',
          'thumb-small':
            'https://ftp.goit.study/img/drinkify/ingredients/Light_rum-Small.png',
          id: '64aebb7f82d96cc69e0eb4a4'
        },
        {
          title: 'Applejack',
          ingredientThumb:
            'https://ftp.goit.study/img/drinkify/ingredients/Applejack.png',
          'thumb-medium':
            'https://ftp.goit.study/img/drinkify/ingredients/Applejack-Medium.png',
          'thumb-small':
            'https://ftp.goit.study/img/drinkify/ingredients/Applejack-Small.png',
          id: '64aebb7f82d96cc69e0eb4a5'
        }
      ]
    }
  }
}

export const GlassResponseExample = {
  content: {
    'application/json': {
      example: [
        { name: 'Highball glass', id: '65e237d62410175666785c4c' },
        { name: 'Cocktail glass', id: '65e238032410175666785c4d' },
        { name: 'Old-fashioned glass', id: '65e238122410175666785c4e' },
        { name: 'Whiskey Glass', id: '65e238262410175666785c4f' }
      ]
    }
  }
}

export const CategoryResponseExample = {
  content: {
    'application/json': {
      example: [
        { name: 'Ordinary Drink', id: '65e239dc2410175666785c6d' },
        { name: 'Cocktail, Shake', id: '65e239f12410175666785c6e' },
        { name: 'Other/Unknown', id: '65e23a002410175666785c6f' }
      ]
    }
  }
}
