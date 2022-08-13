import Joi from 'joi';
import ordersModels from '../models/orders.models';
import { Orders, Login } from '../types';

const ordersServices = {
  async listAllOrders(): Promise<Orders[]> {
    const result = await ordersModels.listAllOrders();
    return result;
  },
  async validateHeadersAuth(auth: string): Promise<string> {
    const schema = Joi.object<unknown>({
      authorization: Joi.string().required(),
    });
    const result = await schema.validateAsync(auth);
    return result;
  },
  async validateBodyProducts(products: Omit<Orders, 'userId'>): Promise<Omit<Orders, 'userId'>> {
    const schema = Joi.object<unknown>({
      products: Joi.array().required().items(Joi.number().required().positive()),
    });
    const result = await schema.validateAsync(products);
    return result;
  },
  async addOrders(data: Omit<Login, 'password'>): Promise<void> {
    const id = await ordersModels.getIdByUsename(data.username);
    console.log(id);
  },
};

export default ordersServices;