import { HttpError } from 'interface/http/errors/HttpError.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';

export class NotFoundError extends HttpError {
  constructor(message = 'Not found.') {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}
