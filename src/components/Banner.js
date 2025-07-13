import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner=()=>{
 
 return(
  <section className="banner" id="home">
   <Container>
     <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my portfolio</span>
        <h1>{'Hi im Sibusiso, Software Developer'}</h1>
        <p>As an experienced developer, I am deeply committed to writing clean, efficient, and maintainable code. I place a high value on communication and actively seek to collaborate, ensuring that I understand project needs and expectations fully. My approach involves taking the initiative to identify and resolve issues promptly, maintaining transparency with stakeholders regarding my progress. My primary objective is to deliver high-quality software solutions that precisely meet stakeholder requirements, emphasizing maintainability, scalability, and adherence to timelines and budgets.
        </p>
        <button onClick={()=>console.log('Hello world')} className="tagline">{'Let us connect'}<ArrowRight color="black" size={25} /></button>
        </Col>
      <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Headder Img"/>
      </Col>
     </Row>
   </Container>
  </section>
)
}
