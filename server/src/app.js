import express from 'express';
import morgan from 'morgan';
import status from 'http-status';

import v1 from './v1';
import logger from './lib/logger';

morgan.format(
  'combined',
  ':method :url :status :res[content-length] - :response-time ms :remote-addr - :remote-user :referrer :user-agent'
);

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined', { stream: logger.debug }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/v1', v1);

app.use((req, res, next) => {
  return res.status(status.NOT_FOUND).json({});
});

app.use((err, req, res, next) => {
  logger.error(err);
  return res.status(status.INTERNAL_SERVER_ERROR).json({});
});

export default app;
