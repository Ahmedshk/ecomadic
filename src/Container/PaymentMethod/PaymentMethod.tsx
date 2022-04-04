import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BsArrowLeft} from "react-icons/bs";
import "./PaymentMethod.css";

const PaymentMethod = () => {
    return (
        <React.Fragment>
            <div className={'reservation_head'}>
                <Container fluid>
                    <Row>
                        <Col md={5} className={'go_back'}>
                            <h5><BsArrowLeft /> Go back </h5>
                        </Col>
                        <Col md={7}>
                            <h2>New Reservation</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Row>
                    <Col md={9} className={'client_info'}>
                        <div>
                            <h2>Payment Method</h2>
                        </div>
                    </Col>
                    <Col md={3}>

                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default PaymentMethod;
