import { Event } from 'shared/events/Event';

export class SellProductCommand extends Event {
  constructor(
    public productId: string,
    public amountOfSoldItems: number
  ) {
    super();
  }
}
