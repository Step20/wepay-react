import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import ScrollToTop from "react-scroll-to-top";
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { Link } from "react-scroll";
import phone from "../assets/boxp.png";
import p from "../assets/e (5).png";
import p2 from "../assets/e (2).png";
import p3 from "../assets/e (3).png";
import p4 from "../assets/e (4).png";
import { Fade } from "react-awesome-reveal";

export const Box = () => {
  return (
    <div className="box-out mx-auto">
      <Container className="box-group mx-auto">
        <div className="box-up mx-auto">
          <Row>
            <Col className="text-center mx-auto my-5">
              <h1>
                Lorem simply dummy text of the printing and typesetting
                industry. Lorem Ipsum typesetting industry. Lorem Ipsum
                typesetting the
              </h1>
            </Col>
          </Row>
        </div>
        <div className="box-down mx-auto">
          <Row>
            <Col sm="12" className=" mx-auto">
              <div className="box-out  mx-auto">
                <div className="box  mx-auto">
                  <div className="box-con">
                    <div className="box-text me-auto mx-4">
                      <h4>
                        USD, GBP, EUR<br></br> bank accounts free
                      </h4>
                      <p>
                        Wepay simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                      </p>
                      <div className="btn-group">
                        <div className="btn">
                          <AiFillApple className="icon " />
                          <AiFillAndroid className="icon " />
                          <p>Download Wepay</p>
                        </div>
                      </div>
                    </div>
                    <div className="box-img mt-auto">
                      <img src={phone} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="7">
              <div className="box2 ">
                <div className="box-con">
                  <div className="box-text">
                    <h1>
                      Send cash to<br></br>
                      family & friends
                    </h1>
                    <p>
                      Wepay simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text standard
                    </p>
                  </div>
                </div>
                <div className="box-down ">
                  <div className="box-con mx-auto text-center">
                    <h4>Transfer</h4>
                    <div className="imgs my-3">
                      <img src={p3} />
                      <img src={p} className="img " />
                      <img src={p2} />
                    </div>
                    <h3>$370.00</h3>
                    <p>You have successfully sent.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="5" className=" out">
              <div className="box3-out">
                <div className="box3">
                  <div className="box-con">
                    <div className="box-text">
                      <h1>
                        Transfer funds<br></br>
                        internationally
                      </h1>
                      <p>
                        Wepay simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                    <div className="box-down ">
                      <div className="box-con  mx-auto text-center">
                        <h4>Transfer</h4>
                        <div className="imgs my-3">
                          <img src={p4} />
                        </div>
                        <h3>€1250.00</h3>
                        <p>You have received money from Kayla.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
