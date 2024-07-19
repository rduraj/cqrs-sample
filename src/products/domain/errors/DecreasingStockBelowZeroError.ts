export class DecreasingStockBelowZeroError extends Error {
  constructor() {
    super("Stock amount cannot be less than zero.")
  }
}
