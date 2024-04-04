import React from "react";
import { Col, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Home() {
    const activeStyle = { color: "#F15B2A" };

    return (
        <>
            <Container>
                <Col>
                    <div>
                        <NavLink className="active" activeStyle={activeStyle} to="/review">Review</NavLink>
                    </div>
                    <div>
                        <NavLink className="active" activeStyle={activeStyle} to="/content">content</NavLink>
                    </div><div>

                        <NavLink className="active" activeStyle={activeStyle} to="/qa">QA</NavLink>
                    </div>
                </Col>
            </Container>
        </>
    )
}
export default Home;