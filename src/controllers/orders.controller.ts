import { Request, Response } from 'express';
import loginServices from '../services/login.service';
import ordersServices from '../services/orders.service';

const ordersControllers = {
  async listAllOrders(req: Request, res: Response) {
    const result = await ordersServices.listAllOrders();
    res.json(result);
  },
  async addOrders(req: Request, res: Response) {
    const { authorization } = req.headers;
    const { data } = await loginServices.readToken(authorization as string);
    const products = await ordersServices.validateBodyProducts(req.body);
    console.log(products);
    await ordersServices.addOrders(data);
    res.sendStatus(200);
  },
};

export default ordersControllers;