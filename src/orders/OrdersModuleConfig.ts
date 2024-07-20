import { MongodbOrderRepository } from 'orders/infrastructure/MongodbOrderRepository.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';
import { OrderFacade } from 'orders/application/OrderFacade.ts';
import { OrderPlacingService } from 'orders/application/OrderPlacingService.ts';
import { PlaceOrderHandler } from 'orders/application/PlaceOrderHandler.ts';

export const ordersModuleConfig = (eventEmitter: EventEmitter, mongoClient: MongoDbOperator) => {
  const repository = new MongodbOrderRepository(mongoClient);

  const handlers = [new PlaceOrderHandler(eventEmitter, repository)];

  return new OrderFacade(new OrderPlacingService(repository, eventEmitter));
};
