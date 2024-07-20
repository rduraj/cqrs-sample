import { FindProductsRepository } from 'products/domain/FindProductsRepository';
import { FindProductsReadModel } from 'products/domain/FindProductsReadModel';
import { MongoDbOperator } from 'shared/database/MongoDbOperator';
import { MongodbFindProductsReadModel } from 'products/infrastructure/MongodbFindProductsReadModel';
import { Collection } from 'mongodb';

export class MongodbFindProductsRepository implements FindProductsRepository {
  private collection: Collection<MongodbFindProductsReadModel>;

  constructor(mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('products');
  }
  findAll(): Promise<Array<FindProductsReadModel>> {
    return this.collection.find().toArray();
  }
}
