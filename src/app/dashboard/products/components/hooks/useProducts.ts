"use client"

import { useState, useEffect } from 'react';
import {ProductService} from '../../aplication/ProductService';
import {ProductRepositoryImpl} from '../../infraestructure/ProductRepositoryImpl';
import { Product } from '../../domain/Product';

const productService = new ProductService(new ProductRepositoryImpl());

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await productService.getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return products;
};

export default useProducts;