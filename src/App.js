import React, {useState, useEffect} from 'react';
import { Switch, Route,  BrowserRouter as Router } from "react-router-dom";


import './App.css';

// import {items,categories} from './data';
import items from './data.json';
import categories from './category.json';
import ProductList from './components/product-listing/product-list';
import { CopyrightFooter, Footer } from './components/layout/footer';
import ProceedCheckout from './components/system/proceed-checkout';

import Banner from './components/layout/banner';
import Promotional from './components/layout/promotional';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'lodash';


function App() {

    const [products] = useState(items);
    const [categoryList] = useState(categories);
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    let pricing ={
      subtotal: 0,
      tax: 5,
      shipping: 0,
      discount: 0,
      coupon: 0,
      total: 0
    }

    const getProductsByCategory = (filterCriteria) => {
      const filteredProduct = products.filter((product) => (
        filterCriteria.every(x => (product.category.includes(x)))
      ))
      return filteredProduct;
    }

  useEffect(() => {
      if(localStorage.getItem("cart") !== null)
        setCartItems(JSON.parse(localStorage.getItem("cart")))
      else 
        setCartItems([])
  },[])

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cartItems));
  },[cartItems])

  const notify = (item, text, type) => {
    if(type==="success"){
      toast.success((item.name + " is Added in your " + text), {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      })
    }else{
      toast.error((item.name + text),{
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      })
    }
      
  }
  //Update img url in cartItems
  const getImageUrl = (item) => {
    if(item !== undefined){
      return item.images.find(url => url.color === item.colors)
    }
    
  }

  const addCartItems = (product) => {
    const exisitInCartItem = cartItems.find((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors)

    if(exisitInCartItem !== undefined) {

      const newCart = [...cartItems]
      const updatedItem = {...exisitInCartItem, quantity: exisitInCartItem.quantity+1}
      newCart[newCart.findIndex((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors)] = updatedItem;
      // console.log(newCart.findIndex((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors))
      
      setCartItems(newCart)
    }else{
      // const item = products.find((item) => item.id === product.id)
     
      setCartItems([...cartItems, {...product, quantity: 1, images: getImageUrl(product)}])
    }
    notify(product, "Cart", "success")
  }
  const addWishlistItems = (product) => {
    const exisitInWishlistItem = wishlistItems.find((item) => item.id === product.id && item.sizes === product.sizes && item.colors === product.colors)
    if(exisitInWishlistItem===undefined) {
      setWishlistItems([...wishlistItems, {...product, displayImage: getImageUrl(product)}])
      notify(product, "Wishlist", "success")
    }else{
      notify(product, "is already in your wishlist", "error")
    }
   
  }

const getSubTotal = () => {
    let subtotal = 0;
    cartItems.map((item) => {
        return subtotal = subtotal + (item.price * item.quantity);
    });
    return subtotal;
}
const getTotal = () => {
  return pricing.subtotal + (pricing.subtotal* (pricing.tax/100)) - (pricing.subtotal* (pricing.discount/100)) + pricing.shipping;
}
pricing =  {...pricing, subtotal: getSubTotal()}
pricing = {...pricing, total: getTotal()}

  return (
    <div className="App">
      <Router>
        {/* {console.log(sortProducts(["price", "asc"]))} */}
        <ToastContainer></ToastContainer>
        <Banner 
          categoryList={categoryList}
          cartItems={cartItems}
          wishlist={wishlistItems}
          pricing={pricing}
          setCartItems={setCartItems}
          addCartItems={addCartItems}
          setWishlistItems={setWishlistItems}
          />
          
        
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
                        addWishlistItems={addWishlistItems}
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
          <Route path={"/checkout"} >
            <ProceedCheckout cartItems={cartItems} pricing={pricing}/>
          </Route>
          <Route path="/">
            <Promotional/>
          </Route>
        </Switch>
        <Footer></Footer>
        <CopyrightFooter></CopyrightFooter>
      </Router>

     {/* <ProductList items={products}></ProductList> */}
    </div>
  );
}

export default App;
