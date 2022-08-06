import express from 'express';
import 'express-async-errors';
import productsRoutes from './routes/produtcs.routes';
import usersRoutes from './routes/users.routes';
import errorHandlerMiddleware from './middleware/errorHandler.middleware';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/users', usersRoutes);

app.use(errorHandlerMiddleware);

export default app;
