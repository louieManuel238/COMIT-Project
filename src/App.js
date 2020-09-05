import React, {useState} from 'react';

import './App.css';

import {items,categories} from './data';
import ProductList from './components/product-listing/product-list';


import Banner from './components/layout/banner';
import Promotional from './components/layout/promotional';

function App() {


    const [products] = useState(items);
    const [categoryList] = useState(categories);
  return (
    <div className="App">
      <Banner categoryList={categoryList}></Banner>

      <Promotional/>


     {/* <ProductList items={products}></ProductList> */}
    </div>
  );
}

export default App;
