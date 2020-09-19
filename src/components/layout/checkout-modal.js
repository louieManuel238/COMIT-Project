import React from 'react';

import CartItems from './cart-items'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function CheckoutModal(props) {

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
                <Container>
                    <ListGroup  variant="flush">
                        {props.items.map( (item) => 
                            <ListGroup.Item>
                                <CartItems item={item}/>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary">Proceed To Checkout</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default CheckoutModal;