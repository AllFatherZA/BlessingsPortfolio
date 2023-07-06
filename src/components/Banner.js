import React from "react";
import {Container,Row,Col} from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState,useEffect } from "react";

export const Banner=()=>{
  const [loopNum,setLoopNum]=useState(0);
  const toRotate = ["Software Engineer","Web Designer","UI/UX Designer"];
  const [isDeleting,setIsDeleting]=useState(false);
  const [text,setText]=useState('');
  const [delta,setDelta]=useState(300-Math.random()*100);
  const period=2000;

  useEffect(()=>{
   let ticker=setInterval(()=>{
    tick();

   },delta)

   return ()=>{clearInterval(ticker)};


  },[text])
  const tick=()=>{

    let i=loopNum%toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)
    setText(updatedText);
    if(isDeleting){

      setDelta(prevDelta=>prevDelta/2)
    }
    if (!isDeleting&&updatedText==fullText){
      setIsDeleting(true);
      setDelta(period);
    }else if(isDeleting&&updatedText==''){

      setIsDeleting(false)
      setDelta(500);
    }
  }

  
  
  
  return(
  <section className="banner" id="home">
   <Container>
     <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my portfolio</span>
        <h1>{'Hi im Sibusiso, Software Engineer'}</h1>
        <p>As an experienced software engineer, I understand the importance of writing clean, efficient, and maintainable code.I prioritize communication and collaboration with my team members. We work together to identify and resolve any issues that arise, and I make sure to keep everyone updated on my progress.
           Overall, my goal as a software engineer is to deliver high-quality software that meets the needs of the stakeholders, is maintainable and scalable, and is delivered on time and within budget.
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
