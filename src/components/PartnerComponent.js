import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { NavPage } from "./NavComponent";
import { Fade } from "react-awesome-reveal";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import brand from "../assets/brand.png";

export const Partner = () => {
  return (
    <div className="partner-out">
      <Container className="partner-group mx-auto text-center">
        <Fade>
          {" "}
          <Row className="partner-text mx-auto text-center">
            <Col xs="12">
              <h1>
                What are your waiting for? Download the{" "}
                <span style={{ color: "#569AFF" }}>Wepay</span> app & get
                started now.
              </h1>
            </Col>
            <Col sm="12" className="mx-auto  text-center">
              <img src={apple} />

              <img src={google} />
            </Col>
          </Row>{" "}
        </Fade>{" "}
        <Fade up>
          <Row className="partner">
            <h1>Partnerships with</h1>
            <img src={brand} />
          </Row>
        </Fade>
      </Container>
    </div>
  );
};
