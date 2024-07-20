import { Order } from './Order';

export interface OrderRepository {
  startPlacingOrder();

  create(order: Order): Promise<Order>;

  withdrawPlacingOrder();
}
