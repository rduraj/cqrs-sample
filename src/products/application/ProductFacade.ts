import { CreateProductCommand } from 'products/domain/events/CreateProductCommand';
import { EventEmitter } from 'shared/events/EventEmitter';
import { RestockProductCommand } from 'products/domain/events/RestockProductCommand';
import { SellProductCommand } from 'products/domain/events/SellProductCommand';
import { FindProductsQueryService } from 'products/application/FindProductsQueryService';

export class ProductFacade {
  constructor(
    private readonly eventEmitter: EventEmitter,
    private readonly findProductsQueryService: FindProductsQueryService
  ) {}

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

  getListOfProducts() {
    return this.findProductsQueryService.getListOfProducts();
  }
}
