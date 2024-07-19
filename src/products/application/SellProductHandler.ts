import { EventHandler } from 'shared/events/EventHandler.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductRepository } from 'products/domain/ProductRepository.ts';
import { SellProductCommand } from 'products/domain/events/SellProductCommand.ts';

export class SellProductHandler extends EventHandler {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on<SellProductCommand>(
      SellProductCommand.name,
      (command) => this.handle(command),
      { promisify: true, async: true }
    );

    super(eventEmitter);
  }

  async handle(command: SellProductCommand) {
    const product = await this.repository.findOne(command.productId);

    product.sell(command.amountOfSoldItems);

    await this.repository.update(product);
  }
}
