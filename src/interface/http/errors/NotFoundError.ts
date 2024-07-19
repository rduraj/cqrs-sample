import { HttpError } from 'interface/http/errors/HttpError.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';

export class NotFoundError extends HttpError {
  constructor() {
    super(`Not found.`, HttpStatusCode.NOT_FOUND);
  }
}
