import React from 'react';

import Logo from './logo';

import NavBar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { GiShoppingCart } from 'react-icons/gi';
import {BiHeart} from 'react-icons/bi';
import {RiAccountCircleLine} from 'react-icons/ri';
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';

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
            <NavBar bg="light" expand="lg">
                <Nav className="mr-auto justify-content-center" style={{width: '100%'}}>
                    <NavDropdown title="Men">
                        <Container>
                            <div>
                                <NavItem>
                                    <NavLink>Features</NavLink>
                                    <Dropdown.Divider/>
                                    <NavDropdown.Item>New Arival</NavDropdown.Item>
                                    <NavDropdown.Item>Sale</NavDropdown.Item>
                                    <NavDropdown.Item>Seasonal</NavDropdown.Item>
                                </NavItem>
                            </div>
                            <div>
                                <NavItem>
                                    <NavDropdown.Item href="#action/3.1">Jeans</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Tees</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Hoodie</NavDropdown.Item>
                                </NavItem>
                            </div>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Women">
                        <Container>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Kids">
                        <Container>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Accessories">
                        <Container>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </Container>
                    </NavDropdown>
                    <NavDropdown title="Clearance">
                        <Container>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </Container>
                    </NavDropdown>
                </Nav>
            </NavBar>
        </div>
    );
}


export  {OperationsNavigation, ProductNavigation};