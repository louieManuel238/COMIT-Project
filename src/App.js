import React, {useState, useEffect} from 'react';
import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";

import './App.css';

// import {items,categories} from './data';
import items from './data.json';
import categories from './category.json';
import ProductList from './components/product-listing/product-list';
import  {Product} from './components/product-listing/product';


import Banner from './components/layout/banner';
import Promotional from './components/layout/promotional';
import CheckoutModal from './components/layout/checkout-modal';

function App() {


    const [products] = useState(items);
    const [categoryList] = useState(categories);
    const [cartItems, setCartItems] = useState([]);

    const getProductsByCategory = (filterCriteria) => {
      const filteredProduct = products.filter((product) => (
        filterCriteria.every(x => (product.category.includes(x)))
      ))
      return filteredProduct;
    }


  useEffect(() => {
      //jjust need to show the items access to localstorage and find item in json and save as object add to obarr(sopping bag)
      // for (let i = 0; i < localStorage.length; i++){
      //     const item = products.find((product) => product.id === parseInt(localStorage.key(i),10))
      //     setCartItems([...cartItems, {...item, quantity: localStorage.getItem(parseInt(localStorage.key(i),10))}])
      // }
  },[])

  useEffect(()=>{localStorage.setItem("cart", JSON.stringify(cartItems))},[cartItems])

    const addCartItems = (product) => {
      const exisitInCartItem = cartItems.find((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors)
      console.log(product.sizes)
      if(exisitInCartItem != undefined) {
        const newCart = cartItems.filter((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors);
         setCartItems([...newCart, {...exisitInCartItem, quantity: exisitInCartItem.quantity+1}])
      }else{
        // const item = products.find((item) => item.id === product.id)

        setCartItems([...cartItems, {...product, quantity: 1}])
      }

    }
    
  return (
    <div className="App">
      <Router>
        {/* {console.log(sortProducts(["price", "asc"]))} */}
        
        
        <Banner 
          categoryList={categoryList}
          cartItems={cartItems}>
        </Banner>
        
        <Switch>
          {
            //MAIN CATEGORIES ARE "MEN, WOMEN, KIDS, ..."
            //CATEGORY are TSHIRT, SHOES, JEANS ... etc
            Object.entries(categoryList).map(([mainCategory, value]) => {
              return value.map((category, index) => (
                  <Route path={"/"+mainCategory+"/"+category} key={index} >
                        <ProductList 
                        items={getProductsByCategory([mainCategory,category])} 
                        addToCart={addCartItems}
                        />
                  </Route>))
              })
          }
          <Route path={"/accessories"}>
            <ProductList 
              items={getProductsByCategory(["accessories"])} 
              addToCart={addCartItems}
            />
          </Route>
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
