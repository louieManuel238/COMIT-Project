import React from 'react';
import { Product } from './product';

import CardDeck from 'react-bootstrap/CardDeck';

export default function ProductList({items}) {
    
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