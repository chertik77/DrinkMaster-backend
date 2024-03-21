import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export const categoryEnum = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee / Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink'
]

@Schema({
  versionKey: false,
  toJSON: {
    virtuals: true,
    transform(_, ret) {
      ret.id = ret._id
      delete ret._id
    }
  }
})
export class Category {
  @Prop({ enum: categoryEnum })
  name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category)
