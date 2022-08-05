import { Request, Response } from 'express';
import { StatusCodes as http } from 'http-status-codes';
import productsServices from '../services/produtcs.service';

const productsControllers = {
  async addProduct(req: Request, res: Response) {
    const data = await productsServices.validateBodyProduct(req.body);
    const result = await productsServices.addProduct(data);
    res.status(http.CREATED).json(result);
  },
};

export default productsControllers;