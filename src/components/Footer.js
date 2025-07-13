import { Container,Row,Col } from "react-bootstrap";
import React from "react";
import logo from '../assets/img/twisklogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
export const Footer=()=>{

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                     <Col sm={6} className="text-center text-sm-end">
                        <img src={logo} alt="Logo for Twisk"/>
                     </Col>
                     <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sibusiso-mnyandeni-633597208"><img src={navIcon1} alt="LinkedIn Logo" ></img></a>
                        </div>
                        <p>Copyright 2025.All rights Reserved</p>
                     </Col>
                </Row>
            </Container>
        </footer>
    )
}