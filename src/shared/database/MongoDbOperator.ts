import { ClientSession, Db, MongoClient } from 'mongodb';

export class MongoDbOperator {
  private readonly mongoClient: MongoClient;
  private readonly mongoDb: Db;
  public clientSession?: ClientSession;

  constructor(connectionUri: string, database: string) {
    this.mongoClient = new MongoClient(connectionUri);

    this.mongoDb = this.mongoClient.db(database);
  }

  async connect() {
    await this.mongoClient.connect();
  }

  get db() {
    return this.mongoDb;
  }

  get session() {
    return this.clientSession;
  }

  startSession() {
    this.clientSession = this.mongoClient.startSession();

    return this.clientSession;
  }

  endSession() {
    this.clientSession = undefined;
  }
}
