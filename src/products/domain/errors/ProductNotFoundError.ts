import { DomainError } from '@/shared/errors/DomainError';

export class ProductNotFoundError extends DomainError {
  constructor() {
    super('Product with given id cannot be found.');
  }
}
