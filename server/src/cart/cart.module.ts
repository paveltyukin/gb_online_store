import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schema/cart.schema';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Product, ProductSchema } from '../product/schema/product.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: Product.name, schema: ProductSchema },
    ])
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
