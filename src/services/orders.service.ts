import Joi from 'joi';
import ordersModels from '../models/orders.models';
import productsModels from '../models/products.models';
import { Orders, Login, ProductsIds, AddOrders } from '../types';

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
    const schema = Joi.object<ProductsIds>({
      productsIds: Joi.array().required().min(1).items(Joi.number().positive()),
    }).messages({
      'array.min': '"productsIds" must include only numbers',
    });
    const result = await schema.validateAsync(products);
    return result;
  },
  async addOrders(data: Omit<Login, 'password'>, products: ProductsIds): Promise<AddOrders> {
    const id = await ordersModels.getIdByUsername(data.username);
    const orderId = await ordersModels.addOrder(id);
    const { productsIds } = products;
    await Promise.all(productsIds
      .map((product) => productsModels.updateOrderId(product, orderId)));
    return { userId: id, productsIds };
  },
};

export default ordersServices;