import React from 'react';
import {Box, Flex, IconButton, useDisclosure, useColorModeValue, Stack,} from '@chakra-ui/react';
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {NavLink} from "react-router-dom";
import "./Header.css";

export default function withAction() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Flex alignItems={'center'}>
                        <NavLink to={'/'}> <h5>ecomadic</h5> </NavLink>
                    </Flex>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
                        aria-label={'Open Menu'}
                        display={{ md: 'block' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'block' }}>
                        <Stack as={'nav'}>
                            <NavLink to={'/login'}>Login</NavLink>
                            <NavLink to={'/sign-up'}>Sign-up</NavLink>
                            <NavLink to={'/'}>Planned Trips</NavLink>
                            <NavLink to={'/message'}>Messages</NavLink>
                            {/*<NavLink>My Profile</NavLink>*/}
                            {/*<NavLink>Account</NavLink>*/}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

        </>
    );
}