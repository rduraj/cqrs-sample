import { productsModuleConfig } from 'products/ProductsModuleConfig.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { MONGODB_DATABASE, MONGODB_URI } from 'shared/config/envs.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';
import { ordersModuleConfig } from 'orders/OrdersModuleConfig.ts';

export const bootstrap = async () => {
  const eventEmitter = new EventEmitter();
  const mongoOperator = await new MongoDbOperator(MONGODB_URI, MONGODB_DATABASE);
  await mongoOperator.connect();

  return {
    products: productsModuleConfig(eventEmitter, mongoOperator),
    orders: ordersModuleConfig(eventEmitter, mongoOperator)
  };
};
