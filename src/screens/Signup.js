import React, {useState} from 'react';
import {FormContainer} from "../components";
import {Form, Button} from "react-bootstrap";


const Signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const signupHendler = async (e) => {
        e.preventDefault()

        if (password !== cpassword) {
            alert('패스워드 맞지않음')
        }

        console.log({
            name, email, password
        })
    }


    return (
        <FormContainer>
            <h1>SIGN UP</h1>
            <Form onSubmit={signupHendler}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type={'text'}
                        placeholder={'User name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Email Adderss</Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'Confirm Password'}
                        value={cpassword}
                        onChange={e => setCpassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>Sign up</Button>
            </Form>
        </FormContainer>
    );
};

export default Signup;