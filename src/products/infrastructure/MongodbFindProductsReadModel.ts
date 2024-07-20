import { FindProductsReadModel } from 'products/domain/FindProductsReadModel';

export class MongodbFindProductsReadModel implements FindProductsReadModel {
  constructor(
    public _id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number
  ) {}
}
