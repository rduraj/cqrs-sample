import { Product } from './Product.ts';

export interface ProductRepository {
  create(product: Product): Promise<Product>;

  findAll(): Promise<Array<Product>>;

  update(product: Product): Promise<Product>;
}
