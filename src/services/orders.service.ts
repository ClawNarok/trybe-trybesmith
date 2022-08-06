import ordersModels from '../models/orders.models';
import { Orders } from '../types';

const ordersServices = {
  async listAllOrders(): Promise<Orders[]> {
    const result = await ordersModels.listAllOrders();
    return result;
  },
};

export default ordersServices;