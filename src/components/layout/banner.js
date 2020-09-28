import React, {useState} from 'react';

import AcountsModal from '../system/accouts-modal';
import Wishlist from './wishlist';
import CheckoutModal from './checkout-modal';
import {OperationsNavigation, ProductNavigation} from './navigation';

function Banner({categoryList, cartItems, pricing, setCartItems, wishlist, setWishlistItems, addCartItems}) {
    // console.log(categoryList[0].kids)
    const [showCheckoutModal, setCheckoutModal] = useState(false);
    const [showAccountModal, setAccountModal] = useState(false);
    const [showWishlistModal, setWishlistModal] = useState(false);

    const handleWishlistModalClose = () => setWishlistModal(false);
    const handleWishlistModalShow = () => setWishlistModal(true);

    const handleCheckoutModalClose = () => setCheckoutModal(false);
    const handleCheckoutModalShow = () => setCheckoutModal(true);

    const handleAccountModalClose = () => setAccountModal(false);
    const handleAccountModalShow = () => setAccountModal(true);

    const removeCartitems = (item) => {
        return setCartItems(cartItems.filter(i => i!==item))
    }
    const removeWishlistitems = (item) => {
        return setWishlistItems(wishlist.filter(i => i!==item))
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
                handleShowWishlist={handleWishlistModalShow}
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
            <Wishlist
                handleShow={handleWishlistModalShow}
                handleClose={handleWishlistModalClose}
                show={showWishlistModal}
                wishlist={wishlist}
                delete={removeWishlistitems}
                add={addCartItems}
            />
        </div>
    );
}

export default Banner