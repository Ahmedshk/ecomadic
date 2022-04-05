import React from 'react';
import {Col, Container, Row, Form} from "react-bootstrap";
// @ts-ignore
import purchase from "../../images/purchase_1.png";
// @ts-ignore
import purchase1 from "../../images/purchase_2.png";
// @ts-ignore
import security from "../../images/security.png";
import {BsArrowLeft} from "react-icons/bs";
import {AiOutlineCalendar} from "react-icons/ai";
import {MdOutlinePeople} from "react-icons/md";
import {FaCcVisa, FaCcPaypal} from "react-icons/fa";
import {RiMastercardFill} from "react-icons/ri";
import {GrAmex} from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import "./PaymentMethod.css";

const PaymentMethod = () => {
    const navigate = useNavigate();
    const [cardSelect, setCardSelect] = React.useState('credit');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCardSelect(event.target.value)
    }

    let cardDetails;
    if(cardSelect === 'credit'){
        cardDetails = (
            <form>
                <Container fluid className={'mt-3'}>
                    <Row>
                        <Col md={12}>
                            <div className="data">
                                <label>Cardholder Name</label>
                                <input type="text" required />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="data">
                                <label>Card Number</label>
                                <input type="text" required placeholder={'1234 1234 1234 1234'}/>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="data">
                                <label>Expiration date</label>
                                <input type="text" required placeholder={'MM/YY'}/>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="data">
                                <label>Security code</label>
                                <input type="text" required placeholder={'CVC'}/>
                            </div>
                        </Col>
                        <Col md={2}>
                            <img src={security} alt="Security" />
                        </Col>
                        <Col md={6}>
                            <div className="data">
                                <label>Postal code</label>
                                <input type="text" required />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="data">
                                <label>Country</label>
                                <select name="cars" id="cars">
                                    <option  hidden value="">Select Country</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </Col>
                        <Col md={12} className={'mt-3'}>
                            <div className="d-flex justify-content-around">
                                <button className={'unfilled_color'} onClick={() => navigate('/create-reservation')}>Back</button>
                                <button className={'filled_color'} onClick={() => navigate('/reservation')}>Confirm</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
    else{
        cardDetails = null;
    }

    return (
        <React.Fragment>
            <div className={'reservation_head'}>
                <Container fluid>
                    <Row>
                        <Col md={5} className={'go_back'}>
                            <h5 onClick={() => navigate('/create-reservation')}><BsArrowLeft /> Go back </h5>
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

                            <div className={'credit_card'}>
                                <div className={'d-flex justify-content-between'}>
                                    <div key={`default-radio`}>
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio1`}
                                            name={'credit'}
                                            value="credit"
                                            checked={cardSelect === 'credit'}
                                            onChange={handleChange}
                                            label={`Credit or Debit card`}
                                        />
                                    </div>
                                    <div className={'credit_card_svg'}>
                                        <FaCcVisa />
                                        <RiMastercardFill />
                                        <GrAmex />
                                    </div>
                                </div>
                                { cardDetails }
                            </div>
                            <div className={'credit_card'}>
                                <div className={'d-flex justify-content-between'}>
                                    <div key={`default-radio`}>
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio2`}
                                            name={'payPal'}
                                            value={'payPal'}
                                            checked={cardSelect === 'payPal'}
                                            onChange={handleChange}
                                            label={`PayPal`}
                                        />
                                    </div>
                                    <div className={'credit_card_svg'}>
                                        <FaCcPaypal />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col md={3} className={'purchase_details'}>
                        <h3>Purchase Details</h3>

                        <div>
                            <Row>
                                <Col md={5} className={'pr-0'}>
                                    <p style={{fontSize: '14px', fontWeight: '700'}} className={'m-0'}>Stunning Green Hotel with a Majestic View</p>
                                    <p className={'text-muted'} style={{fontSize: '11px'}}>Shared room in Bali</p>
                                </Col>
                                <Col md={6} className={'p-0 purchase_img'}>
                                    <img src={purchase} alt={'purchase'}/>
                                </Col>
                            </Row>
                            <Row className={'mt-2'}>
                                <Col md={5} className={'pr-0 d-flex align-items-center'}>
                                    <p style={{fontSize: '14px', fontWeight: '700'}} className={'m-0'}>Local Food Tour</p>
                                </Col>
                                <Col md={6} className={'p-0 purchase_img'}>
                                    <img src={purchase1} alt={'purchase'}/>
                                </Col>
                            </Row>
                        </div>
                        <hr />

                        <div className={'calender_time'}>
                           <p><AiOutlineCalendar /> Feb 6, 2022 – Feb 7, 2022</p>
                        </div>

                        <div className={'calender_time'}>
                            <p><MdOutlinePeople /> 1 Adult</p>
                        </div>
                        <hr />

                        <div>
                            <Container>
                                <p>Payment</p>
                            <div className={'d-flex justify-content-between'}>
                                <p>$150.00 x 1 night</p>
                                <p>$150.00</p>
                            </div>
                            <div className={'d-flex justify-content-between'}>
                                <p>Local food tour</p>
                                <p>$110.90</p>
                            </div>
                                <div className={'d-flex justify-content-between'}>
                                    <p>Cleaning fees</p>
                                    <p>$50.00</p>
                                </div>
                                <div className={'d-flex justify-content-between'}>
                                    <p>Ecomadic fees</p>
                                    <p>$16.00</p>
                                </div>
                                <div className={'d-flex justify-content-between'}>
                                    <p>Total</p>
                                    <p>$326.90</p>
                                </div>

                            </Container>
                        </div>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default PaymentMethod;
