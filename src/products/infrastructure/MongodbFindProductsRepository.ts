import { FindProductsRepository } from 'products/domain/FindProductsRepository.ts';
import { FindProductsReadModel } from 'products/domain/FindProductsReadModel.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';
import { MongodbFindProductsReadModel } from 'products/infrastructure/MongodbFindProductsReadModel.ts';
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
