import React, { useState } from "react";
import Content from "./Content";
import data from './data';

const Contents = (props) => {
    const [people, setPeople] = useState(data);

    console.log(props);
    return (
        <>
            <div>
                <h2>Content</h2>
                {
                    props.content.map(i => {
                        console.log(i);
                        return <>
                            <Content key={i.id} {...i} removeHandler={props.removeData}>
                                {/* <div>
                                    {i.firstName}
                                </div> */}
                            </Content>

                        </>
                    })
                }
            </div>

        </>
    )
}
export default Contents;