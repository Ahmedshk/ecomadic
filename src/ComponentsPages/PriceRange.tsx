import React, {useState} from 'react';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'

const PriceRange = () => {
    const [value, setValue] = useState([10, 30])

    return (
        <div className={'form_container'}>
            <h3>Price</h3>
            <div className="pricing_container">
                <RangeSlider min={5} max={50} onChange={(v: any) => setValue(v)} aria-label={['min', 'max']} defaultValue={[10, 50]}>
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>

                <div className="min_max_contaner">
                    <div className='price_container'>
                        <span>Min.Price</span>
                        <p>{`$${value[0]}`}</p>
                    </div>
                    <div className='price_container'>
                        <span>Max.Price</span>
                        <p>{`$${value[1]}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceRange;
