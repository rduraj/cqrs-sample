import { ProductModel } from './ProductModel';

export interface FindProductsRepository {
  findAll(): Promise<Array<ProductModel>>;
}
