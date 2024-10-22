import { from } from 'env-var';
import * as process from 'process';

const env = from(process.env);

export const PORT = env.get('PORT').default(8080).asPortNumber();
export const INTERFACE = env.get('INTERFACE').default('http').asEnum(['http', 'cli']);
export const MONGODB_URI = env.get('MONGODB_URI').required().asString();
export const MONGODB_DATABASE = env.get('MONGODB_DATABASE').required().asString();
