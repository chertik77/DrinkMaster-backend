import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Ingredient {
  @Prop()
  title: string

  @Prop()
  ingredientThumb: string

  @Prop()
  'thumb-medium': string

  @Prop()
  'thumb-small': string

  @Prop()
  abv: string

  @Prop({ enum: ['Yes', 'No'] })
  alcohol: string

  @Prop()
  description: string

  @Prop()
  type: string

  @Prop()
  flavour: string

  @Prop()
  country: string
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient)
