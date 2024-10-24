import { INTERFACE } from '@/shared/config/envs';

const main = async () => {
  switch (INTERFACE) {
    case 'http':
      const httpRunner = await import('./src/interface/http/runner');

      await httpRunner.default();
      break;
    case 'cli':
      const cliRunner = await import('./src/interface/cli/runner');

      await cliRunner.default();
      break;
  }
};

main();
