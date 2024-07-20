import express from 'express';
import { PORT } from 'shared/config/envs.ts';
import logger from 'shared/logger';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { bootstrap } from 'interface/bootstrap.ts';
import { createProductRoute } from 'interface/http/products/createProductRoute.ts';
import { httpErrorWrapper } from 'interface/http/httpErrorWrapper.ts';
import { sellProductRoute } from 'interface/http/products/sellProductRoute.ts';
import { restockProductRoute } from 'interface/http/products/restockProductRoute.ts';
import { placeOrderRoute } from 'interface/http/orders/placeOrderRoute.ts';

const runner = async () => {
  const app = express();
  const { products, orders } = await bootstrap();

  app.use(helmet());
  app.use(bodyParser.json());

  /** Products **/
  app.post('/products', httpErrorWrapper(createProductRoute(products)));
  // Author note:
  // I would consider using PATCH method in those two particular endpoints:
  app.post('/products/:id/restock', httpErrorWrapper(restockProductRoute(products)));
  app.post('/products/:id/sell', httpErrorWrapper(sellProductRoute(products)));

  /** Orders **/
  app.post('/orders', httpErrorWrapper(placeOrderRoute(orders)));

  app.listen(PORT, () => {
    logger.info(`API started on port ${PORT}`);
  });
};

export default runner;
