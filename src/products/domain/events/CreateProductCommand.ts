import { Event } from 'shared/events/Event';

export class CreateProductCommand extends Event {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly stock: number
  ) {
    super();
  }
}
