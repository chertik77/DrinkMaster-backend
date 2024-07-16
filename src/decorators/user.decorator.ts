import type { ExecutionContext } from '@nestjs/common'
import type { UserDocument } from 'schemas'

import { createParamDecorator } from '@nestjs/common'

export const CurrentUser = createParamDecorator(
  (data: keyof UserDocument, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    const user = request.user

    return data ? user[data] : user
  }
)
