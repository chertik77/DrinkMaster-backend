export const AuthResponseExample = {
  headers: {
    'Set-Cookie': { description: 'Refresh token', schema: { type: 'string' } }
  },
  content: {
    'application/json': {
      example: {
        user: {
          name: 'Tom',
          email: 'test@gmail.com',
          password: 'qwerty',
          dateOfBirth: '2001-01-01',
          userTheme: 'light'
        },
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc5OTFlOWNiMDQ4MWM0NmUzNjE0NiIsImlhdCI6MTcwOTY3NjgzMCwiZXhwIjoxNzA5NjgwNDMwfQ.jCQulMoUbRdq1DLJz4wRSAh1kGGRiJ1ARHs2cnHzfxk'
      }
    }
  }
}

export const ConflictResponseExample = {
  content: {
    'application/json': {
      example: {
        message: 'User already exists',
        error: 'Conflict',
        statusCode: 409
      }
    }
  }
}

export const SignupBadRequestResponseExample = {
  content: {
    'application/json': {
      example: {
        message: ['Name should be at least 2 characters long'],
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}

export const SigninBadRequestResponseExample = {
  content: {
    'application/json': {
      example: {
        message: ['Password should be at least 6 characters long'],
        error: 'Bad Request',
        statusCode: 400
      }
    }
  }
}
