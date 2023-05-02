import React from "react";
import "../App.css";
import { Row, Col, Card } from "react-bootstrap";
/*image imports*/
import hosp from "./Images/hosp.jpg";
import comm from "./Images/comm.jpg";
import dom from "./Images/dom.jpg";
import infra from "./Images/infra.jpg";

let Reference = () => {
  return (
    <div id="refs" className="about">
      <h3 className="m-3">Our Reference Projects</h3>
      <p>
        All activities for the projects are planned and implemented timeously.
        The appointed responsible Project Engineer/ Manager ensures that proper
        and adequate communications pertaining the plans, methodology and
        progress for each plant or project are properly and adequately
        communicated to all relevant personnel & stakeholders.
      </p>
      <Row className="m-3">
        <Col>
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#55ADD3 "
            }}
          >
            <Card.Img variant="top" src={hosp} />
            <Card.Body>
              <Card.Title
                style={{ color: "white", backgroundColor: "#04557B" }}
              >
                Hospitality
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Andeccio 24 Restaurants</li>
                  <li>Calistos Restaurants</li>
                  <li>Burger Rack Restaurants</li>
                  <li>Rocco Mamas</li>
                  <li>News Café (Sub Contract)</li>
                  <li>And Others</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem",  backgroundColor: "#55ADD3 " }}>
            <Card.Img variant="top" src={comm} />
            <Card.Body>
              <Card.Title
                style={{ color: "white ", backgroundColor: "#256482 " }}
              >
                Commercial
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Metro Bus Roodepoort Deport</li>
                  <li>HapCon</li>
                  <li>Prime Letting</li>
                  <li>Kokotsi Primary School (Sub Contracted)</li>
                  <li>And Others..</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <Card style={{ width: "18rem",  backgroundColor: "#55ADD3 " }}>
            <Card.Img variant="top" src={dom} />
            <Card.Body>
              <Card.Title
                style={{ color: "white", backgroundColor: "#22A2B1" }}
              >
                Domestic
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Palcove Estate</li>
                  <li>Straton Road Bryanston</li>
                  <li>Nil Place Robin Hills</li>
                  <li>Boundary Road Illovo</li>
                  <li>Jeskei River Club</li>
                  <li>And others...</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem",  backgroundColor: "#55ADD3 " }}>
            <Card.Img variant="top" src={infra} />
            <Card.Body>
              <Card.Title
                style={{ color: "white", backgroundColor: "#E97D0D" }}
              >
                infrastructure
              </Card.Title>
              <Card.Text>
                <ul>
                  <li>Mini Sub Station – City Power</li>
                  <li>Street Lights (Sub Contracted to Prosolver Group)</li>
                  <li>Eskom (Sub Contracted)</li>
                  <li>Metro Bus</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Reference;
