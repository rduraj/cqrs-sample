import { EventHandler } from 'shared/events/EventHandler.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductRepository } from 'products/domain/ProductRepository.ts';
import { RestockProductCommand } from 'products/domain/events/RestockProductCommand.ts';

export class RestockProductHandler extends EventHandler {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on<RestockProductCommand>(RestockProductCommand.name, (command) =>
      this.handle(command)
    );

    super(eventEmitter);
  }

  async handle(command: RestockProductCommand) {
    const product = await this.repository.findOne(command.productId);

    product.restock(command.itemsToAdd);

    await this.repository.update(product);
  }
}
