import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import { LinkContainer } from 'react-router-bootstrap';

function Wishlist(props) {

    console.log(props.wishlist)
    return (
        <div>
            <Modal
            show={props.show}
            onHide={props.handleClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header closeButton>
            <Modal.Title>Wishlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="itemList-Cart">
                    <ListGroup  variant="flush">
                        {props.wishlist.map( (item) => 
                            <ListGroup.Item>
                                {/* <CartItems item={item} handleChangeQuantity={props.handleChangeQuantity}/>  change to wishlist items*/} 
                                <div style={{display: 'flex'}}>
                                    <div style={{flex: '1'}}>
                                        <span>
                                            <img src={process.env.PUBLIC_URL + item.displayImage.url} alt={item.colors} style={{objectFit: 'cover',width: "100px", height: "100px"}}/>
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
                                    </div>
                                </div>
                                <span style={{float: 'left'}}>
                                    <Button variant="dark" onClick={()=> props.add(item)}>Add To Cart</Button>
                                </span>
                                <span style={{float: 'right'}}>
                                    <Button variant="dark" onClick={()=> props.delete(item)}>Remove</Button>
                                </span>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>   
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default Wishlist;