import { DomainError } from '@/shared/errors/DomainError';

export class NegativePriceNumberError extends DomainError {
  constructor() {
    super('Price cannot be negative number.');
  }
}
