import React, {useState} from 'react';

import CheckoutModal from './checkout-modal';
import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList, cartItems, removeCartitems}) {
    // console.log(categoryList[0].kids)
    const [showCheckoutModal, setCheckoutModal] = useState(false);

    const handleCheckoutModalClose = () => setCheckoutModal(false);
    const handleCheckoutModalShow = () => setCheckoutModal(true);


    return (
        <div>
            
            <OperationsNavigation handleShow={handleCheckoutModalShow}></OperationsNavigation>
            <ProductNavigation 
                generalCategory={categoryList} 
            ></ProductNavigation>

            <CheckoutModal 
                handleShow={handleCheckoutModalShow}
                handleClose={handleCheckoutModalClose}
                show={showCheckoutModal}
                items={cartItems}
                delete={removeCartitems}
            />
        </div>
    );
}

export default Banner