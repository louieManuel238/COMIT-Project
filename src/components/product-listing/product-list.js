import React from 'react';
import { Product } from './product';

import CardDeck from 'react-bootstrap/CardDeck';

export default function ProductList() {
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
    return(
        <div>
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                {items.map(item => (
                    <div key={item.id}> <Product product={item}/> </div>
                ))}
            </CardDeck>
        </div>
        
    );
}