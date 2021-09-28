import { Body, Controller, Post } from '@nestjs/common';
import { CartItem, CartService } from './cart.service';

@Controller()
export class CartController {

  constructor(private cartService: CartService) {}

  @Post('cart')
  async save(@Body() body): Promise<CartItem[]> {
    return this.cartService.save(+body.id);
  }
}
