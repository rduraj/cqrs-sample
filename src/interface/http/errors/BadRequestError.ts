import { HttpError } from '@/interface/http/errors/HttpError';
import { HttpStatusCode } from '@/interface/http/HttpStatusCode';

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super(`Bad request! ${message}`, HttpStatusCode.BAD_REQUEST);
  }
}
