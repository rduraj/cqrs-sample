import { Event } from 'shared/events/Event.ts';

export class RestockProductCommand extends Event {
  constructor(
    public productId: string,
    public amountToRestock: number
  ) {
    super();
  }
}
