import React, { useState } from 'react'
import { Container, Form, Col, Row, Tab, Tabs } from 'react-bootstrap'
import './ReservationPage.css';
import TableInfo from '../../Components/Table/Table';

export enum Table_KEY {
    All = "All",
    Current = "Current",
    Upcoming = "Upcoming",
    Completed = "Completed",
    Cancelled = "Cancelled"
}

const ReservationPage = () => {
    const [key, setKey] = useState<string>(Table_KEY.All);
    const [changetable, setChangeTable] = useState<any>('Accomodations')

    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col md={12} className='reservation_bg'>
                        <div className='reservation_container'>
                            <div className='d-flex'>
                                <h3>Reservation List</h3>
                                <div className='mx-3 mt-1'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </div>
                            </div>

                            <div className='pdf_export'>
                                <div className='mt-2'>
                                    <Form.Select aria-label="Default select example">
                                        <option>PDF</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>

                                <div className='mx-4 mt-2'>
                                    <button className="unfilled_round_btn">
                                        Export
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col md={12} className='p-0'>

                        {changetable === "Accomodations" ?
                            <Tabs
                                activeKey={key}
                                onSelect={(k) => setKey(k!)}
                                className="mb-0 tabs"
                            >

                                <Tab eventKey={Table_KEY.All} title="All" className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Current} title='Current' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Upcoming} title='Upcoming' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Completed} title='Completed' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Cancelled} title='Cancelled' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>

                            </Tabs>
                            :

                            <Tabs
                                activeKey={key}
                                onSelect={(k) => setKey(k!)}
                                className="mb-0 tabs"
                            >

                                <Tab eventKey={Table_KEY.All} title="All" className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Current} title='Current' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                                <Tab eventKey={Table_KEY.Upcoming} title='Upcoming' className={'w-100'}>
                                    <TableInfo changetable={changetable} setChangeTable={setChangeTable} />
                                </Tab>
                            </Tabs>
                        }
                    </Col>

                </Row>

            </Container>
        </React.Fragment >
    )
}

export default ReservationPage