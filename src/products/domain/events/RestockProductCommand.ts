import { Event } from '@/shared/events/Event';

export class RestockProductCommand extends Event {
  constructor(
    public productId: string,
    public itemsToAdd: number
  ) {
    super();
  }
}
