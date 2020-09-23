import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import {RiAddCircleLine} from 'react-icons/ri';
import {ImCheckmark} from 'react-icons/im';
import {ImHeart} from 'react-icons/im'

export const Product = ({product,addToCart}) => {
    
    const [colorSelected, setColorSelected] = useState(product.colors[0])
    const [sizeSelected, setSizeSelected] = useState(product.sizes[0])


    return(
        <div className="product">
            
                <Card border="primary">


                    <Card.Body>
                    <Carousel interval={null} >
                        {
                            product.images.map((image, index) => (
                             (<Carousel.Item key={index}>
                                    <Card.Img variant="top" src={process.env.PUBLIC_URL + image.url} key={index}  />
                                    {/* {console.log(url)} */}
                                </Carousel.Item>)
                            ))
                            
                        } 
                    </Carousel>
                    <Card.Title>{product.name}<span style={{float: 'right'}}>${product.price}</span></Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <div className="size-radios">
                            {product.sizes.map((size, index) => {return (
                                <div key={index}>
                                    <input key={index} type="radio" id={size+product.id} name={product.id +"size"} value={size} 
                                            onChange={()=>setSizeSelected(size)}
                                            defaultChecked={index === 0}/>
                                    <label htmlFor={size+product.id}>
                                        <span>
                                            <strong>{size}</strong>
                                        </span>
                                    </label>
                                </div>
                            )})}
                        </div>
                        <div className="color-radios">
                            {product.colors.map((color, index) => {return (
                                <div  key={index}>
                                    <input type="radio" id={color+product.id} name={product.id+"color"} value={color} 
                                        onChange={()=>setColorSelected(color)}
                                        defaultChecked={index === 0}
                                     />
                                     <label htmlFor={color+product.id} >
                                        <span style={{backgroundColor: color}}>
                                            <ImCheckmark size={20}/>
                                        </span>
                                    </label>
                                    
                                </div>
                            )})}
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="dark"onClick={()=>addToCart({...product,colors: colorSelected, sizes: sizeSelected})}>
                            <RiAddCircleLine size={30}/>
                            <small>Add to Cart</small>
                        </Button>
                        <Button variant="dark" >
                            <ImHeart size={30}/>
                            <small>Add to Wishlist</small>
                        </Button>
                    </Card.Footer>
                </Card>
        </div>


        
    );
}