import { FindProductsReadModel } from 'products/domain/FindProductsReadModel';

export interface FindProductsRepository {
  findAll(): Promise<Array<FindProductsReadModel>>;
}
