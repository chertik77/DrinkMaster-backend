import type { JwtModuleOptions } from '@nestjs/jwt'

import { TypedConfigService } from 'types'

export const getJwtConfig = async (
  configService: TypedConfigService
): Promise<JwtModuleOptions> => ({
  secret: configService.get('JWT_SECRET')
})
