import { uuid } from 'shared/uuid.ts';

class OrderProduct {
  constructor(
    private readonly id: string,
    private readonly amount: number
  ) {}
}

export class Order {
  private orderProducts: Array<OrderProduct> = [];

  constructor(private readonly customerId: number) {}

  addProduct(productId: string, amount: number) {
    this.orderProducts = [...this.orderProducts, new OrderProduct(productId, amount)];
  }
}
