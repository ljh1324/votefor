import '../config/env';
import app from '../app';
import dbSync from './db-sync';

const { force, PORT } = process.env;
const port = PORT || 3000;

dbSync({ force })
  .then(() => {
    app.listen(port, () => {
      console.log('Server start');
    });
  })
  .catch(err => {
    console.log(err);
  });
