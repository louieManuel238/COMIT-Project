import React, {useState} from 'react';

import './App.css';

import {items,categories} from './data';
import ProductList from './components/product-listing/product-list';


import Banner from './components/layout/banner';

function App() {


    const [products, setProduct] = useState(items);
    const [categoryList, setCategory] = useState(categories);
  return (
    <div className="App">
      <Banner categoryList={categoryList}></Banner>
      <ProductList items={products}></ProductList>
    </div>
  );
}

export default App;
