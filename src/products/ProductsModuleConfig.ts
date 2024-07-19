import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';
import { MongodbProductRepository } from 'products/infrastructure/MongodbProductRepository.ts';
import { Db } from 'mongodb';
import { CreateProductHandler } from 'products/application/CreateProductHandler.ts';
import { RestockProductHandler } from 'products/application/RestockProductHandler.ts';
import { SellProductHandler } from 'products/application/SellProductHandler.ts';

export const productsModuleConfig = (eventEmitter: EventEmitter, mongoClient: Db) => {
  const repository = new MongodbProductRepository(mongoClient);

  return new ProductsFacade(
    eventEmitter,
    new CreateProductHandler(eventEmitter, repository),
    new RestockProductHandler(eventEmitter, repository),
    new SellProductHandler(eventEmitter, repository)
  );
};
