import { EventEmitter } from 'shared/events/EventEmitter';
import { ProductFacade } from 'products/application/ProductFacade';
import { MongodbProductRepository } from 'products/infrastructure/MongodbProductRepository';
import { CreateProductHandler } from 'products/application/CreateProductHandler';
import { RestockProductHandler } from 'products/application/RestockProductHandler';
import { SellProductHandler } from 'products/application/SellProductHandler';
import { MongoDbOperator } from 'shared/database/MongoDbOperator';
import { MongodbFindProductsRepository } from 'products/infrastructure/MongodbFindProductsRepository';
import { FindProductsQueryService } from 'products/application/FindProductsQueryService';

export const productsModuleConfig = (eventEmitter: EventEmitter, mongoClient: MongoDbOperator) => {
  const repository = new MongodbProductRepository(mongoClient);
  const findProductsRepository = new MongodbFindProductsRepository(mongoClient);

  const handlers = [
    new CreateProductHandler(eventEmitter, repository),
    new RestockProductHandler(eventEmitter, repository),
    new SellProductHandler(eventEmitter, repository)
  ];

  return new ProductFacade(eventEmitter, new FindProductsQueryService(findProductsRepository));
};
