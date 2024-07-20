import { Event } from 'shared/events/Event';
import { Order } from 'orders/domain/Order';

export class PlaceOrderCommand extends Event {
  constructor(readonly order: Order) {
    super();
  }
}
