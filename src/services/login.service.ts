import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import loginModels from '../models/login.models';
import { Login } from '../types';
import Unauthorized from '../errors/notFound.middleware';

const SECRET = 'secret';

const loginServices = {
  async validateBodyLogin(data: Login): Promise<Login> {
    const schema = Joi.object<Login>({
      username: Joi.string().required().min(3),
      password: Joi.string().required().min(8),
    });
    const result = await schema.validateAsync(data);
    return result;
  },
  async checkLogin(data: Login) {
    const result = await loginModels.checkLogin(data);
    if (!result) throw new Unauthorized('Username or password invalid');
  },
  async makeToken(data: Login): Promise<string> {
    const { username } = data;
    const token = Jwt.sign({ data: { username } }, SECRET);
    return token;
  },
};

export default loginServices;