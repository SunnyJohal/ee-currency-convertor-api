import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';
import yaml from 'yamljs';
import { router as currencyRouter } from './routes/currency';
import { routeNotFoundMiddleware } from './middlewares/routeNotFoundMiddleware';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

// Middlewares.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes.
app.use(`/api/v1/currency`, currencyRouter);
app.use('/', serve, setup(yaml.load('open-api.yaml')));

// Error handling.
app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
