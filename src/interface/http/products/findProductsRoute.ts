import { Request, Response } from 'express';
import { ProductFacade } from '@/products/application/ProductFacade';
import { HttpStatusCode } from '@/interface/http/HttpStatusCode';
import { NotFoundError } from '@/interface/http/errors/NotFoundError';
export const findProductsRoute =
  (products: ProductFacade) => async (req: Request, res: Response) => {
    const listOfProducts = await products.getListOfProducts();

    if (listOfProducts.length === 0) {
      throw new NotFoundError('Products not found');
    }

    return res.status(HttpStatusCode.SUCCESS).send(listOfProducts);
  };
