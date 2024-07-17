import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ versionKey: false })
export class Ingredient {
  @Prop()
  title: string

  @Prop()
  ingredientThumb: string

  @Prop()
  'thumb-medium': string

  @Prop()
  'thumb-small': string
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient)
