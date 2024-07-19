import { from } from 'env-var';
const env = from(process.env);

export const PORT = env.get('PORT').default(8080).asPortNumber();
export const INTERFACE = env.get('INTERFACE').default('http').asEnum(['http']);
export const MONGODB_URI = env.get('MONGODB_URI').required().asString();
