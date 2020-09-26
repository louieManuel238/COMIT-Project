import React, {useState} from 'react';
import AcountsModal from '../system/accouts-modal';

import CheckoutModal from './checkout-modal';
import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList, cartItems, removeCartitems, pricing}) {
    // console.log(categoryList[0].kids)
    const [showCheckoutModal, setCheckoutModal] = useState(false);
    const [showAccountModal, setAccountModal] = useState(false);

    const handleCheckoutModalClose = () => setCheckoutModal(false);
    const handleCheckoutModalShow = () => setCheckoutModal(true);

    const handleAccountModalClose = () => setAccountModal(false);
    const handleAccountModalShow = () => setAccountModal(true);


    return (
        <div>
            
            <OperationsNavigation 
                handleShowCheckout={handleCheckoutModalShow}
                handleShowAccount={handleAccountModalShow}
            />
            <ProductNavigation 
                generalCategory={categoryList} 
            ></ProductNavigation>

            <CheckoutModal 
                handleShow={handleCheckoutModalShow}
                handleClose={handleCheckoutModalClose}
                show={showCheckoutModal}
                items={cartItems}
                delete={removeCartitems}
                pricing={pricing}
            />
            <AcountsModal
                handleShow={handleAccountModalShow}
                handleClose={handleAccountModalClose}
                show={showAccountModal}
            />
        </div>
    );
}

export default Banner