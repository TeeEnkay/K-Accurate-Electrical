import React from "react";
import { Carousel } from "react-bootstrap";
import "../App.css";
/* aos imports */
import Aos from "aos";
import "aos/dist/aos.css";

let Services = () => {
  return (
    <>
      <h2 className="mt-5"> Our Services:</h2>
      <div id="service" data-aos="zoom">
        <Carousel>
          <Carousel.Item>
            <img
              className="blur"
              src=" https://www.provo.org/home/showpublishedimage/2006/635167503634000000 "
              alt="First slide"
            />
            <Carousel.Caption
              style={{ color: "black", fontWeight: "bolder", fontSize: "20px" }}
            >
              <h3 style={{ textDecoration: "underline" }}>Plan</h3>
              <p>
                Planning for electrical, security & automation requirements with
                client and design architects.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="blur"
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xrZTM2TCX0GevDvYpdCVZp1a3fp_nOHGZA&usqp=CAU"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Design</h3>
              <h6>
                New build, existing electrical, security and automation system
                design
              </h6>
              <p>
                <ul>
                  <li>Refill electrical design.</li>
                  <li>Switchboard, starter and control panel design</li>
                  <li>Alarm and monitoring system design</li>
                  <li>Generator control system design </li>
                  <li>
                    Electrical power generation, protection and distribution
                    design.
                  </li>
                </ul>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="blur"
              src="https://www.homee.com/hubfs/electrical-system-in-home.jpeg "
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Install</h3>
              <h6>Supply, Installation , Commissioning and Certification</h6>
              <p>
                <ul>
                  <li>Complete electrical system install </li>
                  <li>
                    Electrical power generation, protection and distribution
                    installations
                  </li>
                  <li>Control system installations</li>
                </ul>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="blur"
              src="https://sparkpowercorp.com/wp-content/uploads/2017/07/iStock-516846048.jpg"
              alt="slide"
            />
            <Carousel.Caption
              style={{ fontSize: "18px", fontWeight: "bolder" }}
            >
              <h3>Maintain</h3>
              <h6>Emergency and scheduled maintenance and repair services</h6>
              <p>
                Maintenance and repair services include:
                <ul>
                  <li>Emergency response repairs (e.g. fire damage repairs)</li>
                  <li>
                    Electrical power generation, protection and distribution
                    maintenance and repair
                  </li>
                  <li>
                    Rewinds (transformer, generator/alternator, electric motor)
                  </li>
                  <li>
                    Generator / Alternator control system service and
                    inspections
                  </li>
                </ul>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="blur"
              src=" https://www.crtsgroup.com/wp-content/uploads/2020/11/HV-Electrical-Substation-Pieve-Vergonte-Italy-1.jpeg "
              alt="slide"
            />
            <Carousel.Caption
              style={{ fontWeight: "bolder", fontSize: "20px" }}
            >
              <h3>Repurpose</h3>
              <p>Redesign, Reticulate, Replace or Repurpose</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Services;
