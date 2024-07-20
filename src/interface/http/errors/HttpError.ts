import { HttpStatusCode } from '@/interface/http/HttpStatusCode';

export class HttpError extends Error {
  constructor(
    public message: string,
    public status: HttpStatusCode
  ) {
    super(message);
  }
}
