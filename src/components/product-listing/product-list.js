import React from 'react';
import { Product } from './product';
import {Sort} from './sort';
import {orderBy} from 'lodash';

import CardDeck from 'react-bootstrap/CardDeck';
import { Container } from 'react-bootstrap';

export default function ProductList(props) {
   // const sortedItems = sortProducts(items, ["price"], ["desc"])

   const sortProducts = (event) => {
       const sortCriteria = event.target.value.split(',')
        props.sort(orderBy(props.items, sortCriteria[0], sortCriteria[1]));

    }

    return(
        
        <div>
            <Container>
                <Sort sort={sortProducts}/>
            </Container>
            <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                {props.items.map((item) => (
                    <div key={item.id}> <Product product={item} key={item.id} addToCart={props.addToCart}/> </div>
                ))}
            </CardDeck>
        </div>
        
    );
}