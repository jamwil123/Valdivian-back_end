import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import apiRouter from './router/api-router';

dotenv.config();
const app: Express = express();
app.use(cors);
app.use(express.json)

app.use("/api", apiRouter);
app.all("*", /*error functions */)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello there hi!');
});

export default app;
