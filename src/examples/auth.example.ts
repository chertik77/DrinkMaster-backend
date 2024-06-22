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
          dateOfBirth: '2001-01-01',
          userTheme: 'light',
          avatarURL:
            'https://res.cloudinary.com/dtidyjjal/image/upload/v1711641847/user_j7h0g8.png',
          id: '65fc5e68ce24eefbd11a5113'
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

export const TokensResponseExample = {
  headers: {
    'Set-Cookie': { description: 'Refresh token', schema: { type: 'string' } }
  },
  content: {
    'application/json': {
      example: {
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc5OTFlOWNiMDQ4MWM0NmUzNjE0NiIsImlhdCI6MTcwOTY3NjgzMCwiZXhwIjoxNzA5NjgwNDMwfQ.jCQulMoUbRdq1DLJz4wRSAh1kGGRiJ1ARHs2cnHzfxk'
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
