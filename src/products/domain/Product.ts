import { NegativePriceNumberError } from './errors/NegativePriceNumberError';
import { ProductStock } from './ProductStock';
import { uuid } from 'shared/uuid';

export class Product {
  #productStock: ProductStock = new ProductStock();

  constructor(
    private readonly _id: string = uuid(),
    private readonly name: string,
    private readonly description: string,
    private readonly price: number,
    stock: number
  ) {
    if (price < 0) {
      throw new NegativePriceNumberError();
    }

    this.#productStock = new ProductStock(stock);
  }

  id() {
    return this._id;
  }

  howManyLeft() {
    return this.#productStock.stock;
  }

  restock(amount: number) {
    this.#productStock = this.#productStock.increase(amount);
  }

  sell(amount: number) {
    this.#productStock = this.#productStock.decrease(amount);
  }
}
