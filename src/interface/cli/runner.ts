import prompts from 'prompts';
import { bootstrap } from 'interface/bootstrap.ts';
import logger from 'shared/logger.ts';
import * as process from 'process';

/**
 * Author note:
 * Just sample of switching interface; no domain structure applied yet.
 */
export default async () => {
  const response = await prompts([
    {
      type: 'select',
      name: 'action',
      message: 'Simple Inventory Management System - select your action:',
      choices: [
        { title: 'Get list of products', value: 'list' },
        { title: 'Add sample product', value: 'createProduct' }
      ]
    }
  ]);

  const { products } = await bootstrap();
  switch (response.action) {
    case 'list':
      const list = await products.getListOfProducts();
      logger.info(list);

      process.exit();
      break;
    case 'createProduct':
      await products.create(
        'Millennium Falcon',
        "It's the ship that made the Kessel Run in less than twelve parsecs.",
        200,
        1
      );

      logger.info('Millennium Falcon just landed in your backyard.');
      process.exit();
      break;
  }
};
