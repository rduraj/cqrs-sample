import { FindProductsReadModel } from 'products/domain/FindProductsReadModel.ts';

export interface FindProductsRepository {
  findAll(): Promise<Array<FindProductsReadModel>>;
}
