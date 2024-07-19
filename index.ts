import { INTERFACE } from 'shared/config/envs.ts';

switch (INTERFACE) {
  case 'http':
    const runner = await import('./src/interface/http/runner.ts');

    await runner.default();
    break;
}
