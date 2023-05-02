import React, { useEffect } from "react";
/* aos imports */
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { Container, Row, Col, Card } from "react-bootstrap";

let About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container id="about">
      <div className="about" data-aos="fade-up">
        <h2>About us:</h2>
        <h6>We provide you with:</h6>
        <p>
          K Accurate Electrical (Pty) Ltd provides turnkey electrical,
          automation and security systems design, installation repairs,
          supporting infrastructure build and maintenance. K Accurate is a
          electrical engineering consulting, design, installation, repairs and
          maintenance, automation and security systems company for domestic,
          industrial infrastructure, and building of high voltage substations
          and power lines up to 132kV. K Accurate Electrical is 100% black
          owned, managed and controlled by members with extensive experience in
          Electrical Engineering, Security, Construction and Home Automation.
          The company fully subscribes to BBBEE principles advocated in Act No.
          53 of 2003 and codes of good practice as amended with a level 1 BBBEE
          status.
        </p>
      </div>
      <div id="vision" data-aos="fade-left">
        <h2>Our Vision:</h2>
        <p>
          To become a highly successful electrical engineering and automation
          corporation providing cost effective, highest level of service and
          quality products to our customers
        </p>
      </div>
      <div data-aos="zoom" id="phil" className="container-fluid">
        <h2>Our Philosophy:</h2>
        <Row className="mt-4" style={{ color: "white" }}>
          <Col className="col-4">
            <Card body className="bg-warning">
              Conduct business with the highest standards of honesty, trust,
              professionalism and ethical behavior
            </Card>
          </Col>
          <Col className="col-4">
            <Card body className="bg-danger">
              Communicate openly and effectively with all stakeholders
            </Card>
          </Col>
          <Col className="col-4">
            <Card body className="bg-info">
              Empower employees, partners and clients by encouraging active
              participation, creativity, and continuous development.
            </Card>
          </Col>
        </Row>
      </div>
      {/* team section*/}
      <div id="team" className="container-fluid" data-aos="flip-right">
        <h2>Meet the team:</h2>
        <Row>
          <Col className="sm-6">
            <h5>Team structure</h5>
            <p>
              We take pride in our black female owned business. Our team has 2
              directors, one male and one female. We have 2 business
              consultants, one full-time and the one part-time. Our working
              teams are 6, 4 of those working teams and the other 2 being
              maintenance teams. We also have 5 subcontractors, made out of
              specialists, Engineers and Tradesmen.
            </p>
          </Col>
          <Col className="sm-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGqG37H679--XnECnZMfUsmQAs0lkPZFd56i0v_y3Ei4Hd_HVBIhu2NUxbPzgP3xZDDo&usqp=CAU"
              alt="team image"
              id="teamimg"
            />
          </Col>
        </Row>
        <h4>Our key Personnel</h4>
        <p>
          K Accurate electrical(Pty) Ltd key personnel are identified only for
          business ownership and financial accountability. K Accurate Electrical
          has established separate infrastructure build teams for the
          construction and renovation of purpose fit infrastructure & buildings.
          Our involvement starts at architectural design to ensure seamless
          integration of electrical, security and home automation needs into the
          design and construction
        </p>
        <ul>
          <li>
            We operate as a unified flat structured entity developing and
            empowering people through a shared common goal and vision. We share
            skills, ideas, risk and resources
          </li>
          <li>
            We are a company of qualified and competent project teams and
            members that manages, executes and deliver on quality, specification
            and timely
          </li>
        </ul>
        <Row>
          <Col>
            <Card style={{ width: "40rem", backgroundColor: "LightGrey" }}>
              <Card.Body>
                <Card.Title>Phuza Lulamile Nicholas (MD)</Card.Title>
                <Card.Text>
                  Lulamile is the owner/member with more than 11 years of hands
                  on experience in the power transmission, power distribution
                  industry and electrical engineering environment. He has strong
                  electrical engineering consulting background specializing in
                  planning and design for electrical distribution networks as
                  well as installation services. Lulamile started his career at
                  Bond Electrical in 2003 as unskilled worker. He then rose
                  through the ranks and got recognition of a semi- skilled
                  employee in 2005 within the same organization. Lulamile’s
                  commitment and dedication gave him the opportunity to advance
                  to Supervisory/site foreman level in the cabling, high and low
                  voltage room departments. In 2006 to 2008 Lulamile was
                  involved in the construction of substation from 11kv up to
                  132kv. The main clients being Eskom, Municipalities and mines.
                  Driven by his passion, in the electrical engineering field
                  Lulamile resigned at the end of 2008 to start his own business
                  (Accurate Perimeter Electrical cc) in 2009 that did
                  electrification of streets lights, installation of plugs,
                  fitting of lights, substation upgrades/refurbishment,
                  maintenance and project management. His key responsibilities
                  also include feasibility studies, planning and design, bill of
                  quantities and specifications, site supervision and management
                  of all project related activities, including budget control
                  and liaison with customers, contract management and
                  negotiations with clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "20rem", backgroundColor: "lightgrey" }}>
              <Card.Body>
                <Card.Title>Moyo, Bongimpilo (Accountant)</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  ACIS –M0472017-PPG01287
                </Card.Subtitle>
                <Card.Text>
                  Bongimpilo, has a strong background in both finance and
                  accounting with over 15 years hands on experience in Finance
                  and is currently responsible for budget management, cost
                  benefit analysis, forecasting needs and gives advice when
                  extra funding is required. Other responsibilities include but
                  are not limited to preparing budgets, management accounts,
                  financial statements and designing & implementing adequate
                  financial controls, identifying and assessing all financial
                  and operational risks.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default About;
