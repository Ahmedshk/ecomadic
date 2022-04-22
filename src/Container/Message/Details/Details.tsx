import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
    Box,
    Center,
    Text,
    Stack,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
} from '@chakra-ui/react';
import {AiOutlineClose} from "react-icons/ai";

const Details = () => {
    const navigate = useNavigate();
    const [showFaqModal, setShowFaqModal] = useState(false)

    const modal = (
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setShowFaqModal(false)} isOpen={showFaqModal}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal2_text'>
                        <div className={'faq_heading'}>
                            <h1>FAQ</h1>
                            <AiOutlineClose style={{cursor: 'pointer'}} onClick={() => setShowFaqModal(false)} />
                        </div>
                        <div className='check_in_dates'>
                            <h5>Check-in and Check-out</h5>
                            <p> Check-in: 11 AM </p>
                            <p> Checkout: 10 AM </p>
                        </div>
                        <hr />
                        <div className='check_in_out_text'>
                            <h5>What methods of transportation are there to the island?</h5>
                            <p> The island is accessed via a boat transfer from Mbweni, approximately 3.7 mi from Stone Town. </p>
                        </div>
                        <div className='check_in_out_text'>
                            <h5>How should we book a day tour to this island?</h5>
                            <p> Please email us at the address provided at our website. Day trips can be booked a maximum of two days in advance. </p>
                        </div>
                        <div className='check_in_out_text'>
                            <h5>How far are the other dive sites from the resort?</h5>
                            <p> Approximately an 8 minutes boat ride from the island. </p>
                        </div>
                        <hr />
                        <div className='check_in_out_text'>
                            <h5>What's the cancelation Policy?</h5>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
    return (
        <React.Fragment>
            {modal}
            <Center py={6}>
                <Box maxW={'80%'} w={'full'} bg={"transparent"} boxShadow={'2xl'} rounded={'md'} p={6} overflow={'hidden'}>
                    <Box onClick={() => navigate('/business-page')} h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                        <Image src={'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}/>
                    </Box>
                    <Stack>
                        <Text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>

                    <div className="Aminities">
                        <h2>Aminities</h2>
                        <ul>
                            <li>On private beach</li>
                            <li>Daily Housekeeping</li>
                            <li>Free With</li>
                            <li>Coffee/tea in common area</li>
                            <li>24h round trip airport shuttle</li>
                        </ul>
                    </div>

                    <div className="Faqs">
                        <h2>FAQ</h2>
                        <p>Check-in and Check-out</p>
                        <p>Check-in: 10AM</p>
                        <p>Check-out: 11AM</p>
                        <span onClick={() => setShowFaqModal(true)}>View More</span>
                    </div>

                </Box>
            </Center>
        </React.Fragment>
    )
}

export default Details