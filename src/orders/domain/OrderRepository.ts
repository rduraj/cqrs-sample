import { Order } from './Order';

export interface OrderRepository {
  startPlacingOrder(): void;

  create(order: Order): Promise<void>;

  withdrawPlacingOrder(): void;
}
