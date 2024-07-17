export const UserBadRequestResponseExample = {
  content: {
    'application/json': {
      example: {
        message: ['dateOfBirth must be a valid ISO 8601 date string'],
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}

export const UserResponseExample = {
  content: {
    'application/json': {
      example: {
        user: {
          name: 'John Doe',
          email: 'test@gmail.com',
          dateOfBirth: '2001-01-01',
          theme: 'dark',
          avatarURL:
            'https://res.cloudinary.com/dtidyjjal/image/upload/v1711641847/user_j7h0g8.png',
          id: '65fc5e68ce24eefbd11a5113'
        }
      }
    }
  }
}

export const UserLetterResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'User successfully subscribed to our newsletter'
      }
    }
  }
}

export const UserProfileResponseExample = {
  content: {
    'application/json': {
      example: {
        name: 'John Doe',
        email: 'test@gmail.com',
        dateOfBirth: '2001-01-01',
        theme: 'light',
        avatarURL:
          'https://res.cloudinary.com/dtidyjjal/image/upload/v1711641847/user_j7h0g8.png',
        id: '65fc5e68ce24eefbd11a5113'
      }
    }
  }
}
