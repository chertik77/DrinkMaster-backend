import type { MailerOptions } from '@nestjs-modules/mailer'
import type { EnvVariebles } from 'types/environment'

import { ConfigService } from '@nestjs/config'

import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

export const getMailerConfig = async (
  configService: ConfigService<EnvVariebles>
): Promise<MailerOptions> => ({
  transport: {
    host: configService.get('MAILER_HOST'),
    port: configService.get('MAILER_PORT'),
    secure: true,
    auth: {
      user: configService.get('MAILER_USER'),
      pass: configService.get('MAILER_PASS')
    }
  },
  template: {
    dir: process.cwd() + '/templates/',
    adapter: new HandlebarsAdapter(),
    options: { strict: true }
  },
  defaults: {
    from: `"No Reply" <${configService.get('MAILER_USER')}>`
  }
})
