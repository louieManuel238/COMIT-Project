import React from 'react';
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AcountsModal(props) {
    return (
        <div>
        <Modal
        show={props.show}
        onHide={props.handleClose}
        dialogClassName="modal-90w"
        className="AccountModal"
        >
            <Modal.Header closeButton>
            <Modal.Title>ACCOUNT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>
                                Email:
                            </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPass">
                            <Form.Label>
                                Password:
                            </Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicSubmit">
                            <Button variant="light" type="submit">Submit</Button>
                        </Form.Group>
                        <Form.Group controlId="formBasicSignUp">
                            <Form.Text className="text-muted">
                                Don't Have an Account? <a>Sign Up</a> Now
                            </Form.Text>
                        </Form.Group>
                  </Form>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>

        </Modal>
        </div>
    );
}

export default AcountsModal;