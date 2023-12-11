import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV : process.env.NODE_ENV ,
  port: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};
