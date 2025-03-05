import * as dotenv from 'dotenv';
import * as path from 'path';

export function envLoader(env: string = 'dev') {
  switch (env) {
    case 'test':
      return dotenv.config({
        path: path.resolve(__dirname, '../../.env.test'),
      });
    case 'dev':
      return dotenv.config({ path: path.resolve(__dirname, '../../.env.dev') });
    case 'prod':
      return dotenv.config({
        path: path.resolve(__dirname, '../../.env.prod'),
      });
    default:
      return dotenv.config({ path: path.resolve(__dirname, '../../.env.dev') });
  }
}
