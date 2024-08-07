import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export const glassEnum = [
  'Highball Glass',
  'Cocktail glass',
  'Old-fashioned glass',
  'Whiskey Glass',
  'Collins glass',
  'Pousse cafe glass',
  'Champagne flute',
  'Whiskey sour glass',
  'Cordial glass',
  'Brandy snifter',
  'White wine glass',
  'Nick and Nora Glass',
  'Hurricane glass',
  'Coffee mug',
  'Shot glass',
  'Jar',
  'Irish coffee cup',
  'Punch bowl',
  'Pitcher',
  'Pint glass',
  'Copper Mug',
  'Wine Glass',
  'Beer mug',
  'Margarita/Coupette glass',
  'Beer pilsner',
  'Beer Glass',
  'Parfait glass',
  'Mason jar',
  'Margarita glass',
  'Martini Glass',
  'Balloon Glass',
  'Coupe Glass'
]

@Schema({ versionKey: false })
export class Glass {
  @Prop()
  name: string
}

export const GlassSchema = SchemaFactory.createForClass(Glass)
