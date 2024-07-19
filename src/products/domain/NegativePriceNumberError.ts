export class NegativePriceNumberError extends Error {
  constructor() {
    super("Price cannot be negative number.")
  }
}
