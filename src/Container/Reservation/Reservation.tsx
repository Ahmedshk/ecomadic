import React from 'react';
import {Row, Col, Container, NavLink} from "react-bootstrap";
import {BsArrowLeft} from "react-icons/bs";
import "./Reservation.css";

const Reservation = () => {
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
                            <h2>Client Information</h2>
                            <form>
                                <Container fluid>
                                    <Row>
                                        <Col md={6}>
                                            <div className="data">
                                                <input type="text" required placeholder={'First Name'} />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Last Name'} />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Email'} />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Phone'} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </div>
                        <div>
                            <h2>Reservation Details</h2>
                            <form>
                                <Container fluid>
                                    <Row>
                                        <Col md={6}>
                                            <div className="data">
                                                <select name="cars" id="cars">
                                                    <option  hidden value="">listing</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="data">
                                                <select name="cars" id="cars">
                                                    <option hidden value="">Offering</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col md={6} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Booking No.'} />
                                            </div>
                                        </Col>
                                        <Col md={6} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Adults'} />
                                            </div>
                                        </Col>
                                        <Col md={4} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Services'} />
                                            </div>
                                        </Col>
                                        <Col md={4} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Duration'} />
                                            </div>
                                        </Col>
                                        <Col md={4} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Amount'} />
                                            </div>
                                        </Col>
                                        <Col md={12} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Listing/Property'} />
                                            </div>
                                        </Col>
                                        <Col md={12} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Add a Service'} />
                                            </div>
                                        </Col>
                                        <Col md={6} />
                                        <Col md={6} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Add Discount'} />
                                            </div>
                                        </Col>
                                        <Col md={6} />
                                        <Col md={6} className={'mt-3'}>
                                            <div className="data">
                                                <input type="text" required placeholder={'Total'} />
                                            </div>
                                        </Col>
                                        <Col md={12} className={'mt-3'}>
                                            <div className="d-flex justify-content-around">
                                                <button className={'unfilled_color'}>Clear</button>
                                                <button className={'filled_color'}>Payment method</button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={'mt-4'}>
                            <Row>
                                <Col md={6}>
                                    <div className={'client_notes'}>
                                        <h5>Client Notes</h5>
                                        <p>No notes for this client</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <NavLink><p>Add a note</p> </NavLink>
                                </Col>
                            </Row>
                        </div>

                        <div className={'mt-4'}>
                            <Row>
                                <Col md={6}>
                                    <div className={'client_notes'}>
                                        <h5>Cards on File</h5>
                                        <p>No cards on file</p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <NavLink><p>Add a card</p> </NavLink>
                                </Col>
                            </Row>
                        </div>

                        <div className={'mt-4'}>
                            <Row>
                                <Col md={6}>
                                    <div className={'client_notes'}>
                                        <h5>Reservation History</h5>
                                        <p>No reservation history</p>
                                    </div>
                                </Col>
                                <Col md={6} />
                            </Row>
                        </div>

                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};
export default Reservation;