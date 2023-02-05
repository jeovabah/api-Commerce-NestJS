import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  create(createProductDto: CreateProductDto) {
    try {
      const products = new this.productModel(createProductDto);
      return products.save();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  findAll() {
    try {
      return this.productModel.find();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  findOne(id: string) {
    try {
      return this.productModel.findById(id);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  buy(id: string) {
    try {
      this.productModel.findByIdAndUpdate(
        {
          _id: id,
        },
        { $inc: { quantity: -1 } },
      );
      return this.createOrder(id);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async createOrder(id: string) {
    try {
      // create a new order with the product id
      const order = new this.productModel({
        product_id: id,
        product_name: (await this.findOne(id)).name,
      });
      return order.save();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(
      {
        _id: id,
      },
      { updateProductDto },
    );
  }

  remove(id: string) {
    try {
      return this.productModel.findByIdAndDelete({
        _id: id,
      });
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
