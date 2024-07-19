import { Event } from 'shared/events/Event.ts';

export class SellProductCommand extends Event {
  constructor(
    public productId: string,
    public amountToSell: number
  ) {
    super();
  }
}
