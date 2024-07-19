import { Request, Response } from 'express';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';
import logger from 'shared/logger.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import { BadRequestError } from 'interface/http/errors/BadRequestError.ts';
import Joi from 'joi';

type CreateProductPayload = {
  name: string;
  description: string;
  price: number;
  stock: number;
};

const schema = Joi.object<CreateProductPayload>({
  name: Joi.string().max(50).required(),
  description: Joi.string().max(50).required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().required()
});
export const createProductRoute =
  (products: ProductsFacade) => async (req: Request, res: Response) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      throw new BadRequestError(error.message);
    }

    await products.create(value.name, value.description, value.price, value.stock);

    return res.status(HttpStatusCode.SUCCESS).send();
  };
