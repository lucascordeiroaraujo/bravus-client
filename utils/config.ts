import * as dotenv from 'dotenv';

dotenv.config();

let path;

switch (process.env.NODE_ENV) {
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path });

export const { URL_API } = process.env;

export const { DOMAIN } = process.env;

export const { ROBOTS } = process.env;
