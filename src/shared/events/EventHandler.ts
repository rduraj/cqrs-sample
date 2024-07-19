import { EventEmitter } from 'shared/events/EventEmitter.ts';

export class EventHandler {
  constructor(private readonly eventEmmiter: EventEmitter) {}
}
