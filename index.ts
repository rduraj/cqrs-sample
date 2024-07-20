import { INTERFACE } from 'shared/config/envs.ts';

switch (INTERFACE) {
  case 'http':
    const httpRunner = await import('./src/interface/http/runner.ts');

    await httpRunner.default();
    break;
  case 'cli':
    const cliRunner = await import('./src/interface/cli/runner.ts');

    await cliRunner.default();
    break;
}
