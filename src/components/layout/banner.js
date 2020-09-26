import React, {useState} from 'react';
import AcountsModal from '../system/accouts-modal';

import CheckoutModal from './checkout-modal';
import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList, cartItems, pricing, setCartItems}) {
    // console.log(categoryList[0].kids)
    const [showCheckoutModal, setCheckoutModal] = useState(false);
    const [showAccountModal, setAccountModal] = useState(false);

    const handleCheckoutModalClose = () => setCheckoutModal(false);
    const handleCheckoutModalShow = () => setCheckoutModal(true);

    const handleAccountModalClose = () => setAccountModal(false);
    const handleAccountModalShow = () => setAccountModal(true);

    const removeCartitems = (item) => {
        return setCartItems(cartItems.filter(i => i!==item))
    }

    const handleChangeQuantity = (event, setItem) => {
         setItem = {...setItem, quantity: parseInt(event.target.value,10)};
        const newCart = [...cartItems]
        newCart[newCart.findIndex((item) => item.id === setItem.id && item.sizes === setItem.sizes && item.colors === setItem.colors)] = setItem;
        setCartItems(newCart)
        console.log(newCart)
        
    }
    


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
                handleChangeQuantity={handleChangeQuantity}
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