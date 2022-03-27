import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {FormContainer} from "../components";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()
        console.log({
            email, password
        })
    }


    return (
        <FormContainer>
            <h1>LOGIN</h1>
            <br />
            <Form onSubmit={loginHandler}>
                <Form.Group controlId={'email'}>
                    <Form.Label>Email Adderss</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Enter email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group controlId={'password'}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Enter Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>
                    Log In
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Login;