import React from 'react';


import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList}) {
    // console.log(categoryList[0].kids)
    return (
        <div>
            
            <OperationsNavigation></OperationsNavigation>
            <ProductNavigation generalCategory={categoryList} ></ProductNavigation>
        </div>
    );
}

export default Banner