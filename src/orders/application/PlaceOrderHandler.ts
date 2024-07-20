import { EventHandler } from '@/shared/events/EventHandler';
import { EventEmitter } from '@/shared/events/EventEmitter';
import { OrderRepository } from '@/orders/domain/OrderRepository';
import { PlaceOrderCommand } from '@/orders/domain/events/PlaceOrderCommand';

export class PlaceOrderHandler extends EventHandler {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly repository: OrderRepository
  ) {
    eventEmitter.on(PlaceOrderCommand.name, (command) => this.handle(command));

    super(eventEmitter);
  }

  handle(command: PlaceOrderCommand) {
    return this.repository.create(command.order);
  }
}
