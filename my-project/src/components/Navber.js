import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Container, Nav, FormControl, Form, Button } from 'react-bootstrap'
import Contact from './Contact';
import Home from './Home';
import logo from "../logo.png";




const Navber = () => {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container >
                        <Navbar.Brand href="#"><img src={logo} className="logo" alt="logo.." /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav className="me-auto my-2 my-lg-0" >

                                <Nav.Link as={Link} to={'/'}>HOME</Nav.Link>
                                <Nav.Link as={Link} to={'/contact'}>CONTACT US</Nav.Link>
                                <Nav.Link as={Link} to={'/contact'}>PORTFOLIO</Nav.Link>
                                <Nav.Link as={Link} to={'/'}>ABOUT ME</Nav.Link>
                            </Nav>

                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navber
