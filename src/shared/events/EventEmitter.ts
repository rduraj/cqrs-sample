import { EventEmitter as NativeEventEmitter } from 'node:events';

export class EventEmitter extends NativeEventEmitter {}
// export const eventEmitter = new EventEmitter();

// const commandHandler = new ProductCommandHandler(eventEmitter);
// const queryHandler = new ProductQueryHandler(eventEmitter);

// Example usage
// commandhandler.handlecreateproduct(new createproductcommand('1', 'laptop', 999.99, 10));
// commandhandler.handlecreateproduct(new createproductcommand('2', 'smartphone', 599.99, 20));
