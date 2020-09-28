import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AcountsModal(props) {
    function Login(){
        return(
            <div>
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
                        <Button variant="dark" type="submit">Login</Button>
                    </Form.Group>
                    <Form.Group controlId="formBasicSignUp">
                        <Form.Text className="text-muted">
                            Don't Have an Account? <a href="#" onClick={()=>{setDisplayForm(<SignIn/>)}}>Sign Up</a> Now
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
    function SignIn(){
        return(
            <div>
                <Form>
                <Form.Group controlId="formFName">
                        <Form.Label>
                            First Name:
                        </Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="formLName">
                        <Form.Label>
                            Last Name:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="formLName">
                        <Form.Label>
                            Address:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Address" />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail2">
                        <Form.Label>
                            Re-type Email:
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPass">
                        <Form.Label>
                            Password:
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPass2">
                        <Form.Label>
                            Re-type Password:
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
    
                    <Form.Group controlId="formBasicSubmit">
                        <Button variant="dark" type="submit">Register</Button>
                    </Form.Group>
                    <Form.Group controlId="formBasicSignUp">
                        <Form.Text className="text-muted">
                            Already have an account?  <a href="#a" onClick={()=>{setDisplayForm(<Login/>)}}>Login</a> Now
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        );
    }
    
    const [displayForm, setDisplayForm] = useState(<Login/>);
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
                 {displayForm}
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>

        </Modal>
        </div>
    );
}


export default AcountsModal;