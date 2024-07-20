import { EventEmitter } from '@/shared/events/EventEmitter';
import { Order } from '@/orders/domain/Order';
import { SellProductCommand } from '@/products/domain/events/SellProductCommand';
import { PlaceOrderCommand } from '@/orders/domain/events/PlaceOrderCommand';
import { OrderRepository } from '@/orders/domain/OrderRepository';
import logger from '@/shared/logger';

export class OrderPlacingService {
  constructor(
    private readonly repository: OrderRepository,
    private readonly eventEmitter: EventEmitter
  ) {}

  async placeOrder(customerId: number, products: Array<{ id: string; amount: number }>) {
    const order = new Order(customerId);
    await this.repository.startPlacingOrder();

    try {
      const productAdding = products.map((product) => {
        order.addProduct(product.id, product.amount);

        return this.eventEmitter.emitAsync(
          SellProductCommand.name,
          new SellProductCommand(product.id, product.amount)
        );
      });

      await Promise.all(productAdding);
      await this.eventEmitter.emitAsync(PlaceOrderCommand.name, new PlaceOrderCommand(order));
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`Order transaction failed: ${error.message}`);
      }
      this.repository.withdrawPlacingOrder();

      throw error;
    }
  }
}
