import { Request, Response } from 'express';
import { ProductFacade } from 'products/application/ProductFacade.ts';
import { HttpStatusCode } from 'interface/http/HttpStatusCode.ts';
export const findProductsRoute =
  (products: ProductFacade) => async (req: Request, res: Response) => {
    const listOfProducts = await products.getListOfProducts();

    return res.status(HttpStatusCode.SUCCESS).send(listOfProducts);
  };
