import { EventHandler } from 'shared/events/EventHandler.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { OrderRepository } from 'orders/domain/OrderRepository.ts';
import { PlaceOrderCommand } from 'orders/domain/events/PlaceOrderCommand.ts';

export class PlaceOrderHandler extends EventHandler {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly repository: OrderRepository
  ) {
    eventEmitter.on<PlaceOrderCommand>(PlaceOrderCommand.name, (command) => this.handle(command));

    super(eventEmitter);
  }

  handle(command: PlaceOrderCommand) {
    return this.repository.create(command.order);
  }
}
