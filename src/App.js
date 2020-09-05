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
  return (
    <div className="App">
      <Router>
        <Banner categoryList={categoryList}></Banner>
        
          <Switch>
            {console.log(categoryList)}
            {categoryList.men.map(
              (category) => (
                  <Route path={"/men/"+category}>
                    <ProductList items={products}/>
                  </Route>
                )
            )}
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
