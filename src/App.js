import React, {useState} from 'react';
import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";

import './App.css';

import {items,categories} from './data';
import ProductList from './components/product-listing/product-list';


import Banner from './components/layout/banner';
import Promotional from './components/layout/promotional';

function App() {


    const [products] = useState(items);
    const [categoryList] = useState(categories);

    // const getProductsByCategory = (cat) => {
    //   products.filter((product) => {
    //     product.category.includes(cat)
    //   })
    // }
  return (
    <div className="App">
        {/* {getProductsByCategory()} */}
      <Router>
        <Banner categoryList={categoryList}></Banner>
          <Switch>
            {
              Object.entries(categoryList).map(([mainCategory, value]) => {
                return value.map((category, index) => (
                    <Route path={"/"+mainCategory+"/"+category} key={index}>
                          <ProductList items={products}/>
                    </Route>))
                })
            }
            <Route path="/">
              <Promotional/>
            </Route>
          </Switch>
        </Router>
      


     {/* <ProductList items={products}></ProductList> */}
    </div>
  );
}

export default App;
