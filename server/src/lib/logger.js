import winston from 'winston';
import moment from 'moment';
import path from 'path';
import 'winston-daily-rotate-file';

moment.locale('ko', {
  longDateFormat: {
    LL: 'HH:MM:SS',
  },
});

const format = winston.format.printf(
  ({ level, message }) => `${moment().format('LL')} [${level.toUpperCase()}] - ${message}`,
);

const error = winston.createLogger({
  level: 'error',
  transports: [
    new winston.transports.DailyRotateFile({
      dirname: path.join(__dirname, '../../log/error'),
      filename: 'log.',
      format
    }),

    new winston.transports.Console({
      format
    }),
  ]
});

const debug = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.DailyRotateFile({
      dirname: path.join(__dirname, '../../log/debug'),
      filename: 'log.',
      format
    }),

    new winston.transports.Console({
      format
    }),
  ]
});

const logger = {
  error(message) {
    error.error(message)
  },
  debug: {
    write(message) {
      debug.info(message);
    },
  },
}

export default logger;