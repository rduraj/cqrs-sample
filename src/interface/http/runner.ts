import express from 'express';
import { PORT } from 'shared/config/envs.ts';
import logger from 'shared/logger';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { bootstrap } from 'interface/bootstrap.ts';
import { createProductRoute } from 'interface/http/products/createProductRoute.ts';
import { httpErrorWrapper } from 'interface/http/httpErrorWrapper.ts';

const runner = () => {
  const app = express();
  const { products } = bootstrap();

  app.use(helmet());
  app.use(bodyParser.json());

  app.post('/products', httpErrorWrapper(createProductRoute(products)));

  app.listen(PORT, () => {
    logger.info(`API started on port ${PORT}`);
  });
};

export default runner;
