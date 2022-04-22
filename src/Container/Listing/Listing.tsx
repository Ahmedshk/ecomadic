import React, {useState} from 'react'
import {Grid, GridItem} from '@chakra-ui/react'
import PopularFind from './PopularFind/PopularFind';
import './Listing.css'
import { FaSearch } from 'react-icons/fa';
import {RiPlantFill} from 'react-icons/ri'
import AllListing from './AllListing/AllListing';
import {FaDollarSign,FaFilter} from 'react-icons/fa';
import {BsFillCalendarDayFill, BsPeopleFill} from "react-icons/bs";
import DatePicker from "react-datepicker";
import {MdLocationOn} from "react-icons/md";

const Listing = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <React.Fragment>

            <div className={'filter_div'} >
                <div>
                    <div className='filter_container'>
                        <div className='border_right'>
                            <MdLocationOn />
                            <input type="text" placeholder='Chunbe Island,Terzania' />
                        </div>

                        <div className='border_right'>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className='border_right'>
                            <BsPeopleFill />
                            <input className={'guest_input'} type="text" placeholder='2 guests' />
                        </div>

                        <div className='search_container'>
                            <span>
                                <FaSearch />
                            </span>
                        </div>

                    </div>
                </div>
                <div>
                    <div className='amenites_container'>
                        <div className='border_right dollar'>
                            <FaDollarSign />  Price
                        </div>

                        <div className='border_right sustain'>
                            <RiPlantFill/> Sustainable Amenities
                        </div>

                        <div className='filters'>
                            <FaFilter/>  More Filters
                        </div>
                    </div>
                </div>
            </div>

            <Grid templateColumns='repeat(12, 1fr)' margin={10} gap={4}>
                <GridItem colSpan={8} height={'100%'} >
                    <PopularFind />
                    <AllListing/>
                </GridItem>
                <GridItem colSpan={4} height={'100%'}>
                    <div>
                        <iframe width="100%" height="800" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder={0} scrolling="no"></iframe><br />
                    </div>
                </GridItem>
            </Grid>


        </React.Fragment>

    )
}

export default Listing