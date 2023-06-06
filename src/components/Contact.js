import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container,Row,Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact=()=>{
    const form =useRef()
    const sendEmail=(e)=>{
    e.preventDefault();
    setButtonText("Sending...");
    emailjs.sendForm('service_zjbxyck', 'template_w9xqpvc', form.current, 'bZMz1yOYejFgN-TxJ')
          .then((result) => {
              console.log(result.text);
              setStatus({success:true,message:'Message sent successfully'});
          }, (error) => {
              console.log(error.text);
              setStatus({success:false,message:'Something went wrong,please try again later'});
          });
     setButtonText("Send");
     setFormDetails(formInitialDetails);
    };
    const formInitialDetails={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    message:'',

  }
  const [formDetails,setFormDetails]=useState(formInitialDetails);
  const [buttonText,setButtonText]=useState('Send');
  const [status,setStatus] =useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}
  const handleSubmit=async(e)=>{
     e.preventDefault();
     setButtonText("Sending...");
     let response=await fetch("http://localhost:5000/contact",{
        method:"POST",
        headers:{
            "Content-Type":"Application/json;charset=utf-8",

        },
        body:JSON.stringify(formDetails),
     });
     setButtonText("Send");
     let result=response.json();
     setFormDetails(formInitialDetails);
     if(result.code===200){
        setStatus({success:true,message:'Message sent successfully'});
     }else{
        setStatus({success:false,message:'Something went wrong,please try again later'});
     }
  }

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                     <h2>Get in Touch</h2>
                     <form onSubmit={sendEmail} ref={form}>
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}></input>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" name="last_name"value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}></input>
                            </Col>
                            <Col size={12} sm={6} name="user_email" className="px-1">
                                <input type="email" value={formDetails.email } placeholder="Email" onChange={(e)=>onFormUpdate('email',e.target.value)}></input>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="tel" name="user_phone" value={formDetails.phone} placeholder="Phone No." onChange={(e)=>onFormUpdate('phone',e.target.value)}></input>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                              <textarea row="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                              <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message&&
                                <Col>
                                    <p className={status.success===false? "danger":"success"}>{status.message}</p>
                                </Col>
                            }
                        </Row>
                     </form>
                    </Col>
                </Row>
            </Container>

        </section>

  )

}