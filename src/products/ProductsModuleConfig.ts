import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductFacade } from 'products/application/ProductFacade.ts';
import { MongodbProductRepository } from 'products/infrastructure/MongodbProductRepository.ts';
import { CreateProductHandler } from 'products/application/CreateProductHandler.ts';
import { RestockProductHandler } from 'products/application/RestockProductHandler.ts';
import { SellProductHandler } from 'products/application/SellProductHandler.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';
import { MongodbFindProductsRepository } from 'products/infrastructure/MongodbFindProductsRepository.ts';
import { FindProductsQueryService } from 'products/application/FindProductsQueryService.ts';

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
