import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';
import { MongodbProductRepository } from 'products/infrastructure/MongodbProductRepository.ts';
import { MongoClient } from 'mongodb';

export const productsModuleConfig = (eventEmitter: EventEmitter, mongoClient: MongoClient) => {
  return new ProductsFacade(new MongodbProductRepository(mongoClient));
};
