import React from 'react';
import { Product } from './product';

export default ProductList = () => {
    const items = [
        {
            id: 1,
            name: "NDR1",
            Category: "Shoes",
            Description: "Addidas NDR original stlye",
            Price: 199,
            images: ["./product/img/shoes/1-1.jpg",
            "./product/img/shoes/1-2.jpg",
            "./product/img/shoes/1-3.jpg"]
        },
        {
            id: 2,
            name: "Prime Blue",
            Category: "Shoes",
            Description: "Addidas primbe blue original stlye",
            Price: 199,
            images: ["./product/img/shoes/2-1.jpg",
            "./product/img/shoes/2-2.jpg",
            "./product/img/shoes/2-3.jpg"]
        }
        ]
    return(
        <div>
            {items.map(item => (
                <div key={item.id}> <Product product={item}/> </div>
            ))}
        </div>
        
    );
}