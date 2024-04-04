import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
const Qncomponent = ({ title, info }) => {
    console.log(title, info)
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="qn-container">
                <div className="question">{title}</div>
                <div>

                    <button className="circle" onClick={() => setShow(!show)}>{show ? <FaMinusCircle size={15} /> : <FaPlusCircle size={15} />}</button>
                </div>
            </div>
            <div className="popup-container active">
                {show && <div className="answer">
                    <button className="close-btn" onClick={() => setShow(!show)}>&times;</button>
                    <p>{info}
                    </p></div>}
            </div>
        </>
    )
}
export default Qncomponent;