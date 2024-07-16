export interface Product {
  id?: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  images: string[];
  salePrice?: number;
  creationAt?: Date;
  updatedAt?: Date;
}
