import { CreateProductCommand } from 'products/domain/events/CreateProductCommand.ts';
import { EventEmitter } from 'shared/events/EventEmitter.ts';
import { RestockProductCommand } from 'products/domain/events/RestockProductCommand.ts';
import { SellProductCommand } from 'products/domain/events/SellProductCommand.ts';

export class ProductFacade {
  constructor(private readonly eventEmitter: EventEmitter) {}

  create(name: string, description: string, price: number, stock: number) {
    return this.eventEmitter.emitAsync(
      CreateProductCommand.name,
      new CreateProductCommand(name, description, price, stock)
    );
  }

  restock(id: string, itemsToAdd: number) {
    return this.eventEmitter.emitAsync(
      RestockProductCommand.name,
      new RestockProductCommand(id, itemsToAdd)
    );
  }

  sell(id: string, amountOfSoldItems: number) {
    return this.eventEmitter.emitAsync(
      SellProductCommand.name,
      new SellProductCommand(id, amountOfSoldItems)
    );
  }
}
