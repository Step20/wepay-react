import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { NavPage } from "./NavComponent";
import { Fade } from "react-awesome-reveal";
import card1 from "../assets/card1.png";
import grey from "../assets/grey.png";

export const Card = () => {
  return (
    <div className="card-out">
      <Container className="card-group mx-auto">
        <Fade up>
          <Row className=" card-body  mx-auto">
            <Col className=" box  " sm="6" xs="12">
              <div className=" box-in  text-center">
                <img src={card1} />
              </div>
            </Col>
            <Col className=" text  my-5" sm="6" xs="12">
              <h1>
                Global <br></br>Mastercard
              </h1>
              <p>
                Lorem simply dummy text of the dummy text of the printing and
                text.
              </p>
              <div className="btn-group">
                <div className="btn">
                  <AiFillApple className="icon " />
                  <AiFillAndroid className="icon " />
                  <p className="my-auto ">Download Wepay</p>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
        <Fade up>
          <Row className=" card2  mx-auto">
            <Col className=" text  my-5" sm="6">
              <h1>
                Electronic <br></br>Mastercard
              </h1>
              <p>
                Lorem simply dummy text of the dummy text of the printing and
                text.
              </p>
              <div className="btn-group">
                <div className="btn">
                  <AiFillApple className="icon " />
                  <AiFillAndroid className="icon " />
                  <p className="my-auto ">Download Wepay</p>
                </div>
              </div>
            </Col>
            <Col className=" box " sm="6">
              <div className=" box-in  text-right ms-auto mx-3">
                <img src={grey} />
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};
