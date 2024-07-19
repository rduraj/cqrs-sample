import { productsModuleConfig } from 'products/ProductsModuleConfig.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { MONGODB_URI } from 'shared/config/envs.ts';
import { MongoClient } from 'mongodb';

export const bootstrap = async () => {
  const eventEmmiter = new EventEmitter();
  const mongoClient = await new MongoClient(MONGODB_URI).connect();

  return {
    products: productsModuleConfig(eventEmmiter, mongoClient.db('cqrs'))
  };
};
