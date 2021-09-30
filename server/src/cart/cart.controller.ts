import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem } from '../types';

@Controller()
export class CartController {

  constructor(private cartService: CartService) {}

  @Post('cart')
  async save(@Body() body): Promise<CartItem[]> {
    const product_id = +body.id,
      quantity = +body.quantity;

    return this.cartService.save(product_id, quantity);
  }

  @Post('get_cart')
  async getProductsInCart(): Promise<CartItem[]> {
    return this.cartService.getProductsInCart();
  }
}
