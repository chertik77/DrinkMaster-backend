import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { Drink } from './drink.schema'
import { User } from './user.schema'

@Schema()
export class FavoriteDrink {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  owner: User

  @Prop({ type: Types.ObjectId, ref: 'Drink' })
  drink: Drink
}

export const FavoriteDrinkSchema = SchemaFactory.createForClass(FavoriteDrink)
