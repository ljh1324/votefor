import express from 'express';
import morgan from 'morgan';

import v1 from './v1';
import db from './database';
import logger from './lib/logger';

morgan.format(
  'combined',
  ':method :url :status :res[content-length] - :response-time ms :remote-addr - :remote-user :referrer :user-agent',
);

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream: logger.debug }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', v1);

app.use((err, req, res, next) => {
  logger.error(err);
  return res.status(500).json(INTERNAL_SERVER_ERROR_EXCEPTION);
});

export default app;
