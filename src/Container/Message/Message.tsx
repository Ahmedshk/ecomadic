import React from 'react'
import { Grid, GridItem, VStack, Box, Text } from '@chakra-ui/react'
import './Message.css'
import IncomingMsg from './IncomingMsg/IncomingMsg'
import Details from './Details/Details'
import Chatting from './Chatting/Chatting'

const Message = () => {
    return (
        <React.Fragment>

            <Grid templateColumns='repeat(12, 1fr)' gap={4}>
                <GridItem borderRight={"1px solid rgb(192, 189, 189)"} colSpan={2} height={'100%'} >
                    <Text fontWeight={500} fontSize={25} textAlign={"center"} size="sm" mb={4}>
                        Messages
                    </Text>
                    <VStack borderTop={"1px solid #80808040"}
                            spacing={4}
                            align='stretch'
                    >
                        <Box bg={"rgb(192, 189, 189)"} marginTop={"1px"} padding={"10px 0px"} height={"100%"}>
                            <IncomingMsg />
                        </Box>
                    </VStack>
                </GridItem>

                <GridItem borderRight={"1px solid rgb(192, 189, 189)"} colSpan={7} height={'100%'} >
                    <Text fontWeight={500} padding={"0px 20px"} fontSize={20} size="sm">
                        Chumbe Island Coral Park
                    </Text>
                    <p className="response_time" >Response time 24 hours</p>

                    <VStack borderTop={"1px solid #80808040"}
                            spacing={4}
                            align='stretch'>

                        <div className={'protect_section'}>
                            <p>To protect your payment,always communicate through Ecomadic.</p>
                        </div>

                        <Box bg='grey.300' width={"100%"} height={"100%"}>
                            <Chatting />
                        </Box>
                    </VStack>
                </GridItem>

                <GridItem colSpan={3} height={'100%'} >
                    <Text fontWeight={500} textAlign={"center"} fontSize={25} size="sm" mb={4}>
                        Details
                    </Text>

                    <VStack borderTop={"1px solid #80808040"}
                            spacing={4}
                            align='stretch'
                    >
                        <Box bg='grey.300' width={"100%"} height={"100%"}>
                            <Details />
                        </Box>
                    </VStack>
                </GridItem>

            </Grid>

        </React.Fragment>
    )
}

export default Message