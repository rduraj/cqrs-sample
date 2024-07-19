import { ProductRepository } from 'products/domain/ProductRepository.ts';
import { Product } from 'products/domain/Product.ts';

export class ProductsFacade {
  constructor(private readonly repository: ProductRepository) {}

  create(product: Product) {
    return this.repository.create(product);
  }
}
