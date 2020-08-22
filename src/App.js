import React, {useState} from 'react';
import './App.css';
import ProductList from './components/product-listing/product-list';
import Banner from './components/layout/banner';

function App() {

  const items = [
    {
        id: 1,
        name: "NDR1",
        category: "Shoes",
        description: "Addidas NDR original stlye",
        price: 199,
        images: ["./product/img/shoes/1-1.jpg",
        "./product/img/shoes/1-2.jpg",
        "./product/img/shoes/1-3.jpg"]
    },
    {
        id: 2,
        name: "Prime Blue",
        category: "Shoes",
        description: "Addidas primbe blue original stlye",
        price: 199,
        images: ["./product/img/shoes/2-1.jpg",
        "./product/img/shoes/2-2.jpg",
        "./product/img/shoes/2-3.jpg"]
    }
    ]

    const [products, setProduct] = useState(items);



  return (
    <div className="App">
      <Banner></Banner>
      <ProductList items={products}></ProductList>
    </div>
  );
}

export default App;
