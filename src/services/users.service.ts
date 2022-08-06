import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import usersModels from '../models/users.models';
import { AddUser, User } from '../types';

const SECRET = 'secret';

const usersServices = {
  async validateBodyUser(data: User): Promise<User> {
    const schema = Joi.object<User>({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    });
    const result = await schema.validateAsync(data);
    return result;
  },
  async addUser(data: AddUser): Promise<User> {
    const result = await usersModels.addUser(data);
    return { ...result, ...data };
  },
  async makeToken(data: User): Promise<string> {
    const { id, username, classe, level } = data;
    const token = Jwt.sign({ data: { id, username, classe, level } }, SECRET);
    return token;
  },
};

export default usersServices;