import { Request, Response } from 'express';
import loginServices from '../services/login.service';

const loginControllers = {
  async checkLogin(req: Request, res: Response) {
    const data = await loginServices.validateBodyLogin(req.body);
    await loginServices.checkLogin(data);
    const token = await loginServices.makeToken(data);
    res.json({ token });
  },
};

export default loginControllers;