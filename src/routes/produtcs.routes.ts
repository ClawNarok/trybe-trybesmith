import { Router } from 'express';
import productsControllers from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.get('/', productsControllers.listAllProducts);
productsRoutes.post('/', productsControllers.addProduct);

export default productsRoutes;