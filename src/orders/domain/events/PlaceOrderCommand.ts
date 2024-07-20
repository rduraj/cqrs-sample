import { Event } from 'shared/events/Event.ts';
import { Order } from 'orders/domain/Order.ts';

export class PlaceOrderCommand extends Event {
  constructor(readonly order: Order) {
    super();
  }
}
