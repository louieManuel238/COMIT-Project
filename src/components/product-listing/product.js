import React from 'react';

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import {RiAddCircleLine} from 'react-icons/ri';

export const Product = ({product,handleClick}) => {
    return(
        <div className="product">
            
                <Card border="primary" style={{ flex: '1', width: '30em', height:'580px', position: 'relative'}}>


                    <Card.Body>
                    <Carousel interval={null}>
                        {
                            product.images.map((image, index) => (
                             (<Carousel.Item key={index}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + image.url} key={index} />
                                    {/* {console.log(url)} */}
                                </Carousel.Item>)
                            ))
                            
                        } 
                    </Carousel>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Card.Text>
                            {product.sizes.map((size, index) => {return (
                                <span>
                                    <label>{size} 
                                        <input key={index} type="radio" name="size" value={size}/>
                                    </label>
                                </span>
                            )})}
                        </Card.Text>
                        <Card.Text>
                            {product.colors.map((color, index) => {return (
                                <span  key={index}>
                                    <label> {color}
                                    <input type="radio" name="color" value={color}/>
                                    </label>
                                </span>
                            )})}
                        </Card.Text>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Card.Link variant="primary" href="#" onClick={()=>handleClick(product.id)}><RiAddCircleLine size={30}/></Card.Link>
                            <Card.Link variant="primary" href="#">Add to wishlist</Card.Link>
                        </Card.Footer>
                </Card>
        </div>


        
    );
}