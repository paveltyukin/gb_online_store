import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './schema/cart.schema';
import { Product, ProductDocument } from '../product/schema/product.schema';
import { CartItem, IProduct } from '../types';


@Injectable()
export class CartService {

  constructor(
    @InjectModel(Cart.name)
    private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>
  ) {}

  async save(product_id: number, quantity: number): Promise<CartItem[]> {

    const product: Product = await this.productModel.findOne({ id: product_id }).exec();

    if (!product) {
      throw new NotFoundException({
        message: 'Продукт не найден'
      })
    }

    const cart: Cart = await this.cartModel.findOne({ product_id }).exec();

    if (cart) {
      quantity += cart.quantity;
    }

    if (quantity <= 0) {
      await this.cartModel.findOneAndDelete(
        { product_id }
      ).exec();
    }
    else {
      await this.cartModel.findOneAndUpdate(
        { product_id },
        { quantity },
        { upsert: true }
      ).exec();
    }

    return this.getProductsInCart();
  }

  async getProductsInCart(): Promise<CartItem[]> {
    const productsInCart: Cart[] = await this.cartModel.find().exec();
    const products: Product[] = await this.productModel.find().exec();

    const productsOfItems: CartItem[] = products.map((product: IProduct) => {
      let localQuantity = 0;
      for (let x = 0; x < productsInCart.length; x++) {
        if (productsInCart[x].product_id === product.id) {
          localQuantity = productsInCart[x].quantity;
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

    return productsOfItems.filter((item:CartItem) => item?.product_id);
  }
}
