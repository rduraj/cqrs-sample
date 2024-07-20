import { FindProductsRepository } from 'products/domain/FindProductsRepository.ts';

export class FindProductsQueryService {
  constructor(private readonly repository: FindProductsRepository) {}

  getListOfProducts() {
    return this.repository.findAll();
  }
}
