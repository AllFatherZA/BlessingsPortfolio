
import {Alert, Placeholder} from "react-bootstrap"
import {useState} from "react"
export const Newsletter=({subscribe,status,message})=>{
    const [email,setEmail]=useState('');
    const handleSubmit=()=>{
        e.preventDefault();
        email && email.indexOf("@")

    }
    return(
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>subscribe to our Newsletter</h3>
                        
                            {status==='sending' &&<Alert>Sending...</Alert>}
                            {status==='error' &&<Alert variant="variant">{message}</Alert>}
                            {status==='sent' &&<Alert variant="sucess">{message}</Alert>}                
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
                                <button type="submit">Submit Button</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}