import { get } from 'env-var';

export const envs = {
  NODE_ENV: get('NODE_ENV').default('development'),
  PORT: get('PORT').required().asPortNumber(),
};
