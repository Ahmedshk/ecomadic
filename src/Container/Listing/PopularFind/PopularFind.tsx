import React from 'react'
import Slider from "react-slick";
import { Box, Image } from '@chakra-ui/react';
import './PopularFind.css'
import { imageData } from './PopularFindData';

const ImageSlider = () => {

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
              }
            }
          ]
    };
    return (
        <React.Fragment>
            <Slider {...settings}>
                    {imageData.map((data) => {
                        const { id, img, imageAlt } = data
                        return (
                            <Box key={id} maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' className={'card_box'}>
                                <Image src={img} alt={imageAlt} />

                                <Box p='6'>
                                    <div className={'review_rating'}>
                                        <p>4.8</p>
                                        <h5>(206 Reviews)</h5>
                                    </div>

                                    <Box
                                        mt='1'
                                        fontWeight='semibold'
                                        as='h4'
                                        lineHeight='tight'
                                        isTruncated
                                    >
                                        Hotel Name
                                    </Box>

                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <p>City, Region</p>
                                        <p>$$/night</p>
                                    </div>
                                </Box>
                            </Box>
                        )
                    })}
                </Slider>
        </React.Fragment>
    )
}

export default ImageSlider