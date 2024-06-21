export interface User {
  id?: number;
  email: string;
  password: string;
  name: string;
}

export interface Product {
  id?: number;
  image: string;
  title: string;
  description: string;
  colors: string;
  price: string;
  categoryId: number;
}

export interface Category {
  id?: number;
  name: string;
  divisionId: number;
  userId: number;
}

export interface Division {
  id?: number;
  name: string;
}
