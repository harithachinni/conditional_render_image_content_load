import React, { useState } from "react";
import questions from "./data";
import Qncomponent from "./Qncomponent";
const Qanda = () => {
    console.log(questions);
    return (
        <>
            <div>
                {questions.map((i) => {
                    return (
                        <>

                            <Qncomponent key={i.id} {...i} />
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Qanda;