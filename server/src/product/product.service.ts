import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findByProductTitle(title: string): Promise<Product[]> {
    return this.productModel.find({ title: new RegExp(title, 'i') }).exec();
  }

  async findByProductId(id: number): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }
}
