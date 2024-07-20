import { ProductRepository } from '../domain/ProductRepository.ts';
import { Product } from '../domain/Product.ts';
import { ProductNotFoundError } from 'products/domain/errors/ProductNotFoundError.ts';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';

export class MongodbProductRepository implements ProductRepository {
  private collection;
  constructor(private readonly mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('products');
  }

  create(product: Product): Promise<Product> {
    return this.collection.insertOne({
      ...product,
      stock: product.howManyLeft()
    });
  }

  update(product: Product): Promise<Product> {
    return this.collection.updateOne(
      { _id: product.id() },
      {
        $set: {
          ...product,
          stock: product.howManyLeft()
        }
      },
      { session: this.mongoClient.session }
    );
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.collection.findOne({ _id: id });
    if (!product) {
      throw new ProductNotFoundError();
    }

    return new Product(
      product._id,
      product.name,
      product.description,
      product.price,
      product.stock
    );
  }
}
