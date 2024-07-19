import { Request, Response } from 'express';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';
import logger from 'shared/logger.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import { BadRequestError } from 'interface/http/errors/BadRequestError.ts';
import Joi from 'joi';
import { NotFoundError } from 'interface/http/errors/NotFoundError.ts';

type RestockProductPayload = {
  itemsToAdd: number;
};

const schema = Joi.object<RestockProductPayload>({
  itemsToAdd: Joi.number().required().positive()
});
export const restockProductRoute =
  (products: ProductsFacade) => async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) {
      throw new BadRequestError('No ID given.');
    }

    const { error, value } = schema.validate(req.body);

    if (error) {
      throw new BadRequestError(error.message);
    }

    await products.restock(id, value.itemsToAdd);

    return res.status(HttpStatusCode.SUCCESS).send();
  };
