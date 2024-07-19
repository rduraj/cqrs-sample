import { Event } from 'shared/events/Event.ts';

export class RestockProductCommand extends Event {
  constructor(
    public productId: string,
    public itemsToAdd: number
  ) {
    super();
  }
}
