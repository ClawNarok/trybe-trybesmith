import { Router } from 'express';
import productsControllers from '../controllers/products.controller';

const productsRoutes = Router();

productsRoutes.post('/', productsControllers.addProduct);

export default productsRoutes;