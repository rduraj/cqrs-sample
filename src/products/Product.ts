import { NegativePriceNumberError } from "./NegativePriceNumberError";
import { ProductStock } from "./ProductStock";

export class Product {
  private stock: ProductStock;

  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly price: number,
    stock: number
  ) {
    if (this.price < 0) {
      throw new NegativePriceNumberError()
    }

    this.stock = new ProductStock(stock)
  }

  restock(amount: number) {
    this.stock = this.stock.increase(amount)
  }

  sell(amount: number) {
    this.stock = this.stock.decrease(amount)
  }
}
