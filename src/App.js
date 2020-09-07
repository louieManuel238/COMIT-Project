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

    const getProductsByCategory = (filterCriteria) => {
      return products.filter((product) => (
        // product.category.includes(filterCriteria.map(x=>x))
        filterCriteria.every(x => (product.category.includes(x)))
      ))
    }

  return (
    <div className="App">
        {console.log(getProductsByCategory(["kids","men"]))}
      <Router>
        <Banner categoryList={categoryList}></Banner>
          <Switch>
            {
              //MAIN CATEGORIES ARE "MEN, WOMEN, KIDS, ..."
              Object.entries(categoryList).map(([mainCategory, value]) => {
                return value.map((category, index) => (
                    <Route path={"/"+mainCategory+"/"+category} key={index}>
                          <ProductList items={getProductsByCategory([mainCategory,category])}/>
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
