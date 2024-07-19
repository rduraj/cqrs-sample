import { ProductRepository } from '../domain/ProductRepository.ts';
import { Product } from '../domain/Product.ts';
import { MongoClient } from 'mongodb';

export class MongodbProductRepository implements ProductRepository {
  constructor(private readonly mongoClient: MongoClient) {}

  create(product: Product): Promise<Product> {
    return Promise.resolve(new Product());
  }

  findAll(): Promise<Array<Product>> {
    return Promise.resolve([new Product()]);
  }

  update(product: Product): Promise<Product> {
    return Promise.resolve(new Product());
  }
}
