import { productsModuleConfig } from 'products/ProductsModuleConfig.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { MONGODB_URI } from 'shared/config/envs.ts';
import { MongoClient } from 'mongodb';

export const bootstrap = () => {
  const eventEmmiter = new EventEmitter();
  const mongoClient = new MongoClient(MONGODB_URI);

  return {
    products: productsModuleConfig(eventEmmiter, mongoClient)
  };
};
