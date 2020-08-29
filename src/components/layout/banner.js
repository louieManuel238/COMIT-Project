import React from 'react';


import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList}) {
    console.log(categoryList[0].kids)
    return (
        <div>
            
            <OperationsNavigation></OperationsNavigation>
            <ProductNavigation generalCategory={categoryList[0]} ></ProductNavigation>
        </div>
    );
}

export default Banner