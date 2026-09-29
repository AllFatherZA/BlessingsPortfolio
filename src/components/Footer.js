import { Container,Row,Col } from "react-bootstrap";
import React from "react";
import logo from '../assets/img/twisklogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
export const Footer=()=>{

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center footer-row">
                     <Col xs={12} md={6} className="footer-brand-col">
                        <img src={logo} alt="Logo for Twisk" className="footer-logo"/>
                     </Col>
                     <Col xs={12} md={6} className="footer-social-col">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/sibusiso-mnyandeni-633597208"><img src={navIcon1} alt="LinkedIn Logo" ></img></a>
                        </div>
                        <p>Copyright 2025. All rights reserved.</p>
                     </Col>
                </Row>
            </Container>
        </footer>
    )
}