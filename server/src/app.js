import express from 'express';
import v1 from './v1';
import db from './database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', v1);

export default app;
