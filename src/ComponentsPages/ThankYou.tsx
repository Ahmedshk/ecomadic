import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai'

const ThankYou = () => {

    const [toggle, setToggle] = useState(false)

    const thankYouModal = (
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setToggle(false)} isOpen={toggle}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal2_text'>
                        <div className={'reaching_heading'}>
                            <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => setToggle(false)} />
                        </div>
                        <div className='reaching_container'>
                            <h3>Thanks for reaching to EI Dorado Eco Lodge!</h3>
                            <p>The accomodation will manage you within the next 24hours </p>
                            <p>You can find your conversation with the accomodation in your person box </p>
                            <div>
                                <button className="filled_color">Go to Inbox</button>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
    return (
        <div>
            {thankYouModal}
            <Button onClick={() => setToggle(true)}>Thank you Modal</Button>
        </div>
    );
};

export default ThankYou;
