import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

@Controller()
export class ProductController {

  constructor(private productService: ProductService) {}

  @Post('products')
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post('filter_products')
  async findByProductTitle(@Body() body): Promise<Product[]> {
    return this.productService.findByProductTitle(body.filter);
  }


}
