import React from 'react';
import { Product } from '../data/products';
import { useSortableData } from '../hooks/useSortableData';

type SortableFields = 'name' | 'price' | 'stock';

type ProductTableProps = {
  products: Product[];
};

function ProductTable({ products }: ProductTableProps) {
  const {
    sortedItems: sortedProducts,
    requestSort,
    sortConfig,
  } = useSortableData(products, null);

  const getClassNamesFor = (field: SortableFields) => {
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
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Price
            </button>
          </th>
          <th>
            <button
              onClick={() => requestSort('stock')}
              className={getClassNamesFor('stock')}
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
