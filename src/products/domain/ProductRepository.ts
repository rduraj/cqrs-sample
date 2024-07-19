import { Product } from './Product.ts';

export interface ProductRepository {
  create(product: Product): Promise<Product>;

  findAll(): Promise<Array<Product>>;

  findOne(id: string): Promise<Product>;

  update(product: Product): Promise<Product>;
}
