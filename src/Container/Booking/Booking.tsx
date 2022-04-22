import React, {useMemo, useState} from 'react';
import {FormControl, Input, SimpleGrid} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {TiTick} from "react-icons/ti";
import ForestImg from "../../images/forest.jpg";
import Select from 'react-select'
import {Modal, ModalOverlay, ModalContent, ModalBody} from '@chakra-ui/react';
import countryList from 'react-select-country-list'
import "./Booking.css";

const Booking = () => {
    const navigate = useNavigate();

    const options = [
        { value: 'Visa', label: 'Visa' },
        { value: 'MasterCard', label: 'MasterCard' },
    ]
    const [show, setShow] = useState(false)

    const CountryOptions = useMemo(() => countryList().getData(), [])

    const modal = (
        <Modal closeOnOverlayClick={false} size={'xl'} onClose={() => setShow(false)} isOpen={show} >
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal_header'>
                        <h2>Thanks Blair!</h2>
                        <AiOutlineClose onClick={() => setShow(false)} />
                    </div>
                    <div className='modal_body'>
                        <p>Confirmation #0123456789</p>

                        <div className='confirm_div'>
                            <div className='confirm_msg'>
                                <TiTick />
                                <h5> Your booking at Chumbe Island Coral Park is confirmed.</h5>
                            </div>
                            <div className='confirm_msg'>
                                <TiTick />
                                <h5> Please check your email for confirmation.</h5>
                            </div>
                        </div>
                        <hr className='line' />

                        <div className='confirm_address'>
                            <h5>Chumbe Island Coral Park</h5>
                            <p>Chumbe Island, Zanzibar, Tanzania</p>
                        </div>
                        <br />

                        <div>
                            <div className='reserve_details'>
                                <p>Your reservation</p>
                                <p>2 nights, Double Room</p>
                            </div>
                            <div className='reserve_details'>
                                <p>Check-in</p>
                                <p>Tuesday 15 April (from 3PM)</p>
                            </div>
                            <div className='reserve_details'>
                                <p>Check-out</p>
                                <p>Friday 18 April (until 11AM)</p>
                            </div>
                            <div className='reserve_details'>
                                <p>Payment</p>
                                <p>Please allow up to 5 - 7 business day for transaction.</p>
                            </div>
                        </div>

                        <div className='phone_details'>
                            <p>Phone: (123) 456-7890</p>
                            <p>Property Email: <span className='mail_span'> Chumbeislandcoralpark@gmail.com </span></p>
                            <p onClick={() => navigate('/message')}>Contact Property</p>
                        </div>

                        <div className='location_img'>
                            <img src={ForestImg} alt='order_modal' />
                        </div>

                        <div className='print_div'>
                            <p>Print Booking</p>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <React.Fragment>
            {modal}
            <SimpleGrid columns={[1, null, 2]} gap={5}>
                <div className={'booking_left'}>
                    <div className={'req_book_head'}>
                        <BsArrowLeft />
                        <h1 onClick={() => navigate('/business-page')}> Request to Book </h1>
                    </div>

                    <div className={'trip'}>
                        <h1>Your Trip</h1>
                        <hr />

                        <div className={'trip_details'}>
                            <div className={'date_details'}>
                                <h5>Dates</h5>
                                <div className={'date'}>
                                    <p>April 15 - 18</p>
                                    <p>Edit</p>
                                </div>
                            </div>

                            <div className={'guests_details'}>
                                <h5>Guests</h5>
                                <div className={'date'}>
                                    <p>2 Guests</p>
                                    <p>Edit</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className='payment_method'>
                        <h1>Pay With</h1>

                        <div className={'card_details'}>
                            <Select options={options} placeholder={'Card Method'} />
                        </div>
                        <div className='card_options'>
                            <FormControl>
                                <Input type='text' placeholder={'Card Number'} />
                            </FormControl>

                            <div style={{display: 'flex'}}>
                                <FormControl>
                                    <Input type='text' placeholder={'Expiration'} />
                                </FormControl>
                                <FormControl>
                                    <Input type='text' placeholder={'cvv'} />
                                </FormControl>
                            </div>

                            <FormControl>
                                <Input type='text' placeholder={'Zip code'} />
                            </FormControl>
                        </div>
                        <div className={'countryList'}>
                            <Select options={CountryOptions} placeholder={'Country'} />
                        </div>
                    </div>

                    <div className='cancellation_policy'>
                        <h1>Cancellation Policy</h1>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                        <hr />

                        <p>By selecting the button below, I agree to the Property's rules and regulations and Guest Refund Policy.</p>
                    </div>

                    <div>
                        <button onClick={() => setShow(true)} className={'filled_color confirm_btn'}>Confirm and Pay</button>
                    </div>


                </div>
                <div className={'booking_right'}>

                    <div className={'room_details'}>
                        <p className={'head'}>Room Details</p>

                        <div style={{display: 'flex'}}>
                            <div className={'room_img'}>
                                <img src={ForestImg} alt={'forest'}/>
                            </div>
                            <div className={'room_details_text'}>
                                <h1>Chumbe Island Coral Park</h1>
                                <p>Eco-Bungalow</p>
                                <span>Max 2 Adults</span>
                                <br />
                                <br />
                                <div className={'room_ratings'}>
                                    <p>4.8</p>
                                    <span>(206 reviews)</span>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className={'price_details'}>
                            <p className={'head'}>Price Details</p>

                            <div className={'price_details_text'}>
                                <p>$90.00 x 3 nights</p>
                                <p>$180.00</p>
                            </div>
                            <div className={'price_details_text'}>
                                <p>Cleaning Fee</p>
                                <p>$20.44</p>
                            </div>
                            <div className={'price_details_text'}>
                                <p>Service Fees</p>
                                <p>$7.45</p>
                            </div>
                            <hr />
                            <div className={'price_details_text'}>
                                <p>Total (USD)</p>
                                <p>$207.89</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SimpleGrid>
        </React.Fragment>

    );
};

export default Booking;
