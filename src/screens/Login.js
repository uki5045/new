import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {FormContainer} from "../components";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()

        const userInput = {
            email,
            password
        }

        try {
            const {data, status} = await axios.post('http://localhost:8000/api/users/login', userInput)
            if (status === 200) {
                navigate('/mypage')
            }
        } catch (err) {
            console.log(err)
        }
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