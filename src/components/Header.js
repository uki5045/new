import React, {useEffect, useState} from 'react';
import {Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import axios from "axios";

const Header = () => {

    const [name, setName] = useState('')

    const getProfile = async () => {
        try {

            const token = localStorage.getItem("token")

            const config = {
                headers: {
                    "Authorization" : "Bearer " + token
                }
            }

            const {data, status} = await axios.get('http://localhost:8000/api/users/profile', config)
            if (status === 200) {
                setName(data.name)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const logoutHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")

    }

    useEffect(() => {
        getProfile()
    }, [])

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
                        {
                            name
                                ? (
                                    <NavDropdown title={name}>
                                        <LinkContainer to={'/mypage'}>
                                            <NavDropdown.Item>My page</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                )
                                : (

                                    <>
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
                                    </>
                                )
                        }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;