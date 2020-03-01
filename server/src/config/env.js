import dotenv from 'dotenv';

let path;
switch (process.env.NODE_ENV) {
  case 'development':
    path = `${__dirname}/../../.env.dev`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.prod`;
    break;
  default:
    path = `${__dirname}/../../.env.dev`;
}

dotenv.config({ path });
