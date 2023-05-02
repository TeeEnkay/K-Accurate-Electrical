import React from "react";
import "../App.css";
import "aos/dist/aos.css";
import { Row, Col } from "react-bootstrap";

let Certification = () => {
  return (
    <div className="m-5" data-aos="zoom-in">
      <div className="bg-warning">
        <h3 id="cert">Compliance & Certification</h3>
        <p id="p3">
          All works performed meet and are industry certified. Relevant
          occupational, insurance and regulatory certification and warranties
          are issued by the company.
        </p>
      </div>
      <div>
        <Row className="m-5">
          <Col>
          <span className="span6"style={{backgroundColor: "#073169"}}>01</span>
          <h6 className="lasth6">Inspection & Testing</h6>
            <p>
              All test results are formally recorded and traceable to the
              particular stages and final completion of the phases of the
              contract
            </p>
          </Col>
          <Col>
          <span className="span6"style={{backgroundColor: "#56BEEC "}} >02</span>
            <h6 className="lasth6">Occupational Health & Safety requirements</h6>
            <p>
              We implement and maintain an integrated safety, healthy,
              management and quality systems with the requirement of ISO9000,
              ISO9001,ISO9002.
            </p>
          </Col>
          <Col>
          <span className="span6"style={{backgroundColor: "#FFC300"}}>03</span>
            <h6 className="lasth6">Certification</h6>
            <p>Occupational Certification, works and materials warranty</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Certification;
