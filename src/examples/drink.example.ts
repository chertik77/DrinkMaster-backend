export const DrinkByIdResponseExample = {
  content: {
    'application/json': {
      example: {
        _id: '639b6de9ff77d221f190c50f',
        drink: 'Quentin',
        drinkAlternate: 'Sorry, not specified',
        tags: 'IBA,ContemporaryClassic',
        video: 'https://www.youtube.com/watch?v=2jtoa_t7g94',
        category: 'Ordinary Drink',
        IBA: 'Contemporary Classics',
        alcoholic: 'Alcoholic',
        glass: 'Cocktail glass',
        description:
          'Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.',
        instructions:
          'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
        instructionsES:
          'En una coctelera llena hasta la mitad con cubitos de hielo, combine el ron, Kahlua y la crema. Agite bien. Colar en una copa de cóctel y decorar con la nuez moscada.',
        instructionsDE:
          'In einem Shaker, der halb mit Eiswürfeln gefüllt ist, Rum, Kahlua und Sahne mischen. Gut schütteln. In ein Cocktailglas abseihen und mit der Muskatnuss garnieren.',
        instructionsFR:
          'Dans un shaker à moitié rempli de glaçons, mélanger le rhum, le Kahlua et la crème. Bien agiter. Versez dans un verre à cocktail et décorez avec la noix de muscade.',
        instructionsIT:
          'In uno shaker riempito a metà con cubetti di ghiaccio, unire il rum, il Kahlua e la panna. Filtrare in una coppetta da cocktail e guarnire con la noce moscata. Agitare bene.',
        instructionsRU:
          'В шейкере, наполовину наполненном кубиками льда, смешайте ром, Калуа и сливки. Хорошо встряхнуть. Процедите в коктейльный бокал и украсьте мускатным орехом.',
        instructionsPL:
          'W shakerze wypełnionym do połowy kostkami lodu wymieszać rum, Kahlua i śmietanę. Dobrze wstrząsnąć. Przelej do kieliszka koktajlowego i udekoruj gałką muszkatołową.',
        instructionsUK:
          'У шейкері, наповненому наполовину кубиками льоду, змішайте ром, Калуа та вершки. Добре струсити. Процідіть у келих для коктейлю та прикрасьте мускатним горіхом.',
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
        shortDescription:
          'A refreshing and citrusy cocktail with a hint of mint.',
        owner: '65e7a45e583124bf6afe431c'
      }
    }
  }
}

