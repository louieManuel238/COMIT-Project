import React from 'react';

import promo2 from '../../images/promo2.jpg'
function Promotional() {
    return (
        <div className="promotional-content">
            <figure  style={{width: '100%', height: '90vh', overflow: 'hidden', margin: 0, position:'relative'}}>
                <img src={promo2} alt='promo2' style={{width: '100%', height: 'auto', display: 'block'}}/>
                <div>
                    <h1>Super Sale</h1>
                    <h2>Up to 40%</h2>
                    <button>SHOP NOW</button>
                </div>
                
            </figure>

        </div>
    );
}

export default Promotional;