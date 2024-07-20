import { Request, Response } from 'express';
import { HttpError } from 'interface/http/errors/HttpError';
import { HttpStatusCode } from 'interface/http/HttpStatusCode';
import logger from 'shared/logger';
import { DomainError } from 'shared/errors/DomainError';

export const httpErrorWrapper =
  <T>(handler: (req: Request, res: Response) => Promise<Response>) =>
  async (req: Request, res: Response) => {
    try {
      return await handler(req, res);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).send(error.message);
      }

      if (error instanceof DomainError) {
        return res.status(HttpStatusCode.BAD_REQUEST).send(error.message);
      }

      logger.error(error.message);
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send();
    }
  };
