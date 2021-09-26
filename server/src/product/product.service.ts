import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  private readonly products: Product[] = [];

  async findAll(): Promise<string[]> {
    return [];
  }
}
