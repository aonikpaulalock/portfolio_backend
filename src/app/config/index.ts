import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database: process.env.DATABASE_URL,
  solt_round: process.env.SALT_ROUND,
  jwt_access_token: process.env.JWT_ACCESS_TOKEN,
  jwt_access_token_expire: process.env.JWT_ACCESS_TOKEN_EXPIRE
};