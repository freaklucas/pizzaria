import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/routes';

const app = express();
app.use(router);
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor em funcionamento");
});