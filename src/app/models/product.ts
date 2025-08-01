export interface Product {
  title: string;
  min_price: number;
  max_price: number;
  main_image: string;
  alt_image: string;
  product_id: string;
}

export interface ProductsResponse {
  total_products: number;
  products: Product[];
} 