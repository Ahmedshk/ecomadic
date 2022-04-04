import React, {useState} from 'react';
import {Row, Col} from "react-bootstrap";
import CalenderModal from "../../Components/Modal/Modal";
import "./Calender.css";

const Calender = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const modal = (
        <CalenderModal size='sm' modalTitle={"Filters"} show={show} handleClose={() => setShow(false)}>
            <div className={'calender_modal'}>
                <div className={'mb-4'}>
                    <h5>Trip Status</h5>
                    <Row>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Pending</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Confirm</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Declined</label>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={'mb-4'}>
                    <h5>Trip Stage</h5>
                    <Row>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Upcoming</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">On trip</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Check-in</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Check-out</label>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={'mb-4'}>
                    <h5>Listings</h5>
                    <Row>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Private room</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Shared room</label>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className={'mb-4'}>
                    <h5>Offerings</h5>
                    <Row>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Local food tour</label>
                            </div>
                        </Col>
                        <Col md={6} className={'mt-2'}>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="check1" name="option1"
                                       value="something" />
                                <label className="form-check-label">Scuba diving</label>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="filter_apply">
                    <button className={'unfilled_color'}>Clear</button>
                    <button className={'filled_color'}>APPLY</button>
                </div>
            </div>
        </CalenderModal>
    )

    const modal2 = (
        <CalenderModal size='sm' modalTitle={"Import a new calendar"} show={show2} handleClose={() => setShow2(false)}>
           <p>Import other calendars you use and we’ll automatically
               keep this listing’s availability up-to-date.</p>

            <form>
                <div className="data">
                    <label>Calendar address (URL)</label>
                    <input type="text" required />
                </div>
                <div className="data">
                    <label>Name your calendar</label>
                    <input type="text" required />
                </div>

                <div>
                    <button className={'filled_color'}>Import calendar</button>
                </div>
            </form>
            <hr />

            <div className={'calender_address'}>
                <p>How to find the calendar address</p>
                <ul>
                    <li>Google Calendar</li>
                    <li>iCloud</li>
                    <li>Airbnb</li>
                    <li>VRBO</li>
                </ul>
            </div>
        </CalenderModal>
    )

    return (
        <div>
            {modal}
            {modal2}

            <button onClick={() => setShow(true)}>filter</button>
            <button onClick={() => setShow2(true)}>import calender</button>
        </div>
    );
};

export default Calender;
