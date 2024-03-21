# Drink Master Backend

A brief description of what this project does and who it's for

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

## Features

- User Authentication and Authorization
- Email Notifications
- Security and Validation
- Documentation and Testing
- Drink Management

## Documentation

[Link to the API Documentation](https://linktodocumentation)

## Tech Stack

**Main Technologies:**

Node.js, Nest.js, Typescript, MongoDB, Mongoose

**Additional Technologies:**

_Nest.js Modules:_

- Nest.js Mailer: Nest.js module to handle email sending functionality.

- Nest.js Config: Nest.js module for configuration management.

- Nest.js Jwt: Nest.js module for JSON Web Token (JWT) implementation.

- Nest.js Passport: Nest.js module for authentication with Passport.

- Nest.js Swagger: Nest.js module for Swagger/OpenAPI integration.

- Nest.js Object Id: Nest.js module for ObjectId validation.

_Another Modules:_

- Argon2: A password hashing library.

- Сlass Validator & Class Transformer: Libraries for performing transforming and validating objects.

- Cookie Parser: Middleware for parsing cookies.

- Passport: Authentication middleware for Node.js.

- Passport Jwt: Passport strategy for authenticating with a JSON Web Token.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`

`JWT_SECRET`

`ALLOWED_ORIGINS`

`PORT`

`MAILER_USER`

`MAILER_PASS`

`MAILER_PORT`

`MAILER_HOST`

## Run Locally

Clone the project

```bash
  git clone https://github.com/chertik77/DrinkMaster-backend
```

Go to the project directory

```bash
  cd DrinkMaster-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
