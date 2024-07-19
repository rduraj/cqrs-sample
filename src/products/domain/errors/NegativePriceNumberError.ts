import { DomainError } from 'shared/errors/DomainError.ts';

export class NegativePriceNumberError extends DomainError {
  constructor() {
    super('Price cannot be negative number.');
  }
}
