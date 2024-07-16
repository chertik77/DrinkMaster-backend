import type { JwtModuleOptions } from '@nestjs/jwt'
import type { EnvVariebles } from 'types/environment'

import { ConfigService } from '@nestjs/config'

export const getJwtConfig = async (
  configService: ConfigService<EnvVariebles>
): Promise<JwtModuleOptions> => ({
  secret: configService.get('JWT_SECRET')
})
