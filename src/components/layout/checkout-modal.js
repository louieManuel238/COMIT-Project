import React from 'react';

import CartItems from './cart-items'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                    <Row>
                        <Col xs={12} md={8}>
                            <ListGroup  variant="flush">
                                {props.items.map( (item) => 
                                    <ListGroup.Item>
                                        <CartItems item={item}/>
                                    </ListGroup.Item>
                                )}
                            </ListGroup>
                        </Col>
                        <Col xs={6} md={4}>
                        .col-xs-6 .col-md-4
                        </Col>
                    </Row>
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