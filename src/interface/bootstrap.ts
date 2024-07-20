import { productsModuleConfig } from 'products/ProductsModuleConfig';
import { EventEmitter } from 'shared/events/EventEmitter';
import { MONGODB_DATABASE, MONGODB_URI } from 'shared/config/envs';
import { MongoDbOperator } from 'shared/database/MongoDbOperator';
import { ordersModuleConfig } from 'orders/OrdersModuleConfig';

export const bootstrap = async () => {
  const eventEmitter = new EventEmitter();
  const mongoOperator = await new MongoDbOperator(MONGODB_URI, MONGODB_DATABASE);
  await mongoOperator.connect();

  return {
    products: productsModuleConfig(eventEmitter, mongoOperator),
    orders: ordersModuleConfig(eventEmitter, mongoOperator)
  };
};
