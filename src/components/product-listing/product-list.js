import React, {useState} from 'react';
import { Product } from './product';
import {orderBy} from 'lodash';

import CardDeck from 'react-bootstrap/CardDeck';
import { fromPairs } from 'lodash';

export default function ProductList({items}) {
   // const sortedItems = sortProducts(items, ["price"], ["desc"])
   const [productItems, setItems] = useState(items);
    
   const sortProducts = (sortCriteria) => {
         const sortedItems = orderBy(productItems, [sortCriteria[0]], [sortCriteria[1]]);
         return setItems(sortedItems);
    }
    console.log(productItems)
    return(
        
        <div>
            
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                {productItems.map(item => (
                    <div key={item.id}> <Product product={item}/> </div>
                ))}
            </CardDeck>
        </div>
        
    );
}