import { DomainError } from 'shared/errors/DomainError';

export class DecreasingStockBelowZeroError extends DomainError {
  constructor() {
    super('Stock amount cannot be less than zero.');
  }
}
