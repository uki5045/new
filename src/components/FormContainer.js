import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const FormContainer = ({children}) => {
    return (
        <Container>
            <Row className={'justify-content-md-center mt-3'}>
                {/*md-center은 가운데 정렬*/}
                {/*xs는 전체화면을 12개로 나누고, 6개(절반만 쓰겠다)*/}
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;