import { EventHandler } from '@/shared/events/EventHandler';
import { EventEmitter } from '@/shared/events/EventEmitter';
import { ProductRepository } from '@/products/domain/ProductRepository';
import { RestockProductCommand } from '@/products/domain/events/RestockProductCommand';

export class RestockProductHandler extends EventHandler {
  constructor(
    eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on(RestockProductCommand.name, (command) => this.handle(command));

    super(eventEmitter);
  }

  async handle(command: RestockProductCommand) {
    const product = await this.repository.findOne(command.productId);

    product.restock(command.itemsToAdd);

    await this.repository.update(product);
  }
}
