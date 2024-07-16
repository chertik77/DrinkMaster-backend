import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export const categoryEnum = [
  'Ordinary Drink',
  'Cocktail, Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink'
]

@Schema({ versionKey: false })
export class Category {
  @Prop({ enum: categoryEnum })
  name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
