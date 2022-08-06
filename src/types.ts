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

export type AddProduct = Omit<Product, 'id'>;
export type AddUser = Omit<User, 'id'>;