import { Product } from './Product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;

  findOne(id: string): Promise<Product>;

  update(product: Product): Promise<Product>;
}
