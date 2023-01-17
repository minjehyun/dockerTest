// import dotenv from 'dotenv';
import { dockerSecret } from './data/secret.js';
// dotenv.config();
// function required(key, defaultValue = undefined) {
//   const value = process.env[key] || defaultValue;
//   if (value == null) {
//     throw new Error(`Key ${key} is undefined`);
//   }
//   return value;
// }

console.log(dockerSecret);
export const config = {
  jwt: {
    secretKey: dockerSecret.read('JWT_SECRET'),
    expiresInSec: parseInt(dockerSecret.read('JWT_EXPIRES_SEC')),
  },
  bcrypt: {
    saltRounds: parseInt(dockerSecret.read('BCRYPT_SALT_ROUNDS')),
  },
  host: {
    port: parseInt(dockerSecret.read('HOST_PORT')),
  },
  db: {
    host: dockerSecret.read('DB_HOST'),
    user: dockerSecret.read('DB_USER'),
    database: dockerSecret.read('DB_DATABASE'),
    password: dockerSecret.read('DB_PASSWORD'),
  },
};
