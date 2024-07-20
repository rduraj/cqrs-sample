import { ProductModel } from '@/products/domain/ProductModel';

export class MongoDbProductModel implements ProductModel {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public stock: number
  ) {}
}
