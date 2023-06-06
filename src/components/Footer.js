import { Container,Row,Col } from "react-bootstrap";
import logo from '../assets/img/twisklogo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer=()=>{

    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                     <Col sm={6} className="text-center text-sm-end">
                        <img src={logo} alt="Logo"/>
                     </Col>
                     <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} ></img></a>
                            <a href=""><img src={navIcon2} ></img></a>
                            <a href=""><img src={navIcon3} ></img></a>
                        </div>
                        <p>Copyright 2023.All rights Reserved</p>
                     </Col>
                </Row>
            </Container>
        </footer>
    )
}