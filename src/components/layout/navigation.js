import React from 'react';

import Logo from './logo';

import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { GiShoppingCart } from 'react-icons/gi';
import {BiHeart} from 'react-icons/bi';
import {RiAccountCircleLine} from 'react-icons/ri';

function OperationsNavigation() {
    return (
        <div>
            <NavBar  expand="lg" style={{}}>
                <NavBar.Brand><Logo/></NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />

                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Item>
                            <Nav.Link href="#home"><RiAccountCircleLine size={30}/></Nav.Link>
                            <Nav.Link href="#home">Account  </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#home"><BiHeart size={30}/></Nav.Link>
                            <Nav.Link href="#link">Wishlist </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#home"><GiShoppingCart size={30}/></Nav.Link>
                            <Nav.Link href="#home">Checkout </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Form inline >
                                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            </Nav.Item>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>   
        </div>
    );  
}

function ProductNavigation(props) {
    return (
        <div>
            
        </div>
    );
}


export  {OperationsNavigation, ProductNavigation};