export const InvalidIdResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'Invalid drink id',
        error: 'Bad Request',
        statusCode: 400
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
        _id: '65e7a45e583124bf6afe431c',
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
        owner: '65e7a45e583124bf6afe431c'
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
            _id: '639b6de9ff77d221f190c50f',
            drink: 'Quentin',
            drinkAlternate: 'Sorry, not specified',
            tags: 'IBA,ContemporaryClassic',
            video: 'https://www.youtube.com/watch?v=2jtoa_t7g94',
            category: 'Ordinary Drink',
            IBA: 'Contemporary Classics',
            alcoholic: 'Alcoholic',
            glass: 'Cocktail glass',
            description:
              'Quentin is a refreshing cocktail that combines the flavors of citrus and mint. It is made with fresh lime juice, orange liqueur, and a touch of mint syrup. The drink is served over ice and garnished with a sprig of mint. It is the perfect beverage for a hot summer day.',
            instructions:
              'In a shaker half-filled with ice cubes, combine the rum, Kahlua, and cream. Shake well. Strain into a cocktail glass and garnish with the nutmeg.',
            instructionsES:
              'En una coctelera llena hasta la mitad con cubitos de hielo, combine el ron, Kahlua y la crema. Agite bien. Colar en una copa de cóctel y decorar con la nuez moscada.',
            instructionsDE:
              'In einem Shaker, der halb mit Eiswürfeln gefüllt ist, Rum, Kahlua und Sahne mischen. Gut schütteln. In ein Cocktailglas abseihen und mit der Muskatnuss garnieren.',
            instructionsFR:
              'Dans un shaker à moitié rempli de glaçons, mélanger le rhum, le Kahlua et la crème. Bien agiter. Versez dans un verre à cocktail et décorez avec la noix de muscade.',
            instructionsIT:
              'In uno shaker riempito a metà con cubetti di ghiaccio, unire il rum, il Kahlua e la panna. Filtrare in una coppetta da cocktail e guarnire con la noce moscata. Agitare bene.',
            instructionsRU:
              'В шейкере, наполовину наполненном кубиками льда, смешайте ром, Калуа и сливки. Хорошо встряхнуть. Процедите в коктейльный бокал и украсьте мускатным орехом.',
            instructionsPL:
              'W shakerze wypełnionym do połowy kostkami lodu wymieszać rum, Kahlua i śmietanę. Dobrze wstrząsnąć. Przelej do kieliszka koktajlowego i udekoruj gałką muszkatołową.',
            instructionsUK:
              'У шейкері, наповненому наполовину кубиками льоду, змішайте ром, Калуа та вершки. Добре струсити. Процідіть у келих для коктейлю та прикрасьте мускатним горіхом.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Quentin.jpg',
            shortDescription:
              'A refreshing and citrusy cocktail with a hint of mint.'
          },
          {
            _id: '639b6de9ff77d221f190c51e',
            drink: 'Affair',
            drinkAlternate: 'Sorry, not specified',
            tags: 'OrdinaryDrink,Alcoholic',
            video: 'https://youtu.be/BGTB26zMxjw?si=hgl0lfGa9VgBK9mi',
            category: 'Ordinary Drink',
            IBA: 'Sorry, not specified',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              'Affair is a seductive and sophisticated cocktail that combines a mix of spirits and fruit juices. It is made with vodka, peach schnapps, cranberry juice, and orange juice. The combination of flavors creates a balanced and tantalizing drink that is sure to impress. It is best enjoyed in the company of someone special.',
            instructions:
              'Pour schnapps, orange juice, and cranberry juice over ice in a highball glass. Top with club soda and serve.',
            instructionsES:
              'Vierta el Schnapps, el jugo de naranja y el jugo de arándano sobre hielo en un vaso alto. Complete con el agua carbonatada y sirva.',
            instructionsDE:
              'Gießen Sie Schnaps, Orangensaft und Cranberrysaft über Eis in ein Highball-Glas. Mit Club-Soda überziehen und servieren.',
            instructionsFR:
              "Verser le schnaps, le jus d'orange et le jus de canneberge sur de la glace dans un verre highball. Garnir de club soda et servir.",
            instructionsIT:
              "Versare la grappa, il succo d'arancia e il succo di mirtillo rosso sul ghiaccio in un bicchiere highball. Completare con la soda club e servire.",
            instructionsRU:
              'Налейте шнапс, апельсиновый сок и клюквенный сок со льдом в стакан хайбол. Долейте содовой и подавайте.',
            instructionsPL:
              'Wlej sznaps, sok pomarańczowy i sok żurawinowy do lodu w szklance typu highball. Na wierzch z sodą klubową i podawaj.',
            instructionsUK:
              'Розлийте шнапс, апельсиновий сік і журавлинний сік з льодом у келих хайбол. Зверху полийте газованою водою та подавайте.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Affair.jpg',
            shortDescription:
              'A seductive and sophisticated cocktail with a mix of spirits and fruit juices.'
          },
          {
            _id: '639b6de9ff77d221f190c520',
            drink: 'Avalon',
            drinkAlternate: 'Sorry, not specified',
            tags: 'OrdinaryDrink,Alcoholic',
            video: 'https://youtu.be/lxwWmXIuqrI?si=SOOIxhBhjV4eERs9',
            category: 'Ordinary Drink',
            IBA: 'Sorry, not specified',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              'Avalon is a tropical and fruity cocktail that transports you to a sunny beach with its blend of rum and tropical fruit juices. It is made with white rum, pineapple juice, orange juice, and a splash of grenadine. The result is a vibrant and refreshing drink that captures the essence of paradise. Sit back, relax, and enjoy the taste of the tropics.',
            instructions:
              'Fill a tall glass with ice. Layer the Finlandia Vodka, lemon and apple juices, Pisang Ambon, and top up with lemonade. Stir slightly and garnish with a spiralled cucumber skin and a red cherry. The cucumber provides zest and looks attractive. This drink, created by Timo Haimi, took first prize in the 1991 Finlandia Vodka Long Drink Competition.',
            instructionsES:
              'Llena un vaso alto con hielo. Agregue el vodka, los jugos de limón y manzana, el licor de plátano Pisang Ambon y complete con limonada. Revuelva ligeramente y adorne con una cáscara de pepino en espiral y una cereza roja. El pepino proporciona entusiasmo y se ve atractivo. Esta bebida, creada por Timo Haimi, ganó el primer premio en el Concurso de Tragos Largos de Vodka de Finlandia de 1991.',
            instructionsDE:
              'Füllen Sie ein hohes Glas mit Eis. Legen Sie den Finlandia Wodka, Zitronen- und Apfelsäfte, Pisang Ambon und geben Sie Limonade dazu. Leicht umrühren und mit einer spiralförmigen Gurkenhaut und einer roten Kirsche garnieren. Die Gurke sorgt für Schärfe und sieht attraktiv aus. Dieses von Timo Haimi kreierte Getränk erhielt 1991 den ersten Preis beim Finlandia Wodka Long Drink Wettbewerb.',
            instructionsFR:
              "Remplissez un grand verre de glace. Superposez la vodka Finlandia, les jus de citron et de pomme, le Pisang Ambon et complétez avec de la limonade. Remuer légèrement et garnir d'une peau de concombre en spirale et d'une cerise rouge. Le concombre donne du zeste et a l'air attrayant. Cette boisson, créée par Timo Haimi, a remporté le premier prix du concours Finlandia Vodka Long Drink en 1991.",
            instructionsIT:
              'Riempi un bicchiere alto di ghiaccio.\r\nVersare la Vodka, succhi di limone, mela, Pisang Ambon o un liquore alla banana e completare con la limonata.\r\nMescolare leggermente e guarnire con una buccia di cetriolo a spirale e una ciliegia rossa.\r\nIl cetriolo fornisce la scorza e sembra attraente.\r\nQuesta bevanda, creata da Timo Haimi, ha vinto il primo premio nel 1991 Finlandia Vodka Long Drink Competition.',
            instructionsRU:
              'Наполните высокий стакан льдом. Налейте водку Finlandia, лимонный и яблочный соки, писанг амбон и долейте лимонад. Слегка перемешайте и украсьте свернутой спиралью кожурой огурца и красной вишней. Огурец дает изюминку и выглядит привлекательно. Этот напиток, созданный Тимо Хайми, занял первое место на конкурсе лонгдринков Finlandia Vodka в 1991 году.',
            instructionsPL:
              'Napełnij wysoką szklankę lodem. Pokryj wódką Finlandia, sokiem z cytryny i jabłka, Pisang Ambon i dopełnij lemoniadą. Delikatnie wymieszaj i udekoruj spiralną skórką ogórka i czerwoną wiśnią. Ogórek dodaje skórki i atrakcyjnie wygląda. Stworzony przez Timo Haimiego napój zdobył pierwszą nagrodę w konkursie Finlandia Vodka Long Drink w 1991 roku.',
            instructionsUK:
              'Наповніть високий стакан льодом. Покладіть горілку Finlandia, лимонний і яблучний соки, пісанг-амбон і залийте лимонадом. Трохи перемішайте та прикрасьте шкіркою огірка зі спіралькою та червоною вишнею. Огірок надає родзинку і виглядає привабливо. Цей напій, створений Тімо Хаімі, зайняв першу премію на конкурсі Finlandia Vodka Long Drink Competition у 1991 році.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Avalon.jpg',
            shortDescription:
              'A tropical and fruity cocktail with a blend of rum and tropical fruit juices.'
          },
          {
            _id: '639b6de9ff77d221f190c53d',
            drink: "Owen's Grandmother's Revenge",
            drinkAlternate: 'Sorry, not specified',
            tags: 'OrdinaryDrink,Alcoholic',
            video: 'Sorry, not specified',
            category: 'Ordinary Drink',
            IBA: 'Sorry, not specified',
            alcoholic: 'Alcoholic',
            glass: 'Highball glass',
            description:
              "Owen's Grandmother's Revenge is a spicy and flavorful cocktail that pays homage to a family recipe. It is made with bourbon, ginger beer, lime juice, and a dash of bitters. The combination of spicy ginger, smooth bourbon, and tangy lime creates a unique and satisfying flavor profile. It's a drink that packs a punch and leaves a lasting impression.",
            instructions: 'Add ingredients and mix in blender.',
            instructionsES:
              'Agregue los ingredientes y mezcle en la licuadora.',
            instructionsDE: 'Zutaten im Mixer vermengen.',
            instructionsFR: 'Ajouter les ingrédients et mélanger au mélangeur.',
            instructionsIT:
              'Aggiungere gli ingredienti e mescola nel frullatore.',
            instructionsRU: 'Добавьте ингредиенты и смешайте в блендере.',
            instructionsPL: 'Dodaj składniki i wymieszaj w blenderze.',
            instructionsUK: 'Додайте інгредієнти та перемішайте в блендері.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Owen_s_Grandmother_s_Revenge.jpg',
            shortDescription:
              'A spicy and flavorful cocktail with bourbon, ginger beer, and bitters.'
          },
          {
            _id: '639b6de9ff77d221f190c549',
            drink: 'Porto flip',
            drinkAlternate: 'Sorry, not specified',
            tags: 'IBA,Classic',
            video: 'https://www.youtube.com/watch?v=2jtoa_t7g94',
            category: 'Ordinary Drink',
            IBA: 'Unforgettables',
            alcoholic: 'Alcoholic',
            glass: 'Cocktail glass',
            description:
              "Porto flip is a rich and creamy cocktail that combines the flavors of port wine, brandy, and an egg yolk. It is made by shaking port wine, brandy, simple syrup, and an egg yolk together with ice. The result is a velvety smooth drink with a hint of sweetness and a touch of richness from the egg yolk. It's a sophisticated and indulgent choice for a special occasion.",
            instructions:
              'Shake ingredients together in a mixer with ice. Strain into glass, garnish and serve.',
            instructionsES:
              'Agite los ingredientes en una batidora con hielo. Colar en un vaso, decorar y servir.',
            instructionsDE:
              'Die Zutaten in einem Mixer mit Eis verrühren. In ein Glas abseihen, garnieren und servieren.',
            instructionsFR:
              'Secouer les ingrédients ensemble dans un mélangeur avec de la glace. Passer dans un verre, décorer et servir.',
            instructionsIT:
              'Shakerare gli ingredienti insieme in un mixer con ghiaccio.\r\nFiltrare nel bicchiere, guarnire e servire.',
            instructionsRU:
              'Взбить ингредиенты в миксере со льдом. Процедите в стакан, украсьте и подавайте.',
            instructionsPL:
              'Wymieszaj składniki w mikserze z lodem. Odcedź do szklanki, udekoruj i podawaj.',
            instructionsUK:
              'Збовтайте інгредієнти в міксері з льодом. Процідіть у склянку, прикрасьте та подавайте.',
            drinkThumb:
              'https://ftp.goit.study/img/drinkify/recipes/Porto_flip.jpg',
            shortDescription:
              'A rich and creamy cocktail with port wine, brandy, and an egg yolk.'
          }
        ]
      }
    }
  }
}
