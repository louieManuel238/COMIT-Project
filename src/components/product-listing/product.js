import React from 'react';
 import blue from '../../images/products/tshirt/blue-t-shirt.jpg';


import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export const Product = ({product}) => {
    return(
        <div className="product">
            
                <Card border="primary" style={{ flex: '1', width: '30em', height: '20em'}}>
                    <Carousel>
                        {
                            product.images.map((url, index) => (
                             (<Carousel.Item key={index}>
                                    <Card.Img variant="top" src={url} />
                                    {/* {console.log(url)} */}
                                </Carousel.Item>)
                            ))
                            
                        } 
                    </Carousel>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {product.sizes.map((size, index) => {return (
                                <span>
                                    <label for={size}> {size} </label>
                                    <input key={index} type="radio" name="size" value={size}/>
                                </span>
                            )})}
                        </Card.Text>
                        <Card.Text>
                            {product.colors.map((color, index) => {return (
                                <span>
                                    <label for={color}> {color} </label>
                                    <input key={index} type="radio" name="color" value={color}/>
                                </span>
                            )})}
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