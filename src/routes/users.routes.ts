import { Router } from 'express';
import usersControllers from '../controllers/users.controller';

const usersRoutes = Router();

usersRoutes.post('/', usersControllers.addUser);

export default usersRoutes;