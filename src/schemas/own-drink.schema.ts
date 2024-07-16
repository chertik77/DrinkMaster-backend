import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { categoryEnum } from './category.schema'
import { glassEnum } from './glass.schema'
import { User } from './user.schema'

export const alcoholicEnum = ['Alcoholic', 'Non alcoholic']

@Schema({ collection: 'own_drinks' })
export class OwnDrink {
  @Prop({ required: true, minlength: 2 })
  title: string

  @Prop({ required: true, minlength: 5 })
  description: string

  @Prop()
  drinkThumb: string

  @Prop({ required: true, enum: categoryEnum })
  category: string

  @Prop({ enum: glassEnum, required: true })
  glass: string

  @Prop({ enum: alcoholicEnum, required: true })
  alcoholic: string

  @Prop({ default: 1 })
  portionCount: number

  @Prop([{ title: { type: String, ref: 'Ingredient' }, measure: String }])
  ingredients: { title: string; measure: string }[]

  @Prop({ required: true, minlength: 5 })
  instructions: string

  @Prop({ type: Types.ObjectId, ref: 'User' })
  owner: User
}

export const OwnDrinkSchema = SchemaFactory.createForClass(OwnDrink)
