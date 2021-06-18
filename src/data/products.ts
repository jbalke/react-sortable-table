interface BaseRecord<T extends number | string> {
  id: T;
}

export interface Product extends BaseRecord<number> {
  name: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
  { id: 2, name: 'Milk', price: 1.9, stock: 32 },
  { id: 3, name: 'Yoghurt', price: 2.4, stock: 12 },
  { id: 4, name: 'Heavy Cream', price: 3.9, stock: 9 },
  { id: 5, name: 'Butter', price: 0.9, stock: 99 },
  { id: 6, name: 'Sour Cream ', price: 2.9, stock: 86 },
  { id: 7, name: 'Fancy French Cheese 🇫🇷', price: 99, stock: 12 },
  { id: 8, name: 'Oat Milk', price: 1.0, stock: 20 },
  { id: 9, name: 'Soy Milk', price: 1.2, stock: 32 },
  { id: 10, name: 'Vegan Cheese', price: 5.5, stock: 12 },
  { id: 11, name: 'Oat Cream', price: 2.9, stock: 9 },
  { id: 12, name: 'Double Creams', price: 1.9, stock: 5 },
];
