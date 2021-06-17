import React, { useMemo, useState } from 'react';
import { Product } from '../data/products';

type SortableFields = 'name' | 'price' | 'stock';
type SortDirections = 'asc' | 'desc';

type ProductTableProps = {
  products: Product[];
};

function ProductTable({ products }: ProductTableProps) {
  const [sortConfig, setSortConfig] =
    useState<{ field: SortableFields; direction: SortDirections } | null>(null);

  let sortedProducts = useMemo(() => {
    const sortedProducts = [...products];

    if (sortConfig == null) return sortedProducts;

    sortedProducts.sort((a, b) => {
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      return 0;
    });

    return sortedProducts;
  }, [sortConfig, products]);

  const requestSort = (field: SortableFields): void => {
    let direction: SortDirections = 'asc';
    if (sortConfig?.field === field && sortConfig.direction === 'asc')
      direction = 'desc';

    setSortConfig({ field, direction });
  };

  const sortClassName = (field: SortableFields) => {
    return sortConfig?.field === field && sortConfig?.direction === 'asc'
      ? 'descending'
      : 'ascending';
  };

  return (
    <table>
      <caption>Our Products</caption>
      <thead>
        <tr>
          <th>
            <button
              onClick={() => requestSort('name')}
              className={sortClassName('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              onClick={() => requestSort('price')}
              className={sortClassName('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              onClick={() => requestSort('stock')}
              className={sortClassName('stock')}
            >
              In Stock
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedProducts.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.price}</td>
            <td>{p.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
