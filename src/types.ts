export type Indexable = {
  id: number
};

export type Product = Indexable & {
  name: string,
  amount: string
};

export type User = Indexable & {
  username: string,
  classe: string,
  level: number,
  password: number
};

export type Orders = Indexable & {
  userId: string,
  productsIds: number[],
};

export type ProductsIds = {
  productsIds: number[]
};

export type Login = {
  username: string,
  password: string,
};

export type Decode = {
  data: Omit<Login, 'password'>,
};

export type AddProduct = Omit<Product, 'id'>;
export type AddUser = Omit<User, 'id'>;
export type AddOrders = Omit<Orders, 'id'>;