import { EventHandler } from '@/shared/events/EventHandler';
import { EventEmitter } from '@/shared/events/EventEmitter';
import { ProductRepository } from '@/products/domain/ProductRepository';
import { SellProductCommand } from '@/products/domain/events/SellProductCommand';

export class SellProductHandler extends EventHandler {
  constructor(
    eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on(SellProductCommand.name, (command) => this.handle(command), {
      promisify: true,
      async: true
    });

    super(eventEmitter);
  }

  async handle(command: SellProductCommand) {
    const product = await this.repository.findOne(command.productId);

    product.sell(command.amountOfSoldItems);

    await this.repository.update(product);
  }
}
