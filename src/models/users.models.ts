import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Indexable, AddUser } from '../types';

const usersModels = {
  async addUser(data: AddUser): Promise<Indexable> {
    const { username, classe, level, password } = data;
    const sql = `insert into Trybesmith.Users
      (username, classe, level, password) values
      ('${username}', '${classe}', ${level}, '${password}')`;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql);
    return { id: insertId };
  },
};

export default usersModels;