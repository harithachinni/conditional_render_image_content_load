import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Home() {
    return (
        <>
            <Container>
                <Col>

                    <NavLink className="active" to="/review">Review</NavLink>
                </Col>
                <Row>

                    <NavLink className="active" to="/content">content</NavLink>
                </Row>
                <NavLink className="active" to={'/qa'}>QA</NavLink>
            </Container>
        </>
    )
}
export default Home;