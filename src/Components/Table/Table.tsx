import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const TableInfo = (props:any) => {

    return (
        <React.Fragment>
            <Row>
                <Col md={1}></Col>
                <Col md={2}>
                    <div className='accomodations'>
                        <Form.Select aria-label="Default select example" onChange={(e) => props.setChangeTable(e.target.value)}>
                            <option hidden value={''}>Please Select</option>
                            <option value="Accomodations">Accomodations</option>
                            <option value="Experience">Experience</option>
                        </Form.Select>
                    </div>
                </Col>
                <Col md={6}> </Col>

                <Col md={2}>
                    <div className='search'>
                        <BsSearch />
                        <Form.Control type='search' />
                    </div>
                </Col>

                <Col md={1}></Col>
            </Row>

            {props.changetable === "Accomodations" ?
                <div className="main_table">
                    <table className="content-table">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th>Guests</th>
                            <th>Type</th>
                            <th>Listing</th>
                            <th>Booking No</th>
                            <th>Check-In</th>
                            <th>Check-Out</th>
                            <th>Total Payout</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Upcoming</td>
                            <td>Lucy Smith</td>
                            <td>Shared</td>
                            <td>Tropical House</td>
                            <td>78620022</td>
                            <td>2/7/22</td>
                            <td>3/7/22</td>
                            <td>$350.67</td>
                            <td>Details</td>
                        </tr>
                        <tr className="active-row">
                            <td>Upcoming</td>
                            <td>Kendall Green</td>
                            <td>Private</td>
                            <td>Stun Green Hotel</td>
                            <td>5600021222</td>
                            <td>2/9/22</td>
                            <td>3/9/22</td>
                            <td>$450.54</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Current</td>
                            <td>Patrick Dee</td>
                            <td>Entire Place</td>
                            <td>Adorable Hut</td>
                            <td>343567889</td>
                            <td>4/9/22</td>
                            <td>6/9/22</td>
                            <td>$420.99</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Completed</td>
                            <td>Yasmin Nouh</td>
                            <td>Private</td>
                            <td>Wooden Cabin</td>
                            <td>2343256689</td>
                            <td>8/9/22</td>
                            <td>8/9/22</td>
                            <td>$600.00</td>
                            <td>Details</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                : null}

            {props.changetable === "Experience" ?
                <div className="main_table">
                    <table className="content-table">
                        <thead>
                        <tr>
                            <th>Status</th>
                            <th>Guests</th>
                            <th>Type</th>
                            <th>Listing</th>
                            <th>Booking No.</th>
                            <th>Booking Date</th>
                            <th>Total Payout</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Confirmed</td>
                            <td>Lucy Smith</td>
                            <td>Adventure</td>
                            <td>Scuba Diving</td>
                            <td>78620022</td>
                            <td>2/7/22</td>
                            <td>$350.67</td>
                            <td>Details</td>
                        </tr>
                        <tr className="active-row">
                            <td>Confirmed</td>
                            <td>Kendall Green</td>
                            <td>Food</td>
                            <td>Local food tour</td>
                            <td>5600021222</td>
                            <td>2/9/22</td>
                            <td>$450.54</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Confirmed</td>
                            <td>Patrick Dee</td>
                            <td>Adventure</td>
                            <td>Hiking</td>
                            <td>343567889</td>
                            <td>4/9/22</td>
                            <td>$420.99</td>
                            <td>Details</td>
                        </tr>
                        <tr>
                            <td>Confirmed</td>
                            <td>Yasmin Nouh</td>
                            <td>Food</td>
                            <td>Wooden Cabin</td>
                            <td>2343256689</td>
                            <td>8/9/22</td>
                            <td>$600.00</td>
                            <td>Details</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                : null}
        </React.Fragment >
    )
}

export default TableInfo