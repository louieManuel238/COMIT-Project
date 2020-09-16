import React from 'react';

function CartItems({item}) {
    return (
        <div>
            <div>
                {item.images.url}
                {item.images.color}
                {item.name}
                
            </div>
            <div>
                {item.price}
            </div>
        </div>
    );
}

export default CartItems;

