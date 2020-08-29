import React from 'react';


import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner(props) {

    return (
        <div>
            
            <OperationsNavigation></OperationsNavigation>
            <ProductNavigation></ProductNavigation>
        </div>
    );
}

export default Banner