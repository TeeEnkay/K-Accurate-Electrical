import React from "react";
/*bootstrap*/
import { Carousel } from "react-bootstrap";
import "../App.css";
/* image imports */
import main1 from "./Images/main1.jpg";
import image2 from "./Images/image2.jpg";
import image3 from "./Images/image3.jpg";
import image4 from "./Images/image4.jpg";

let Home = () => {
  
  return (
    <div className="HomePage">
      <Carousel id="carousel1">
      <Carousel.Item>
          <img className="d"src = {image4} alt="First slide" />
          <Carousel.Caption>
            <h3>INNOVATION</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d"
            src= {image2}
            alt="2nd slide"
          />
          <Carousel.Caption>
            <h3>IDEAS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d" src = {image3} alt="third slide" />
          <Carousel.Caption>
            <h3>SKILLS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d"
            src={main1}
            alt="4th slide"
          />
          <Carousel.Caption>
            <h3>RESOURCES</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
};
export default Home;

{/*<Container className="img1" data-aos = "zoom-in">
        <figure className="position-relative">
          <img src={main1} alt="mainImage" className="img-fluid" />
          <figcaption>
            SKILLS || IDEAS ||INNOVATION || RESOURCES
            <br />
            <Button
              className="btn-info mt-3 btn-lg"
              href="tel: +27-73-509-8318"
            >
              <TelephoneFill />
              Call Us
            </Button>
          </figcaption>
        </figure>
      </Container>*/}
