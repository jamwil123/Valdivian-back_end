import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

//require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello there hi!');
});

export default app;
