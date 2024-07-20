import { Request, Response } from 'express';
import { ProductFacade } from 'products/application/ProductFacade.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
import { NotFoundError } from 'interface/http/errors/NotFoundError.ts';
export const findProductsRoute =
  (products: ProductFacade) => async (req: Request, res: Response) => {
    const listOfProducts = await products.getListOfProducts();

    if (listOfProducts) {
      throw new NotFoundError('Products not found');
    }

    return res.status(HttpStatusCode.SUCCESS).send(listOfProducts);
  };
