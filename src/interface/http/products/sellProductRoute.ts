import { Request, Response } from 'express';
import { ProductFacade } from '@/products/application/ProductFacade';
import { HttpStatusCode } from '@/interface/http/HttpStatusCode';
import { BadRequestError } from '@/interface/http/errors/BadRequestError';
import Joi from 'joi';

type SellProductPayload = {
  amountOfSoldItems: number;
};

const schema = Joi.object<SellProductPayload>({
  amountOfSoldItems: Joi.number().required().positive()
});
export const sellProductRoute =
  (products: ProductFacade) => async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) {
      throw new BadRequestError('No ID given.');
    }

    const { error, value } = schema.validate(req.body);

    if (error) {
      throw new BadRequestError(error.message);
    }

    await products.sell(id, value.amountOfSoldItems);

    return res.status(HttpStatusCode.SUCCESS).send();
  };
