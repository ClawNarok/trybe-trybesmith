import { Router } from 'express';
import loginControllers from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post('/', loginControllers.checkLogin);

export default loginRoutes;