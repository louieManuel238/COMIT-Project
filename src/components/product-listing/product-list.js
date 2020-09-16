import React from 'react';
import { Product } from './product';
import {orderBy} from 'lodash';

import CardDeck from 'react-bootstrap/CardDeck';

export default function ProductList(props) {
   // const sortedItems = sortProducts(items, ["price"], ["desc"])

//    const sortProducts = (sortCriteria) => {
//         props.items = orderBy(props.items, sortCriteria[0], sortCriteria[1]);
//     }

//     sortProducts(["price","asc"])
    return(
        
        <div>
            
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                {props.items.map((item) => (
                    <div key={item.id}> <Product product={item} key={item.id} addToCart={props.addToCart}/> </div>
                ))}
            </CardDeck>
        </div>
        
    );
}