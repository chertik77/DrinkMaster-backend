import { ConfigService } from '@nestjs/config'

export const getMailerConfig = async (configService: ConfigService) => ({
  transport: {
    host: configService.get('MAILER_HOST'),
    port: configService.get('MAILER_PORT'),
    secure: true,
    auth: {
      user: configService.get('MAILER_USER'),
      pass: configService.get('MAILER_PASS')
    }
  },
  defaults: {
    from: `"Drink Master Team" <${configService.get('MAILER_USER')}>`
  }
})
