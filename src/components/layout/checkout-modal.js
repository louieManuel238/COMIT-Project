import React from 'react';

import CartItems from './cart-items'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';



function CheckoutModal(props) {
    

    const getSubTotal = () => {
        let subtotal = 0;
        props.items.map((item) => {
              subtotal = subtotal + (item.price * item.quantity);
        });
        return subtotal;
    }
    const getTotalPrice = (pricing) => {
        return (pricing.subtotal + (pricing.subtotal* (pricing.tax/100)) - (pricing.subtotal* (pricing.discount/100)) + pricing.shipping)
    }
    const pricing = {
        subtotal: getSubTotal(),
        tax: 5,
        shipping: 0,
        discount: 0,
        coupon: 0 
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
                                <CartItems item={item}/> 
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
                        <ListGroup.Item><span>Subtotal: <strong>${pricing.subtotal}</strong></span></ListGroup.Item>
                        <ListGroup.Item><span>Tax: <strong>{pricing.tax}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Shipping: <strong>{pricing.shipping}</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Discount: <strong>{pricing.discount}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item><span>Coupon : <strong>{pricing.coupon}%</strong></span> </ListGroup.Item>
                        <ListGroup.Item  active variant="light"><span>Total : <strong>$ {getTotalPrice(pricing)}</strong></span> </ListGroup.Item>
                        
                    </ListGroup>
                </Container>    
            </Modal.Body>
            <Modal.Footer>
            <LinkContainer to={"/checkout"}>
                <Button variant="dark" className="checkoutButton" onClick={props.handleClose    }>Proceed To Checkout</Button>
            </LinkContainer>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default CheckoutModal;