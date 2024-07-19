import { NegativePriceNumberError } from './errors/NegativePriceNumberError';
import { ProductStock } from './ProductStock';
import { uuid } from 'shared/uuid.ts';
import { RestockProductCommand } from './events/RestockProductCommand.ts';

export class Product {
  private stock: ProductStock = new ProductStock();

  from(id: string = uuid(), name: string, description: string, price: number, stock: number) {
    if (price < 0) {
      throw new NegativePriceNumberError();
    }

    this.stock = new ProductStock(stock);
  }

  restock(amount: number) {
    this.stock = this.stock.increase(amount);
  }

  productRestockedCommand(event: RestockProductCommand) {
    this.restock(event.amountToRestock);
  }

  sell(amount: number) {
    this.stock = this.stock.decrease(amount);
  }
}
