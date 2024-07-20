import { Order } from './Order.ts';

export interface OrderRepository {
  startPlacingOrder();

  create(order: Order): Promise<Order>;

  withdrawPlacingOrder();
}
