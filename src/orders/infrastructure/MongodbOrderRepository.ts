import { OrderRepository } from '@/orders/domain/OrderRepository';
import { Order } from '@/orders/domain/Order';
import { ClientSession, Collection } from 'mongodb';
import { MongoDbOperator } from '@/shared/database/MongoDbOperator';

export class MongodbOrderRepository implements OrderRepository {
  private session?: ClientSession;
  private readonly collection: Collection;

  constructor(private readonly mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('orders');
  }

  async create(order: Order): Promise<void> {
    await this.collection.insertOne(order, { session: this.mongoClient.session });

    await this.session?.commitTransaction();
    this.mongoClient.endSession();
  }

  async withdrawPlacingOrder() {
    await this.session?.abortTransaction();

    this.mongoClient.endSession();
  }

  startPlacingOrder() {
    this.session = this.mongoClient.startSession();
    this.session.startTransaction();
  }
}
