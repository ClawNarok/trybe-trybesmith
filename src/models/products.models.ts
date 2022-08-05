import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Indexable, Product } from '../types';

const productsModels = {
  async addProduct(data: Product): Promise<Indexable> {
    const { name, amount } = data;
    const sql = `insert into Trybesmith.Products (name, amount) values ('${name}', '${amount}')`;
    const [{ insertId }] = await connection.query<ResultSetHeader>(sql);
    console.log(insertId);
    
    return { id: insertId };
  },
};

export default productsModels;