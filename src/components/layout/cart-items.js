import React from 'react';

function CartItems({item}) {
    return (
        <div>
            <div>
                {item.name} 
                {item.sizes} 
                {item.colors} 
                {item.quantity} 
                
            </div>
            <div>
                {item.price}
            </div>
        </div>
    );
}

export default CartItems;

