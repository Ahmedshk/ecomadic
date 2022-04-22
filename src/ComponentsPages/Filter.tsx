import React from 'react';

const Filters = () => {
    return (
        <div className={'form_container'}>
            <h3>More Filters</h3>
            <div className="filters_container">
                <div className='accomodation'>
                    <h3>Accomodation Type</h3>
                    <div>
                        <input type="checkbox" />
                        <span>Entire place</span>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <span>Private bedroom</span>
                    </div>

                    <div>
                        <input type="checkbox" />
                        <span>Shared bedroom</span>
                    </div>
                </div>
                <div>
                    <h3>Amenities</h3>
                    <div className="aminities_container">
                        <div>
                            <input type="checkbox" />
                            <span>Free WiFi</span>

                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Business Lounge/Meeting Rooms</span>

                        </div>
                        <div>
                            <input type="checkbox" />
                            <span>Breakfast Included</span>

                        </div>


                        <div>
                            <input type="checkbox" />
                            <span>Kitchenette</span>

                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>24-Hour Security</span>

                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Non-Smoking</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Restaurant</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Self check in</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Hair-Dryer</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>Fireplace</span>
                        </div>

                        <div>
                            <input type="checkbox" />
                            <span>TV</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
