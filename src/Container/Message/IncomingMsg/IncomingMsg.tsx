import React from 'react';
import {useNavigate} from "react-router-dom"

const IncomingMsg = () => {
    const navigate = useNavigate();
    return (
        <div className='incoming_msg'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9THjZ_3A97_EL76BBJQtHsVxfWWHT1Oc_Aw&usqp=CAU" alt="island" />

            <div onClick={() => navigate('/business-page')} className={'msg_text'}>
                <p>Chumbe Island Coral Park</p>
                <p className={'date'}>10/11/13</p>
            </div>

        </div>
    )
}

export default IncomingMsg