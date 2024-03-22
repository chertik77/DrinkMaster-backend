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
  headers: {
    'Set-Cookie': { description: 'Refresh token', schema: { type: 'string' } }
  },
  content: {
    'application/json': {
      example: {
        user: {
          name: 'John Doe',
          email: 'test@gmail.com',
          password: '12345678',
          dateOfBirth: '2001-01-01',
          userTheme: 'dark',
          id: '65fc5e68ce24eefbd11a5113'
        },
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc5OTFlOWNiMDQ4MWM0NmUzNjE0NiIsImlhdCI6MTcwOTY3NjgzMCwiZXhwIjoxNzA5NjgwNDMwfQ.jCQulMoUbRdq1DLJz4wRSAh1kGGRiJ1ARHs2cnHzfxk'
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
