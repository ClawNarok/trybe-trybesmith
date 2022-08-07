import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Login } from '../types';

const loginModels = {
  async checkLogin(data: Login): Promise<boolean> {
    const { username, password } = data;
    const sql = `SELECT COUNT(*) as count FROM Trybesmith.users as u
      WHERE u.username = '${username}' AND u.password = '${password}';`;
    const [[result]] = await connection.query<RowDataPacket[]>(sql);
    return result.count === 1;
  },
};

export default loginModels;