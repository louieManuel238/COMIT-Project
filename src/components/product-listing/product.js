import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import {RiAddCircleLine} from 'react-icons/ri';

export const Product = ({product,addToCart}) => {
    
    const [colorSelected, setColorSelected] = useState(product.colors[0])
    const [sizeSelected, setSizeSelected] = useState(product.sizes[0])


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
                                    <label>
                                        {size} 
                                        <input key={index} type="radio" name={product.id +"size"} value={size} 
                                            onChange={()=>setSizeSelected(size)}
                                            defaultChecked={index === 0}/>
                                    </label>
                                </span>
                            )})}
                        </Card.Text>
                        <Card.Text>
                            {product.colors.map((color, index) => {return (
                                <span  key={index}>
                                    <label> {color}
                                    <input type="radio" name={product.id+"color"} value={color} 
                                        onChange={()=>setColorSelected(color)}
                                        defaultChecked={index === 0}
                                     />
                                    </label>
                                </span>
                            )})}
                        </Card.Text>
                        <Card.Text>
                            {product.price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                            <Card.Link variant="primary" href="#" onClick={()=>addToCart({...product,colors: colorSelected, sizes: sizeSelected})}><RiAddCircleLine size={30}/></Card.Link>
                            <Card.Link variant="primary" href="#">Add to wishlist</Card.Link>
                        </Card.Footer>
                </Card>
        </div>


        
    );
}