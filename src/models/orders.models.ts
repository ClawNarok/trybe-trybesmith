import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Orders } from '../types';

const ordersModels = {
  async listAllOrders(): Promise<Orders[]> {
    const sql = 'select o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds '
      + 'from Trybesmith.Products as p '
      + 'inner join Trybesmith.Orders AS o ON o.id = p.orderId '
      + 'GROUP BY o.id ORDER BY o.userId';
    const [result] = await connection.query<RowDataPacket[]>(sql);
    return result as Orders[];
  },
};

export default ordersModels;