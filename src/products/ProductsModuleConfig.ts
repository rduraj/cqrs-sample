import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductFacade } from 'products/application/ProductFacade.ts';
import { MongodbProductRepository } from 'products/infrastructure/MongodbProductRepository.ts';
import { CreateProductHandler } from 'products/application/CreateProductHandler.ts';
import { RestockProductHandler } from 'products/application/RestockProductHandler.ts';
import { SellProductHandler } from 'products/application/SellProductHandler.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';

export const productsModuleConfig = (eventEmitter: EventEmitter, mongoClient: MongoDbOperator) => {
  const repository = new MongodbProductRepository(mongoClient);

  return new ProductFacade(
    eventEmitter,
    new CreateProductHandler(eventEmitter, repository),
    new RestockProductHandler(eventEmitter, repository),
    new SellProductHandler(eventEmitter, repository)
  );
};
