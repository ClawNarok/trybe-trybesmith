import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Indexable, Product } from '../types';

const productsModels = {
  async addProduct(data: Product): Promise<Indexable> {
    const { name, amount } = data;
    const sql = `insert into Trybesmith.Products (name, amount) values ('${name}', '${amount}')`;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql);
    return { id: insertId };
  },
  async listAllProducts(): Promise<Product[]> {
    const sql = 'select * from Trybesmith.Products';
    const [itens] = await connection.query<RowDataPacket[]>(sql);
    return itens as Product[];
  },
  async updateOrderId(id: number, orderId: number): Promise<void> {
    const sql = 'update Trybesmith.Products as p set p.orderId = ? where p.id = ?';
    await connection.query<ResultSetHeader>(sql, [orderId, id]);
  },
};

export default productsModels;