import { productsModuleConfig } from 'products/ProductsModuleConfig.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { MongoClient } from 'mongodb';

export const bootstrap = () => {
  const eventEmmiter = new EventEmitter();
  const mongoClient = new MongoClient('');

  return {
    products: productsModuleConfig(eventEmmiter, mongoClient)
  };
};
