import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Button
} from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai'

const WelcomeModal = () => {
    const [welcome, setWelcome] = useState(false)

    const WelcomeModal = (
        <Modal closeOnOverlayClick={false} size={'lg'} onClose={() => setWelcome(false)} isOpen={welcome}>
            <ModalOverlay />
            <ModalContent>
                <ModalBody>
                    <div className='modal2_text'>
                        <div className={'reaching_heading'}>
                            <AiOutlineClose style={{ cursor: 'pointer' }} onClick={() => setWelcome(false)} />
                        </div>
                        <div className='welcome_container'>
                            <h3>Welcome to Ecomadic</h3>
                            <div>
                                <button className="filled_color">Continue</button>
                            </div>
                        </div>

                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

    return (
        <div>
            {WelcomeModal}
            <Button onClick={() => setWelcome(true)}> Open Welcome Modal</Button>
        </div>
    );
};



export default WelcomeModal;
