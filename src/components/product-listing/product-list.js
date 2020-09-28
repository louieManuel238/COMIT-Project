import React, {useState, useEffect} from 'react';
import { Product } from './product';
import {Sort} from './sort';
import {orderBy} from 'lodash';

import CardDeck from 'react-bootstrap/CardDeck';
import { Container } from 'react-bootstrap';

export default function ProductList(props) {
   // const sortedItems = sortProducts(items, ["price"], ["desc"])

    const [sortedProducts, setSortedProducts] = useState(props.items);
    
 
   const sortProducts = (event) => {
       const sortCriteria =  event.target.value.split(',');
       setSortedProducts(orderBy(props.items, sortCriteria[0], sortCriteria[1]))
    }
    
    useEffect(() => {
        setSortedProducts(props.items);
    },[props.items])

    return(
        
        <div>
            <Container>
                <Sort sort={sortProducts}/>
            </Container>
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                {sortedProducts.map((item) => (
                    <div key={item.id}> 
                        <Product 
                            product={item} 
                            key={item.id} 
                            addToCart={props.addToCart}
                            addToWishlist={props.addWishlistItems}/>
                    </div>
                ))}
            </CardDeck>
        </div>
        
    );
}