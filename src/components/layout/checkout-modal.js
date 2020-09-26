import React from 'react';

import CartItems from './cart-items'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';



function CheckoutModal(props) {
    
   
    const clickProceedToCheckout = () =>{
        props.handleClose(); 
    }
    return (
        <div>
        <Modal
            show={props.show}
            onHide={props.handleClose}
            dialogClassName="modal-90w"
        >
            <Modal.Header closeButton>
            <Modal.Title>Order Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className="itemList-Cart">
                    <ListGroup  variant="flush">
                        {props.items.map( (item) => 
                            <ListGroup.Item>
                                <CartItems item={item} handleChangeQuantity={props.handleChangeQuantity}/> 
                                <span style={{float: 'right'}}>
                                    <Button variant="dark" onClick={()=> props.delete(item)}>Remove</Button>
                                </span>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>
                <Container className="itemPrice-Cart">
                    <hr/>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span>Subtotal: <strong>${props.pricing.subtotal}</strong></span></ListGroup.Item>
                        <ListGroup.Item><span>Tax: <strong>{props.pricing.tax}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Shipping: <strong>{props.pricing.shipping}</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Discount: <strong>{props.pricing.discount}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Coupon : <strong>{props.pricing.coupon}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item  active variant="light"><span>Total : {props.pricing.total}<strong>$ </strong></span> </ListGroup.Item>
                        
                    </ListGroup>
                </Container>    
            </Modal.Body>
            <Modal.Footer>
            <LinkContainer to={"/checkout"}>
                <Button variant="dark" className="checkoutButton" onClick={clickProceedToCheckout}>Proceed To Checkout</Button>
            </LinkContainer>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default CheckoutModal;