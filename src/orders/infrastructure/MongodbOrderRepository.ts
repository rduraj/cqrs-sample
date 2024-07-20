import { OrderRepository } from 'orders/domain/OrderRepository.ts';
import { Order } from 'orders/domain/Order.ts';
import { ClientSession, Collection, Db, MongoClient } from 'mongodb';
import { MongoDbOperator } from 'shared/database/MongoDbOperator.ts';

export class MongodbOrderRepository implements OrderRepository {
  private session: ClientSession;
  private readonly collection: Collection;

  constructor(private readonly mongoClient: MongoDbOperator) {
    this.collection = mongoClient.db.collection('products');
  }

  async create(order: Order): Promise<Order> {
    await this.collection.insertOne(order, { session: this.mongoClient.session });

    await this.session.commitTransaction();
    this.mongoClient.endSession();

    return Order;
  }

  async withdrawPlacingOrder() {
    await this.session.abortTransaction();

    this.mongoClient.endSession();
  }

  startPlacingOrder() {
    this.session = this.mongoClient.startSession();
    this.session.startTransaction();
  }
}
