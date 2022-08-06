import { Request, Response } from 'express';
import ordersServices from '../services/orders.service';

const ordersControllers = {
  async listAllOrders(req: Request, res: Response) {
    const result = await ordersServices.listAllOrders();
    res.json(result);
  },
};

export default ordersControllers;