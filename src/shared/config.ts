import { from } from 'env-var'
const env = from(process.env)

export const PORT = env.get('PORT').default(8080).asPortNumber()
