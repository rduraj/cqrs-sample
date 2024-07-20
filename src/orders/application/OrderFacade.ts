import { OrderPlacingService } from 'orders/application/OrderPlacingService.ts';

export class OrderFacade {
  constructor(private orderPlacingService: OrderPlacingService) {}

  placeOrder(customerId: number, products: { id: string; amount: number }[]) {
    return this.orderPlacingService.placeOrder(customerId, products);
  }
}
