import express from 'express';
import { PORT } from '@/shared/config/envs';
import logger from '@/shared/logger';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { bootstrap } from '@/interface/bootstrap';
import { createProductRoute } from '@/interface/http/products/createProductRoute';
import { httpErrorWrapper } from '@/interface/http/httpErrorWrapper';
import { sellProductRoute } from '@/interface/http/products/sellProductRoute';
import { restockProductRoute } from '@/interface/http/products/restockProductRoute';
import { placeOrderRoute } from '@/interface/http/orders/placeOrderRoute';
import { findProductsRoute } from '@/interface/http/products/findProductsRoute';

const runner = async () => {
  const app = express();
  const { products, orders } = await bootstrap();

  app.use(helmet());
  app.use(bodyParser.json());

  /** Products **/
  app.get('/products', httpErrorWrapper(findProductsRoute(products)));
  app.post('/products', httpErrorWrapper(createProductRoute(products)));
  // Author note:
  // I would consider using the PATCH method on those two particular endpoints:
  app.post('/products/:id/restock', httpErrorWrapper(restockProductRoute(products)));
  app.post('/products/:id/sell', httpErrorWrapper(sellProductRoute(products)));

  /** Orders **/
  app.post('/orders', httpErrorWrapper(placeOrderRoute(orders)));

  app.listen(PORT, () => {
    logger.info(`API started on port ${PORT}`);
  });
};

export default runner;
