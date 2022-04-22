import React, {useState} from 'react';
import "./BusinessPage.css";
import {useNavigate} from "react-router-dom";
import { SimpleGrid, Box, Image, Grid, GridItem, Modal, ModalOverlay, ModalBody, ModalContent, FormControl } from '@chakra-ui/react'
import RelaxImg from "../../images/relex.jpg";
import ForestImg from "../../images/forest.jpg";
import Snorkeling from "../../images/snorkeling.jpg";
import ReactStars from 'react-stars';
import DatePicker from "react-datepicker";
import {RiArrowDropDownLine} from "react-icons/ri";
import ImageGallery from 'react-image-gallery';
import {AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineClose} from "react-icons/ai"

const BusinessPage = () => {
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [showDropDown, setShowDropDown] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const images = [
        {
            original: ForestImg,
            thumbnail: ForestImg,
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const modal = (
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setShowModal(false)} isOpen={showModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal_header2'>
                        <AiOutlineClose onClick={() => setShowModal(false)} />
                    </div>

                    <div className='modal2_text'>
                        <h1>You are contacting El Dorado Eco Lodge</h1>

                        <h3>Most guests ask about:</h3>

                        <div className='check_in_out_text'>
                            <h5>Check-in and Check-out</h5>
                            <p> Check-in: 11 AM </p>
                            <p> Checkout: 10 AM </p>
                        </div>

                        <div className='check_in_out_text'>
                            <h5>Property rules</h5>
                            <p> No parties at property </p>
                            <p> Please ensure social distancing </p>
                        </div>

                        <div className='check_in_out_text'>
                            <h5>Cancellation policies</h5>
                            <p> Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur </p>
                        </div>

                        <form>
                            <div className='msg_div'>
                                <h4>Message</h4>
                                <FormControl className={'textArea'} as="textarea" rows={3} placeholder="Type Here" />
                            </div>
                            <div className='btn_div'>
                                <button className='filled_color'>Send</button>
                            </div>
                        </form>

                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <React.Fragment>
            {modal}
            <div className={'main_header'}>
                <div className={'header_text'}>
                    <h1>Chumbe Island Coral Park</h1>
                    <p>Island off the Coast of Zanzibar</p>
                </div>
            </div>
            <div className="header-2">
                <nav className="navbar">
                    <p> Overview </p>
                    <p> Amenities </p>
                    <p> Reviews </p>
                    <p> Rooms </p>
                    <p>Activities</p>
                </nav>
            </div>
            {/*---------------------- businessProfile -------------------------*/}
            <SimpleGrid columns={[1, null, 2]} >
            <div className={'business_profile'}>
                        <h1>Business Profile</h1>
                        <p>Chumbe Island Coral Park Ltd. (CHICOP) is a private nature reserve on the uninhabited Chumbe Island off
                            the coast of Zanzibar. The reserve was created for the conservation and sustainable management of the island.
                            The company creates a model of financially and ecologically sustainable park management where ecotourism is able
                            to support the greater conservation, research, and environmental education for local schools and the benefit of
                            local people.
                        </p>
                        <h4>The Location</h4>
                        <p>Chumbe Island Coral Park Ltd. (CHICOP) is a private nature reserve on the uninhabited Chumbe Island
                            off the coast of Zanzibar. The reserve was created for the conservation and sustainable management of the island.
                            The company creates a model of financially and ecologically sustainable park management where ecotourism is able
                            to support the greater conservation, research, and environmental education for local schools and the benefit of
                            local people.
                        </p>
                        <h1>Property amenities</h1>
                        <div className={'amenities'}>
                            <h5>• On private beach</h5>
                            <h5>• Daily Housekeeping</h5>
                            <h5>• Free Wifi</h5>
                            <h5>• Laundry</h5>
                            <h5>• 24-hour roundtrip airport shuttle</h5>
                        </div>
                    </div>

                    <div className={'Sustainable'}>
                        <h1>Sustainable Features</h1>

                        <div className={'sustain_text'}>
                            <p>• Protected Coral Reef Sanctuary </p>
                            <p>• Empowers women at work</p>
                            <p>• Partners with local tour operators,local artisans and farmers </p>
                            <p>• Solar water heating</p>
                        </div>

                        <div className={'booking_section'}>
                            <p>$352 / night</p>

                            <div className={'check_in_out'}>
                                <div style={{marginRight: '20px'}} className={'check_in '}>Check In <br />
                                    <span><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></span>
                                </div>
                                <div style={{marginRight: '20px'}} className={'check_in'}>Check Out <br />
                                    <span><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></span>
                                </div>
                            </div>
                            <div className={'adults'}>
                                <div className={'dropdown_option'}>
                                    2 Adults
                                    <RiArrowDropDownLine onClick={() => setShowDropDown(!showDropDown)} />
                                </div>
                                <div>
                                    {
                                        showDropDown ?
                                            <div className={'options'}>
                                                <p> Adults </p>
                                                <div className={'inc_dec'}>
                                                    <AiOutlinePlusCircle />
                                                    <input name="quantity" type="text" className="quantity__input" value="0" />
                                                    <AiOutlineMinusCircle />
                                                </div>
                                            </div>
                                            : null
                                    }
                                </div>

                            </div>

                            <div className={'req_btn'}>
                                <button onClick={() => navigate('/sign-up')} className={'filled_color'}>Request Booking</button>
                            </div>
                        </div>
                    </div>
            </SimpleGrid>



            {/* <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                <GridItem colSpan={3}>
                    

                </GridItem>
                <GridItem colStart={4} colEnd={6}>
                    
                </GridItem>
            </Grid> */}

            {/*---------------------------------------------------------*/}
            <SimpleGrid columns={[1, null, 2]} >

                <div className='product_container'>
                    <ImageGallery thumbnailPosition='bottom' showPlayButton={false} showFullscreenButton={false} items={images}/>
                </div>
                <div style={{padding: '20px'}}>
                    <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder={0} scrolling="no"></iframe><br />
                </div>
            </SimpleGrid>
            {/*---------------------------------------------------------*/}

            {/*------------------------policies--------------------------*/}
            <SimpleGrid columns={[1, null, 2]} className={'policies_section'}>
                <div className={'property_policies'}>
                    <h3>Property Policies</h3>
                    <p>Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                        voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos.
                        Et omnis earum ut voluptatem animi At consequuntur eaque rem assumenda dolores eos quaerat voluptatibus et repellendus recusandae ex provident velit.</p>
                    <div className={'policy_details'}>
                        <p>- Payment only by card</p>
                        <p>- Social Distancing</p>
                        <p>- Check-in at 11 AM</p>
                    </div>
                </div>
                <div className={'got_question'}>
                    <h3>Got Any Questions?</h3>
                    <p>Send a Message to Chumbe Island Coral Park </p>
                    <button onClick={() => setShowModal(true)} className={'filled_color'}>Message the Property</button>
                </div>
            </SimpleGrid>

            {/*--------------------------reviews-------------------------*/}
            <div className={'reviews_section'}>
                <div className={'reviews_heading'}>
                    <h1>Reviews</h1>
                    <h5>4.8</h5>
                    <p>(206 reviews)</p>
                </div>

                <SimpleGrid columns={[1, null, 2]} gap={2}>
                    <div className={'show_review'}>
                        <div className={'review_name'}>
                            <h5>Sarah Braun</h5>
                            <ReactStars
                                count={5}
                                value={4}
                                half={true}
                                edit={false}
                                size={20}
                                color2="#216261"
                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit voluptatibus
                            dolores ab amet voluptas ex maxime praesentium est voluptas internos. Et omnis earum ut voluptatem animi At
                            consequuntur eaque rem assumenda dolores eos quaerat voluptatibus
                            et repellendus recusandae ex provident velit.</p>
                    </div>
                    <div className={'show_review'}>
                        <div className={'review_name'}>
                            <h5>Sarah Braun</h5>
                            <ReactStars
                                count={5}
                                value={4}
                                half={true}
                                edit={false}
                                size={20}
                                color2="#216261"
                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit voluptatibus
                            dolores ab amet voluptas ex maxime praesentium est voluptas internos. Et omnis earum ut voluptatem animi At
                            consequuntur eaque rem assumenda dolores eos quaerat voluptatibus
                            et repellendus recusandae ex provident velit.</p>
                    </div>
                </SimpleGrid>

                <div className={'review_btn'}>
                    <button className={'filled_color'}>See More Reviews</button>
                </div>
            </div>

            <div className={'room_section'}>
                <h1>Rooms at Chumbe Island Coral Park</h1>

                <SimpleGrid columns={[1, null, 3]}>
                    <div className={'room1'}>
                        <Box maxW='md' borderWidth='' borderRadius='lg' overflow='hidden'>
                            <div style={{position: 'relative'}}>
                                <Image src='https://bit.ly/2Z4KKcF' alt='img' />
                                <span className={'room_price'}>$90 /night</span>
                            </div>

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    isTruncated
                                >
                                    Double Room, 1 King Bed
                                </Box>

                                <p className={'rooms_details_text'}>
                                    Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                                    voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos. Et omnis earum
                                    ut voluptatem animi At consequuntur eaque rem assumenda dolores eos quaerat
                                    voluptatibus et repellendus recusandae ex provident velit.
                                </p>

                                <button onClick={() => navigate('/booking')}>+ Select</button>
                            </Box>
                        </Box>
                    </div>
                    <div className={'room1'}>
                        <Box maxW='md' borderWidth='' borderRadius='lg' overflow='hidden'>
                            <div style={{position: 'relative'}}>
                                <Image src='https://bit.ly/2Z4KKcF' alt='img' />
                                <span className={'room_price'}>$90 /night</span>
                            </div>

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    isTruncated
                                >
                                    Double Room, 1 King Bed
                                </Box>

                                <p className={'rooms_details_text'}>
                                    Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                                    voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos. Et omnis earum
                                    ut voluptatem animi At consequuntur eaque rem assumenda dolores eos quaerat
                                    voluptatibus et repellendus recusandae ex provident velit.
                                </p>

                                <button onClick={() => navigate('/booking')}>+ Select</button>
                            </Box>
                        </Box>
                    </div>
                    <div className={'room1'}>
                        <Box maxW='md' borderWidth='' borderRadius='lg' overflow='hidden'>
                            <div style={{position: 'relative'}}>
                                <Image src='https://bit.ly/2Z4KKcF' alt='img' />
                                <span className={'room_price'}>$90 /night</span>
                            </div>

                            <Box p='6'>
                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    isTruncated
                                >
                                    Double Room, 1 King Bed
                                </Box>

                                <p className={'rooms_details_text'}>
                                    Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                                    voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos. Et omnis earum
                                    ut voluptatem animi At consequuntur eaque rem assumenda dolores eos quaerat
                                    voluptatibus et repellendus recusandae ex provident velit.
                                </p>

                                <button onClick={() => navigate('/booking')}>+ Select</button>
                            </Box>
                        </Box>
                    </div>
                </SimpleGrid>
            </div>

            <div className={'guides'}>
                <h1>Guides</h1>
                <SimpleGrid columns={[1, null, 2]}>
                    <div className={'guide_section'}>
                        <h5>Methods of Transportation</h5>
                        <p>Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                            voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos.
                            Et omnis earum ut voluptatem animi At consequuntur eaque rem assumenda dolores eos
                            quaerat voluptatibus et repellendus recusandae ex provident velit.</p>
                    </div>
                    <div className={'guide_section'}>
                        <h5>Best times to visit</h5>
                        <p>Lorem ipsum dolor sit amet. Et alias deserunt non nesciunt voluptate aut consequatur culpa sit
                            voluptatibus dolores ab amet voluptas ex maxime praesentium est voluptas internos.
                            Et omnis earum ut voluptatem animi At consequuntur eaque rem assumenda dolores eos
                            quaerat voluptatibus et repellendus recusandae ex provident velit.</p>
                    </div>
                </SimpleGrid>
            </div>

            <div className={'activities'}>
                <h1>Activities in the Area</h1>

                <div className={'activities_div'}>
                    <div className='activity_section'>
                        <img src={Snorkeling} alt={'img'}/>
                        <p>Snorkeling</p>
                    </div>
                    <div className='activity_section'>
                        <img src={ForestImg} alt={'img'}/>
                        <p className={'forest'}>Forest Walks</p>
                    </div>
                    <div className='activity_section'>
                        <img src={RelaxImg} alt={'img'}/>
                        <p>Just Relax</p>
                    </div>
                    <div className='activity_section'>
                        <img src={Snorkeling} alt={'img'}/>
                        <p>Snorkeling</p>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default BusinessPage;
