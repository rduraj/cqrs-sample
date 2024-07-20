import { MongodbOrderRepository } from '@/orders/infrastructure/MongodbOrderRepository';
import { EventEmitter } from '@/shared/events/EventEmitter';
import { MongoDbOperator } from '@/shared/database/MongoDbOperator';
import { OrderFacade } from '@/orders/application/OrderFacade';
import { OrderPlacingService } from '@/orders/application/OrderPlacingService';
import { PlaceOrderHandler } from '@/orders/application/PlaceOrderHandler';

export const ordersModuleConfig = (eventEmitter: EventEmitter, mongoClient: MongoDbOperator) => {
  const repository = new MongodbOrderRepository(mongoClient);

  const handlers = [new PlaceOrderHandler(eventEmitter, repository)];

  return new OrderFacade(new OrderPlacingService(repository, eventEmitter));
};
