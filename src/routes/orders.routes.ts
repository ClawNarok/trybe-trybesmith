import { Router } from 'express';
import ordersControllers from '../controllers/orders.controller';

const ordersRoutes = Router();

ordersRoutes.get('/', ordersControllers.listAllOrders);

export default ordersRoutes;