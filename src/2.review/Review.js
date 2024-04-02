import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa'
import reviews from "./data";
function Review() {
    const [i, setI] = useState(0);
    // const [d, setD] = useState(reviews[i]);
    const { name, image, text, job, id } = reviews[i];
    console.log(name, reviews.length - 1, reviews[i]);
    const Number = (num) => {
        if (num > reviews.length - 1) {
            return 0;
        }
        if (num < 0) {
            return reviews.length - 1;
        }
        return num;
    }
    const NextMethod = () => {
        setI((i) => {
            let newI = i + 1;
            return Number(newI);
        })
    }
    const PrevMethod = () => {
        setI((i) => {
            let newI = i - 1;
            return Number(newI);
        })
    }
    const Random = () => {
        let random = Math.floor(Math.random() * reviews.length);
        console.log(random);
        if (random === i) {
            console.log(Number(random))

            random = random + 1;
        }
        setI(Number(random)
        );
    }
    // const Remove = (id) => {
    //     console.log(id);
    //     const newData = reviews.filter((i) => i.id !== id);
    //     console.log(newData);
    //     setD(newData);
    // }
    return (
        <>
            <div>

                <div className="review">
                    <div className="img-container">
                        <span>
                            <FaQuoteRight />
                        </span>
                        <img src={image}></img>
                        <h2>{name}</h2>
                        <h2>{job}</h2>
                        <p>{text}</p>
                    </div>
                    <button className="prev-btn" onClick={PrevMethod}>
                        <FiChevronLeft />
                    </button>
                    <button className="next-btn" onClick={NextMethod}>
                        <FiChevronRight />
                    </button>
                </div>
                <button onClick={Random}>Random</button>
                {/* <button onClick={Remove}>Remove</button> */}
            </div>
        </>
    )
}
export default Review;