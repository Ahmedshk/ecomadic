import { Container, Col, Row, Form } from 'react-bootstrap'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
// @ts-ignore
import datePop from "../../images/date_popup.png";
// @ts-ignore
import filter from "../../images/filter.png";
import React, { useState, useCallback } from "react";
import { Calendar, dateFnsLocalizer, DateLocalizer } from "react-big-calendar";
import CalenderModal from "../../Components/Modal/Modal";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import './Calender.css';
import ReservationModal from '../../Components/Modal/Modal'
import SmallCalendar from 'react-calendar';
import {BsFillPeopleFill, BsTelephoneFill} from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { AiOutlineQuestionCircle,AiOutlineMail } from 'react-icons/ai'
import {useNavigate} from "react-router-dom"
import PropTypes from 'prop-types'

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];


export const BigCalendar = () => {
    const navigate = useNavigate();
    // const [newEvent, setNewEvent] = useState<any>({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState<any>(events);
    const [show, setShow] = useState(false)
    const [filterShow, setFilterShow] = useState(false)
    const [calenderShow, setCalenderShow] = useState(false)
    const [dateShow, setDateShow] = useState(false)
    const handleClose = () => setShow(false);
    const [changecontent, setChangeContent] = useState(false)

    // function handleAddEvent() {
    //     setAllEvents([...allEvents, newEvent]);
    //     setShow(false)
    // }
    //
    // const handleSelectSlot = useCallback(
    //     ({ start, end }) => {
    //         const title = window.prompt('New Event name')
    //         if (title) {
    //             setAllEvents((prev: any) => [...prev, { start, end, title }])
    //         }
    //     },
    //     [setAllEvents]
    // )

    const handleSelectEvent = useCallback(
        (event) => setShow(event.title),
        []
    )
    const gotoReservation = () => {
        navigate('/create-reservation')
    }

    const filterModal = (
        <CalenderModal size={undefined} modalTitle={"Filters"} show={filterShow} handleClose={() => setFilterShow(false)}>
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

    const importCalendar = (
        <CalenderModal size={undefined} modalTitle={"Import a new calendar"} show={calenderShow} handleClose={() => setCalenderShow(false)}>
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

    const datePopModal = (
        <CalenderModal show={dateShow} size={undefined} handleClose={() => setDateShow(false)} modalTitle={"Calendar"}>
            <Row>
                <Col md={12} className="calendar_names_container">
                    <div>
                        <span className='day'>MON</span>
                    </div>
                    <b className='date'>07</b>
                    <p className='filled_blue'>Bella deFlore</p>
                    <p>Army Lin</p>
                    <p className='filled_green'>Emily Gardener</p>
                    <p className='pink_border'>Joe Hemingway</p>
                    <p className='filled_yellow'>Kendall Green</p>
                    <p>Juan Petro</p>
                    <p className='filled_purple'>katle Butler</p>

                </Col>
            </Row>
        </CalenderModal>
    )

    return (
        <React.Fragment>
            {filterModal}
            {importCalendar}
            {datePopModal}
            <div className={'reservation_head mb-4'}>
                <Container fluid>
                    <div className={'calender_heading'}>
                        <h2>Bookings Calendar</h2>

                        <div>
                            <img onClick={() => setDateShow(true)} src={datePop} alt={'datePop'} />
                            <img onClick={() => setFilterShow(true)} src={filter} alt={'filter'} />
                        </div>
                    </div>

                </Container>
            </div>
            <Container>
                <Row>
                    <Col md={3}>
                        <div>
                            <button className="filled_reserved_color" onClick={gotoReservation}>Create Reservation</button>
                            <ReservationModal show={show} size={undefined} handleClose={handleClose} modalTitle={"Reservation Details"}>
                                <Row>

                                    <Col md={6}>
                                        <div>
                                            <b>Name</b>
                                            <p>Kendall Green</p>
                                        </div>

                                    </Col>

                                    <Col md={6}>
                                        <div>
                                            <b>Booking No</b>
                                            <p>002243546648</p>
                                        </div>
                                    </Col>

                                    <Col md={6}>
                                        <b>Contact</b>
                                        <p><span><AiOutlineMail/></span> kendallgreen@gmail.com</p>
                                        <span className='contact_no'><BsTelephoneFill/> 415-876-992</span>
                                    </Col>

                                    <Col md={6}>
                                        <button className='filled_color'>
                                            MESSAGE NOW
                                        </button>
                                    </Col>

                                    <Col md={12}>
                                        <b>Listing</b>
                                        <p>Stunning Green Hotel with a Majestic view</p>
                                    </Col>

                                    <Col md={6}>
                                        <b>Check-In after 2pm</b>
                                        <p>Feb,6,2022</p>
                                    </Col>

                                    <Col md={6}>
                                        <b>Check-Out 11am</b>
                                        <p>Feb,7,2022</p>
                                    </Col>

                                    <Col md={6}>
                                        <b>Booking Date</b>
                                        <p>June,19,2022</p>
                                    </Col>

                                    <Col md={6}>
                                        <b>Payment Method</b>
                                        <p>VISA **********0498</p>
                                    </Col>


                                    <Col md={6}>
                                        <b>Payment</b>
                                        <p>$150.00</p>
                                        <p>Local food tour</p>
                                        <p>Cleaning fees</p>
                                        <p>Acomadic fees</p>
                                        <strong>You earn</strong>
                                    </Col>

                                    <Col md={6}>
                                        <p className='mt-4'>$150.00</p>
                                        <p>$110.00</p>
                                        <p>$50.00</p>
                                        <p>$16.00</p>
                                        <b>$326.00</b>
                                    </Col>

                                    <hr className='mt-3' />

                                    <Col md={12}>
                                        <b>Client Notes</b>
                                        <Form.Control as="textarea" rows={3} />
                                        <button className='filled_color mt-2'>Save</button>
                                    </Col>

                                    <Col md={12} className='mt-2'>

                                        <b>Reservation History</b>
                                        <p>Booking No 42323461297</p>

                                    </Col>


                                </Row>
                            </ReservationModal>
                            <div className='mt-4'>
                                <SmallCalendar />
                            </div>
                            <div className='search_people_container'>
                                <p><span className='people_icons_container'><BsFillPeopleFill /></span> Search for people</p>
                            </div>

                            <div className='mt-4'>
                                <h5 className='calendar_sync'>Calendar Sync
                                    <span>
                                        {changecontent ? null :
                                            <IoIosArrowUp className="cursor_pointer" onClick={() => setChangeContent(true)} />
                                        }
                                        {changecontent ?
                                            <IoIosArrowDown className='cursor_pointer' onClick={() => setChangeContent(false)} />
                                            : null
                                        }
                                    </span>
                                </h5>

                                {changecontent ?
                                    <div>
                                        <p>Automatically block days when you link to another calendar</p>
                                        <span onClick={() => setCalenderShow(true)} className='import_calendar'>IMPORT A CALENDAR</span>

                                        <div>
                                            <input type='checkbox' />
                                            <span>Google</span>
                                        </div>

                                        <div>
                                            <input type='checkbox' />
                                            <span>iCloud</span>
                                        </div>

                                        <div>
                                            <input type='checkbox' />
                                            <span>airbnb</span>
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>

                            <div className='mt-3'>
                                <h5 className='calendar_sync'>Support</h5>
                                <p>Ask a question below,or watch our <span className='import_calendar'>training</span> on how to use our calendar</p>
                            </div>

                            <div className='search_people_container'>
                                <p><span className='people_icons_container'><AiOutlineQuestionCircle /></span>Search info</p>
                            </div>

                        </div>

                    </Col>

                    <Col md={9}>
                        <div className="height600">
                            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500 }}
                                      // onSelectSlot={handleSelectSlot}
                                      selectable
                                      onSelectEvent={handleSelectEvent}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}



BigCalendar.propTypes = {
    localizer: PropTypes.instanceOf(DateLocalizer),
}


// Create Events Fields


//   <Col md={12}>
//   <Form.Control type="text" placeholder="Add Title" style={{ marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
// </Col>
// <Col md={6} className='mt-2'>
//   <DatePicker className='form-control' placeholderText="Start Date" selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
// </Col>
// <Col md={6} className='mt-2'>
//   <DatePicker className='form-control' placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
// </Col>

// <button className="mt-3 filled_color" onClick={handleAddEvent}>
//   Add Event
// </button>