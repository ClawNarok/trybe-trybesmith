import { Router } from 'express';
import ordersControllers from '../controllers/orders.controller';

const ordersRoutes = Router();

ordersRoutes.get('/', ordersControllers.listAllOrders);
ordersRoutes.post('/', ordersControllers.addOrders);

export default ordersRoutes;