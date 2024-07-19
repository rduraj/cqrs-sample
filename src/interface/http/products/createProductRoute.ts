import { Request, Response } from 'express';
import { ProductsFacade } from 'products/application/ProductsFacade.ts';

export const createProductRoute = (products: ProductsFacade) => (req: Request, res: Response) => {
  products.create(req.body);
};
