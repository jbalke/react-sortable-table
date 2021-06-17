import React from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import {products} from './data/products'

function App() {
  return (
    <div className="App">
      <ProductTable products={products} />
    </div>
  );
}

export default App;
