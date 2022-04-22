import React, {useState} from 'react';
import {MdLocationOn} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import {BsFillCalendarDayFill, BsPeopleFill} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import popular1 from "../../images/popular_1.jpg";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    const SubmitHandler = () => {
        navigate('/listings')
    }
    return (
        <React.Fragment>
            <div className={'section1'}>
                <div className={'text_section'}>
                    <p>Marketplace for local & sustainable travel businesses</p>
                    <h1>WHERE WOULD YOU LIKE TO GO?</h1>

                    <form onSubmit={SubmitHandler}>
                    <div className={'input_fields'}>
                        <div className={'location_input'}>
                            <MdLocationOn />
                            <input type='text'  placeholder={'Where are you going?'} />
                        </div>
                        <div className={'location_input'}>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={'location_input'}>
                            <BsFillCalendarDayFill />
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className={'location_input'}>
                            <BsPeopleFill />
                            <input style={{width: '100px'}} type='text'  placeholder={'Add guests'} />
                        </div>
                        <div className={'input_btn'}>
                            <button type={'submit'}> <AiOutlineArrowRight /></button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>

            <div className={'container main_popular'}>
                <p>Most popular destinations</p>

                <div className={'popular_img'}>
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />
                    <img src={popular1} alt={'popular1'} />

                </div>

            </div>

        </React.Fragment>
    );
};

export default Home;
