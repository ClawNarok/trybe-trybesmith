import { Request, Response } from 'express';
import { StatusCodes as http } from 'http-status-codes';
import usersServices from '../services/users.service';

const usersControllers = {
  async addUser(req: Request, res: Response) {
    const data = await usersServices.validateBodyUser(req.body);
    const result = await usersServices.addUser(data);
    const token = await usersServices.makeToken(result);
    res.status(http.CREATED).json({ token });
  },
};

export default usersControllers;