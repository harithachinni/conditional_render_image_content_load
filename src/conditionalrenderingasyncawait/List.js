import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Contents from "./Contents";
import { Container } from "react-bootstrap";
// import data from './data';
function List({ people }) {
    // const [people, setPeople] = useState(data);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const removeData = (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
    }
    // const url = "https://dummyjson.com/users/";
    const fetchApi = async () => {
        setLoading(false);
        // try {
        //     const response = await fetch(url);
        //     const content = await response.json();
        //     console.log(response, content);
        //     // setLoading(true);
        //     setContent(content);
        // }
        // catch (e) {
        //     console.log(e);
        // }
        const response = await fetch("https://course-api.com/react-tours-project");
        const content = await response.json();
        setData(content);
        console.log(response, content);
        // setLoading(true);
    }
    useEffect(() => {
        fetchApi();
    }, []);
    if (data.length === 0) {
        return (
            <>
                <main>
                    <h3>No rendered data is there</h3>
                    <button onClick={() => fetchApi()}>refresh</button>
                </main>
            </>
        )
    }
    // const response = fetch(url).then(response => response.json).then(data => console.log(data));
    // console.log(people);
    if (loading) {
        return (<Loading />)
    }
    return (
        <>
            <Container>

                <h1> {people.length} List components</h1>

                <div>
                    {people.map(per => {
                        const { id, name, age } = per;
                        console.log(per);
                        return (
                            <>

                                <div>{id}</div>
                                <div>{name}</div>
                                <div>{age} years</div>
                            </>
                        )

                    })}
                </div>
                <div>
                    {/* {
                    data.map(i => {
                        return <>
                            <p>{i.id}</p>
                            <p>{i.firstName}</p>
                            <p>{i.lastName}</p>
                        </>
                    })
                } */}
                    <Contents content={data} removeData={removeData} />
                </div>
                <div>
                    <div>
                        <button onClick={() => setData([])}>Clear</button>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default List;