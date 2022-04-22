import React from 'react';
import { FaLeaf, FaPeopleCarry } from 'react-icons/fa'
import { TiSocialLastFm } from 'react-icons/ti'

const Sustainable = () => {
    return (
        <div className={'form_container'}>
            <div className='sustainable_aminities'>
                <h3>Sustainable Amenities</h3>
                <div className="filters_container">
                    <div className="environment">
                        <div className='enviromental_leaft'>
                            <div className="inner_environment">
                                <div className='leaf'><FaLeaf /></div>
                                <span>Environmental</span>
                            </div>

                            <div className="Inner_social">
                                <div className='group'><FaPeopleCarry /></div>
                                <span>Social</span>
                            </div>
                        </div>
                    </div>

                    <div className='social_environmental'>
                        <div className='environmental' >
                            <div>
                                <input type="checkbox" />
                                <span>Environmentally Conscious</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Energy Efficient</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Water Efficient</span>
                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Water Management</span>
                            </div>


                            <div>
                                <input type="checkbox" />
                                <span>Responsible Sourcing</span>
                            </div>
                        </div>

                        <div className='social'>
                            <div>
                                <input type="checkbox" />
                                <span>Inclusive of Local People</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Embraces Culture & Heritage</span>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Local Ownership</span>
                            </div>

                            <div>
                                <input type="checkbox" />
                                <span>Local Hiring</span>
                            </div>


                            <div>
                                <input type="checkbox" />
                                <span>Supportive Work Environment & Culture</span>
                            </div>
                        </div>
                    </div>

                    <div className="environment" style={{ display: "flex" }}>
                        <div className='ecoIcon'><TiSocialLastFm /></div>
                        <span className='eco'>Economic</span>
                    </div>

                    <div className="economic">
                        <input type="checkbox" />
                        <span>Support the Local Economy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainable;
