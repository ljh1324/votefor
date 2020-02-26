import express from 'express';
import dotenv from 'dotenv';
import v1 from './v1';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', v1);

export default app;
