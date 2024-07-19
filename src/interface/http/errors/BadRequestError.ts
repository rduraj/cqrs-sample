import { HttpError } from 'interface/http/errors/HttpError.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(`Bad request! ${message}`, HttpStatusCode.BAD_REQUEST);
  }
}
