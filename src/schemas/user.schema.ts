import type { HydratedDocument } from 'mongoose'

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import isEmail from 'validator/lib/isEmail'

export type UserDocument = HydratedDocument<User>

@Schema({ timestamps: true })
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
  userTheme: string

  @Prop({ required: true })
  dateOfBirth: Date
}

export const UserSchema = SchemaFactory.createForClass(User)
