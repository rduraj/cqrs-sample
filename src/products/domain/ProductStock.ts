import { DecreasingStockBelowZeroError } from "./DecreasingStockBelowZeroError"

export class ProductStock {

  constructor(
    private amount = 0
  ) {}

  public get stock(): number{
    return this.amount
  }

  increase(amountToIncrease: number) {
    const amount = this.amount + amountToIncrease

    return new ProductStock(amount)
  }

  decrease(amountToDecrease: number) {
    const amount = this.amount - amountToDecrease

    if (amount < 0) {
      throw new DecreasingStockBelowZeroError()
    }

    return new ProductStock(amount)
  }

}
