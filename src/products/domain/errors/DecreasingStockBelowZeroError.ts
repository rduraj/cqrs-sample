import { DomainError } from 'shared/errors/DomainError.ts';

export class DecreasingStockBelowZeroError extends DomainError {
  constructor() {
    super('Stock amount cannot be less than zero.');
  }
}
