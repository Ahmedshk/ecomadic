import React, { useState } from 'react'
import Pagination from '../../../Components/Pagination/Pagination'
import {NavLink} from "react-router-dom";
import {
    Grid, GridItem, Select,
    Center,
    Flex,
    Image,
    Stack,
    Text,
    VStack,
    StackDivider,
    Box
} from '@chakra-ui/react'
import './AllListing.css'
import { cardData } from './AllListingData'
const Cards = () => {
    const [page, setPage] = useState(0)
    return (
        <React.Fragment>
            <Grid templateColumns='repeat(5, 1fr)' gap={4} margin={10}>
                <GridItem colSpan={2} h='10'>
                    <div className='total_results'>
                           65 results
                    </div>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h='10'>
                    <div className='filter_select_container'>
                        <div>
                            <b>Sort by</b>
                        </div>
                        <div>
                            <Select className='select_input' placeholder='Featured' marginLeft={10}>
                                <option value='option1'>Option 1</option>
                                <option value='option2'>Option 2</option>
                                <option value='option3'>Option 3</option>
                            </Select>
                        </div>
                    </div>
                </GridItem>
            </Grid>

            {cardData.map((data) => {
                const { id, img } = data
                return (
                    <NavLink to={'/business-page'}>
                    <Center py={6} key={id}>
                        <Stack
                            borderWidth="1px"
                            borderRadius="lg"
                            w={{ sm: '100%', md: '90%' }}
                            height={{ sm: '476px', md: '230px' }}
                            direction={{ base: 'column', md: 'row' }}
                            boxShadow={'lg'}
                        >
                            <Flex flex={1}>
                                <Image objectFit="cover" boxSize="100%" src={img} />
                            </Flex>
                            <Stack
                                display='flex'
                                flex={1}
                                flexDirection="column"
                                p={4}
                                pt={2}>
                                <Text fontSize={'xl'} fontFamily={'body'}>
                                    Hotel Name
                                </Text>
                                <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                                    City,Region
                                </Text>

                                <div className='amenities'>
                                    <ul>
                                        <li>Private bedroom</li>
                                        <li>Waste Separation & Recycling</li>
                                        <li>100% Local</li>
                                    </ul>
                                </div>
                            </Stack>

                            <Stack
                                width={"100%"}
                                display='flex'
                                flex={1}
                                flexDirection="row"
                                justifyContent='flex-end'
                                p={4}
                                pt={2}>
                                <div className={'review_div'}>
                                    <h5> <span>4.8</span> (206 Reviews)</h5>
                                </div>

                                <VStack
                                    divider={<StackDivider borderColor='white' />}
                                    // spacing={4}
                                    align='stretch'
                                >
                                    <Box h='40px' >
                                    </Box>
                                    <Box h='40px' border={"none"}>
                                    </Box>
                                    <Box h='40px' fontWeight={600}>
                                        $$/night <br/>
                                        <span className='total'>$$$ Total</span>
                                    </Box>
                                </VStack>
                            </Stack>
                        </Stack>
                    </Center>
                    </NavLink>
                )
            })}

            <Center>
                <Pagination page={page} totalPage={10} setPage={setPage} />
            </Center>

        </React.Fragment >
    )
}

export default Cards