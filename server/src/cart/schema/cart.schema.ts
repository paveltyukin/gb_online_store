import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  product_id: number;

  @Prop()
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
