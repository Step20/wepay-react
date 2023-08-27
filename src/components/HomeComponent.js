import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import { NavPage } from "./NavComponent";
import phone from "../assets/phone.png";
import card from "../assets/cards.png";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <div className="home-out">
      <NavPage />
      <Container fluid className="home-group">
        <div className="home-up mx-auto">
          <Fade up>
            <Row>
              <Col className="text-center home-title mx-auto">
                <h1>
                  <span className="title-blue"> Transformed</span>
                  <br></br>Your Banking
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="text-center home-desc">
                <p>Simple, Secure, and Convenient.</p>
              </Col>
            </Row>
            <Row>
              <Col className="text-center home-btn">
                <div className="btn">
                  <AiFillApple className="icon " />
                  <AiFillAndroid className="icon " />
                  <p>Get our app</p>
                </div>
              </Col>
            </Row>
          </Fade>
        </div>

        <div className=" home-down ">
          <div className="review mx-5 ">
            <div className="review-l ">
              <ul className="  ">
                <li>
                  <AiFillStar className="icon" />
                </li>
                <li>
                  <AiFillStar className="icon" />
                </li>
                <li>
                  <AiFillStar className="icon" />
                </li>
                <li>
                  <AiFillStar className="icon" />
                </li>
                <li>
                  <AiFillStar className="icon" />
                </li>
              </ul>
              <h4 className="text-center">500+</h4>
            </div>
            <div className="review-r mx-4 my-1">
              <p>
                5 STARS<br></br>
                CUSTOMER<br></br>
                REVIEW
              </p>
            </div>
          </div>

          <div className="card   mx-auto ">
            <div className="card-b text-center ">
              <img src={card} className=" " />
            </div>
          </div>
          <div className="img   ">
            <div className="img-phone  text-center">
              <img src={phone} />
            </div>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};
