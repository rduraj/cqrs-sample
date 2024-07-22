import { Collection } from 'mongodb';
import { FindProductsRepository } from '../domain/FindProductsRepository';
import { MongoDbProductModel } from './MongodbProductModel';
import { MongoDbOperator } from '@/shared/database/MongoDbOperator';
import { ProductModel } from '../domain/ProductModel';
export class MongodbFindProductsRepository implements FindProductsRepository {
  private collection: Collection<MongoDbProductModel>;

  constructor(mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('products');
  }
  findAll(): Promise<Array<ProductModel>> {
    return this.collection.find().toArray();
  }
}
