import { Product } from './Product';

export interface ProductRepository {
  create(product: Product): Promise<void>;

  findOne(id: string): Promise<Product>;

  update(product: Product): Promise<void>;
}
