import { Request, Response } from 'express';
import { ProductFacade } from 'products/application/ProductFacade.ts';
import logger from 'shared/logger.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import { BadRequestError } from 'interface/http/errors/BadRequestError.ts';
import Joi from 'joi';
import { OrderFacade } from 'orders/application/OrderFacade.ts';

type PlaceOrderPayload = {
  customerId: number;
  products: { id: string; amount: number }[];
};
const productSchema = Joi.object().keys({
  id: Joi.string().required(),
  amount: Joi.number().required()
});
const schema = Joi.object<PlaceOrderPayload>({
  customerId: Joi.number().required(),
  products: Joi.array().items(productSchema)
});
export const placeOrderRoute = (orders: OrderFacade) => async (req: Request, res: Response) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    throw new BadRequestError(error.message);
  }

  await orders.placeOrder(value.customerId, value.products);

  return res.status(HttpStatusCode.SUCCESS).send();
};
