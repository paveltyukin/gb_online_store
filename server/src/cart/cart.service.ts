import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schema/cart.schema';
import { Product, ProductDocument } from '../product/schema/product.schema';
import { IProduct } from '../../../client/src/types';

export interface CartItem {
  title: string;
  price: number;
  product_id: number;
  quantity: number;
}

@Injectable()
export class CartService {

  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async save(product_id: number): Promise<CartItem[]> {
    let quantity = 1;

    const cart: Cart = await this.cartModel.findOne({ product_id }).exec();

    if (cart) {
      quantity += cart.quantity;
    }
    console.log(quantity)

    await this.cartModel.findOneAndUpdate(
      { product_id },
      { quantity },
      { upsert: true }
    ).exec();

    const productsInCart: Cart[] = await this.cartModel.find().exec();
    const products: Product[] = await this.productModel.find().exec();
    const updatedProducts = products.map((product: IProduct) => {
      let localQuantity = 0;
      for (let x = 0; x < productsInCart.length; x++) {
        if (productsInCart[x].product_id === product.id) {
          localQuantity = productsInCart[x].product_id;
          break;
        }
      }

      if (localQuantity > 0) {
        return {
          title: product.title,
          price: product.price,
          product_id: product.id,
          quantity: localQuantity,
        }
      }
    });
    console.log(updatedProducts)
    return updatedProducts;
  }
}
