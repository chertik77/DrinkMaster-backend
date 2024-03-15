import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument } from 'mongoose'
import isEmail from 'validator/lib/isEmail'

export type UserDocument = HydratedDocument<User>

@Schema({ versionKey: false })
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

UserSchema.methods.toJSON = function () {
  const user = this.toObject()

  delete user.password

  return user
}
