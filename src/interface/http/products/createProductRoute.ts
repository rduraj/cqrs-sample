import { Request, Response } from 'express';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';
import logger from 'shared/logger.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import { BadRequestError } from 'interface/http/errors/BadRequestError.ts';
import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().required()
});
export const createProductRoute =
  (products: ProductsFacade) => async (req: Request, res: Response) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      throw new BadRequestError(error.message);
    }

    await products.create(value).catch((error) => {
      logger.error('Product creation failed.');

      throw new BadRequestError(`Product creation failed. ${error.message}`);
    });

    return res.status(HttpStatusCode.SUCCESS).send();
  };
