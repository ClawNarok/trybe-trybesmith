import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/produtcs.routes';
import usersRoutes from './routes/users.routes';
import errorHandlerMiddleware from './middleware/errorHandler.middleware';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.use(errorHandlerMiddleware);

export default app;
