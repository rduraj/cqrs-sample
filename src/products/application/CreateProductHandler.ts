import { EventHandler } from '@/shared/events/EventHandler';
import { CreateProductCommand } from '@/products/domain/events/CreateProductCommand';
import { Product } from '@/products/domain/Product';
import { uuid } from '@/shared/uuid';
import { EventEmitter } from '@/shared/events/EventEmitter';
import { ProductRepository } from '@/products/domain/ProductRepository';

export class CreateProductHandler extends EventHandler {
  constructor(
    eventEmitter: EventEmitter,
    private readonly repository: ProductRepository
  ) {
    eventEmitter.on(CreateProductCommand.name, (command) => this.handle(command));

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
