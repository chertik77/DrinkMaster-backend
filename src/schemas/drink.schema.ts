import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Types } from 'mongoose'

import { categoryEnum } from './category.schema'
import { glassEnum } from './glass.schema'

@Schema({ versionKey: false })
export class Drink {
  @Prop()
  drink: string

  @Prop({ default: 'Sorry, not specified' })
  drinkAlternate: string

  @Prop()
  tags: string

  @Prop()
  video: string

  @Prop({ enum: categoryEnum })
  category: string

  @Prop()
  IBA: string

  @Prop({ enum: ['Alcoholic', 'Non alcoholic'] })
  alcoholic: string

  @Prop({ enum: glassEnum })
  glass: string

  @Prop()
  description: string

  @Prop()
  instructions: string

  @Prop()
  instructionsES: string

  @Prop()
  instructionsDE: string

  @Prop()
  instructionsFR: string

  @Prop()
  instructionsIT: string

  @Prop()
  instructionsRU: string

  @Prop()
  instructionsPL: string

  @Prop()
  instructionsUK: string

  @Prop()
  drinkThumb: string

  @Prop([{ type: Types.ObjectId, ref: 'Ingredient' }])
  ingredients: { title: string; measure: string }[]

  @Prop()
  shortDescription: string
}

export const DrinkSchema = SchemaFactory.createForClass(Drink)
