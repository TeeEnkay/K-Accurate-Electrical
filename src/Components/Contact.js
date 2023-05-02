import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import { TelephoneFill, EnvelopeAtFill, TelephoneInbound } from "react-bootstrap-icons";

let Contact = () =>{
    return(
        <div className='contact'>
            <div className='text-center'>
                <h4 className='p-5' style={{ fontWeight: "bolder"}}>WE WOULD LOVE TO HEAR FROM YOU!</h4>
                <p style={{fontWeight: "bolder"}}>Thank you</p>
            </div>
            <div id='foot'>
                
                <Row>
                    <Col > MR. LULAMILE NICOLAS PHUZA:</Col>
                    <Col> <TelephoneFill/> < a style={{color:"black"}} href='tel: +27 81 050 5355' >+27 73 509 8318 | +27 81 050 5355</a> </Col>
                </Row>
                <Row>
                    <Col>FAX:</Col>
                    <Col><TelephoneInbound/>+27 86 498 4363</Col>
                </Row>
                <Row>
                    <Col>Email:</Col>
                    <Col > <EnvelopeAtFill/> <a style={{color:"black"}} href='mailto: kaccuratee@gmail.com'>kaccuratee@gmail.com</a></Col>
                </Row>
            </div>
        </div>
    )
}


export default Contact;
