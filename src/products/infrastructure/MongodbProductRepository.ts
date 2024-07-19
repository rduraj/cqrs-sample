import { ProductRepository } from '../domain/ProductRepository.ts';
import { Product } from '../domain/Product.ts';
import { Db } from 'mongodb';
import { ProductNotFoundError } from 'products/domain/errors/ProductNotFoundError.ts';

export class MongodbProductRepository implements ProductRepository {
  private collection;
  constructor(private readonly mongoClient: Db) {
    this.collection = mongoClient.collection('products');
  }

  create(product: Product): Promise<Product> {
    return this.collection.insertOne({
      ...product,
      stock: product.howManyLeft()
    });
  }

  findAll(): Promise<Array<Product>> {
    return this.collection.findAll().asArray();
  }

  update(product: Product): Promise<Product> {
    return this.collection.updateOne(
      { _id: product.id() },
      {
        $set: {
          ...product,
          stock: product.howManyLeft()
        }
      }
    );
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.collection.findOne({ _id: id });
    if (!product) {
      throw new ProductNotFoundError();
    }

    return new Product(
      product._id,
      product.name,
      product.description,
      product.price,
      product.stock
    );
  }
}
