export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  weight?: string;
  category: string;
  isBestSeller?: boolean;
  // allow additional fields gracefully
  [key: string]: any;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image?: string;
  [key: string]: any;
}

export interface CartItem extends Product {
  quantity: number;
}
