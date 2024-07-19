import { EventHandler } from 'shared/events/EventHandler.ts';
import { CreateProductCommand } from 'products/domain/events/CreateProductCommand.ts';
import { Product } from 'products/domain/Product.ts';
import { uuid } from 'shared/uuid.ts';

export class CreateProductHandler extends EventHandler {
  handle(command: CreateProductCommand) {
    const product = new Product();

    product.from(uuid(), command.name, command.description, command.price, command.stock);

    console.log('handled!');
  }
}
