import { Product } from '../domain/Product';

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
}