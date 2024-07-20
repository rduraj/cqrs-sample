import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';
import { ProductNotFoundError } from '@/products/domain/errors/ProductNotFoundError';
import { MongoDbOperator } from '@/shared/database/MongoDbOperator';

export class MongodbProductRepository implements ProductRepository {
  private collection;
  constructor(private readonly mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('products');
  }

  async create(product: Product): Promise<void> {
    await this.collection.insertOne({
      ...product,
      stock: product.howManyLeft()
    });
  }

  async update(product: Product): Promise<void> {
    await this.collection.updateOne(
      { id: product.id() },
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
    const product = await this.collection.findOne({ id: id });
    if (!product) {
      throw new ProductNotFoundError();
    }

    return new Product(
      product.id.toString(),
      product.name,
      product.description,
      product.price,
      product.stock
    );
  }
}
