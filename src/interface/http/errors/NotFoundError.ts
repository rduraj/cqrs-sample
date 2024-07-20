import { HttpError } from '@/interface/http/errors/HttpError';
import { HttpStatusCode } from '@/interface/http/HttpStatusCode';

export class NotFoundError extends HttpError {
  constructor(message = 'Not found.') {
    super(message, HttpStatusCode.NOT_FOUND);
  }
}
