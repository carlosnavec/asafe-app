
import data from "../infraestructure/mock/products.json";
import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProducRepository';

export class ProductRepositoryImpl implements ProductRepository {
   getProducts(): Promise<Product[]> {

    return Promise.resolve(data.products);
  }
}