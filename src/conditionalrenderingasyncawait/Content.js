import React, { useState } from "react";
function Content({ id, name, info, image, removeHandler }) {
    // console.log(props);
    const [read, setRead] = useState(false);
    const show = () => {
        setRead(!read);
    }
    return (
        <>
            {/* <h2>Single component</h2> */}
            <div>
                {/* {name} */}
                <img src={image} alt={name}></img>
                <div>
                    <p>
                        {read ? info : `${info.substring(0, 200)}`}
                        <button onClick={() => setRead(!read)}>
                            {read ? 'show' : 'read more'}
                        </button>
                    </p>
                    <button onClick={() => removeHandler(id)}>not interested</button>
                </div>
            </div>
        </>
    )
}
export default Content;