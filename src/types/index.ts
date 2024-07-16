import type { ConfigService } from '@nestjs/config'

type EnvVariebles = {
  DB_HOST: string
  DOMAIN: string
  JWT_SECRET: string
  PORT: number
  ALLOWED_ORIGINS: string
  COOKIES_SAME_SITE: string
  MAILER_USER: string
  MAILER_PASS: string
  MAILER_PORT: number
  MAILER_HOST: string
  CLOUDINARY_CLOUD_NAME: string
  CLOUDINARY_API_KEY: string
  CLOUDINARY_API_SECRET: string
}

export type TypedConfigService = ConfigService<EnvVariebles>
