import React, {useEffect, useState} from 'react';
import {FormContainer} from "../components";
import {Form, Button} from "react-bootstrap";
import axios from "axios";

const Mypage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const getProfile = async () => {
        try {

            const token = localStorage.getItem('token')

            const config = {
                headers: {
                    "Authorization" : "Bearer " + token
                }
            }

            const {data, status} = await axios.get('http://localhost:8000/api/users/profile', config)
            if (status === 200) {
                setName(data.name)
                setEmail(data.email)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const profileUpdateHandler = async (e) => {
        e.preventDefault()

        try {
            const userinput = {
                name, email, password
            }

            const token = localStorage.getItem("token")

            const config = {
                headers: {
                    "Authorization" : "Bearer "+ token
                }
            }

            const {data, status} = await axios.put('http://localhost:8000/api/users/profile', userinput, config)
            if (status === 200) {
                alert('완료')
            }
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getProfile()
    }, [])


    return (
        <FormContainer>
            <h1>Welcome to {name}</h1>
            <br />
            <Form onSubmit={profileUpdateHandler}>
                <Form.Group>
                    <Form.Label>
                        User name
                    </Form.Label>
                    <Form.Control
                        type={'name'}
                        placeholder={'username'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control
                        type={'email'}
                        placeholder={'Email'}
                        value={email}
                        disabled
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group>
                    <Form.Label>
                       Password
                    </Form.Label>
                    <Form.Control
                        type={'password'}
                        placeholder={'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Button type={'submit'} variant={'primary'} className={'btn-block'}>
                    Update
                </Button>
            </Form>
        </FormContainer>
    );
};

export default Mypage;