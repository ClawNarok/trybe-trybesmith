import Joi from 'joi';
import productsModels from '../models/products.models';
import { AddProduct, Product } from '../types';

const productsServices = {
  async validateBodyProduct(data: Product): Promise<Product> {
    const schema = Joi.object<Product>({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    const result = await schema.validateAsync(data);
    return result;
  },
  async addProduct(data: Product): Promise<AddProduct> {
    const result = await productsModels.addProduct(data);
    return { ...result, ...data };
  },
  async listAllProducts(): Promise<Product[]> {
    const result = await productsModels.listAllProducts();
    return result;
  },
};

export default productsServices;