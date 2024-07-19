import { NegativePriceNumberError } from "./NegativePriceNumberError";
import { ProductStock } from "./ProductStock";

export class Product {
  private stock: ProductStock = new ProductStock();

  create(
    name: string,
    description: string,
    price: number,
    stock: number
  ) {
    if (price < 0) {
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
