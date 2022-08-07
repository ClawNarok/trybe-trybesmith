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
  userId: number,
  productsIds: number[],
};

export type Login = {
  username: string,
  password: string,
};

export type AddProduct = Omit<Product, 'id'>;
export type AddUser = Omit<User, 'id'>;