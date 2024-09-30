import { ProductRepository } from '../domain/ProducRepository';
import { Product } from '../domain/Product';

export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }
}