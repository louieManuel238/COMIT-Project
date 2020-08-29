import React from 'react';


import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export const Product = ({product}) => {

    return(
        <div className="product">
            
            
                <Card border="primary" style={{ flex: '1', width: '30em', height: '20em'}}>
                    <Carousel>
                        <Carousel.Item>
                            <Card.Img variant="top" src="holder.js/100px180" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="holder.js/100px180" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="holder.js/100px180" />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Card.Link variant="primary" href="#">Add to cart</Card.Link>
                            <Card.Link variant="primary" href="#">Add to wishlist</Card.Link>
                        </Card.Footer>
                </Card>
        </div>


        
    );
}