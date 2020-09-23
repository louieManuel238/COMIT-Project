import React from 'react';

function CartItems({item}) {
    return (
        <div style={{display: 'flex'}}>
            <div style={{flex: '1'}}>
                <span>
                    <img src={process.env.PUBLIC_URL + item.images.url} alt={item.colors} style={{objectFit: 'cover',width: "100px", height: "100px"}}/>
                </span>
                
                
            </div>
            <div style={{flex: '2'}}>
                <strong>{item.name}</strong><br/>
                size: {item.sizes}  <br/>
                color: <div className="color-radios">
                        <input type="radio" id={item.name + item.colors} name={item.id+"color"} value={item.colors} />
                                     <label htmlFor={item.name + item.colors} >
                                        <span style={{backgroundColor: item.colors}}>
                                        </span>
                                    </label>
                        </div><br/>
                <strong>${item.price} x {item.quantity}</strong><br/>
            </div>
        </div>
    );
}

export default CartItems;

