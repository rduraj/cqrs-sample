import { Request, Response } from 'express';
import { HttpError } from 'interface/http/errors/HttpError.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import logger from 'shared/logger.ts';

export const httpErrorWrapper =
  <T>(handler: (req: Request, res: Response) => Promise<Response>) =>
  async (req: Request, res: Response) => {
    try {
      return await handler(req, res);
    } catch (error) {
      if (error instanceof HttpError) {
        return res.status(error.status).send(error.message);
      }

      logger.error(error.message);
      return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send();
    }
  };
