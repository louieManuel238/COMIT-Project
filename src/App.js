import React, {useState} from 'react';
import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";
import {orderBy} from 'lodash';

import './App.css';

import {items,categories} from './data';
import ProductList from './components/product-listing/product-list';


import Banner from './components/layout/banner';
import Promotional from './components/layout/promotional';

function App() {


    const [products, setProducts] = useState(items);
    const [categoryList] = useState(categories);

    const getProductsByCategory = (filterCriteria) => {
      const filteredProduct = products.filter((product) => (
        // product.category.includes(filterCriteria.map(x=>x))
        filterCriteria.every(x => (product.category.includes(x)))
      ))
      return filteredProduct;
      //setProducts([...filteredProduct]);
    }


    const sortProducts = (items,sortCriteria) => {
      return orderBy(items, [sortCriteria[0]], [sortCriteria[1]]);
   }

  return (
    <div className="App">
      <Router>
        {/* {console.log(sortProducts(["price", "asc"]))} */}
        <Banner categoryList={categoryList}></Banner>
          <Switch>
            {
              //MAIN CATEGORIES ARE "MEN, WOMEN, KIDS, ..."
              //CATEGORY are TSHIRT, SHOES, JEANS ... etc
              Object.entries(categoryList).map(([mainCategory, value]) => {
                return value.map((category, index) => (
                    <Route path={"/"+mainCategory+"/"+category} key={index} >
                          <ProductList items={getProductsByCategory([mainCategory,category])} sortProducts={sortProducts}/>
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
