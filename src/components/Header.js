import React from 'react';
import {Container, Navbar, Nav } from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'} collapseOnSelect>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>New</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'ml-auto'}>
                            <LinkContainer to={'/login'}>
                                <Nav.Link>
                                    Log In
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/signup'}>
                                <Nav.Link>
                                    Sign Up
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;