import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router as currencyConvertorRouter } from './routes';
import { routeNotFoundMiddleware } from './middlewares/routeNotFoundMiddleware';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const PORT = process.env.PORT || 3001;
const app = express();

// Middlewares.
app.use(bodyParser.json());
app.use(cors());

// Routes.
app.use(`/api/v1/currency-convertor`, currencyConvertorRouter);

// Error handling middleware.
app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

// Start service.
const service = app.listen(PORT, () => {
  console.log(`Currency conversion service started on port: ${PORT}`);
});

process.on('SIGTERM', () => {
  service.close(() => {
    console.log('Currency conversion service terminated.');
  });
});
