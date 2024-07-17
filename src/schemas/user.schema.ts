import type { HydratedDocument } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import isEmail from 'validator/lib/isEmail'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true, minlength: 2 })
  name: string

  @Prop({
    required: true,
    unique: true,
    validate: (v: string) => {
      if (!isEmail(v)) throw new Error('Invalid email')
    }
  })
  email: string

  @Prop({ required: true, minlength: 6 })
  password: string

  @Prop({ default: 'light', enum: ['light', 'dark'] })
  theme: string

  @Prop({ required: true })
  dateOfBirth: Date

  @Prop({
    default:
      'https://res.cloudinary.com/dtidyjjal/image/upload/v1711641847/user_j7h0g8.png'
  })
  avatarURL: string
}

export const UserSchema = SchemaFactory.createForClass(User)
