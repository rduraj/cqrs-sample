import { EventHandler } from 'shared/events/EventHandler.ts';
import { CreateProductCommand } from 'products/domain/events/CreateProductCommand.ts';
import { Product } from 'products/domain/Product.ts';
import { uuid } from 'shared/uuid.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { ProductRepository } from 'products/domain/ProductRepository.ts';

export class CreateProductHandler extends EventHandler {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on<CreateProductCommand>(CreateProductCommand.name, (command) =>
      this.handle(command)
    );

    super(eventEmitter);
  }

  handle(command: CreateProductCommand) {
    const product = new Product(
      uuid(),
      command.name,
      command.description,
      command.price,
      command.stock
    );

    return this.repository.create(product);
  }
}
