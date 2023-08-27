import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import icon from "../assets/icon.png";
import { Fade } from "react-awesome-reveal";

export const Footer = () => {
  return (
    <div className="footer-bg mx-auto">
      <div className="footer-out mx-auto">
        <Fade up>
          {" "}
          <Container fluid className="footer-group mx-auto">
            <div className="footer-body  mx-auto">
              {" "}
              <div className="content">
                <Row className="footer-row  mx-auto">
                  <Col sm="4" xs="12" className="footer-img ">
                    <img src={icon} />
                  </Col>
                  <Col sm="2" xs="12">
                    <ul className="list">
                      <h4>Company</h4>
                      <li>About Us</li>
                      <li>Ambassadors</li>
                      <li>Privacy Policy</li>
                      <li>Terms of User</li>
                      <li>Careers</li>
                      <li>Blog</li>
                      <li>FAQ</li>
                    </ul>
                  </Col>
                  <Col sm="3" xs="6">
                    <ul>
                      <h4>Need Help</h4>
                      <li>support@wepay.com</li>
                    </ul>
                    <ul className=" my-5">
                      <h4>Social</h4>
                      <ul className="icons ">
                        <li>
                          <FaFacebookF className="icon" />
                        </li>
                        <li>
                          <GrInstagram className="icon" />
                        </li>
                        <li>
                          <FaGoogle className="icon" />
                        </li>
                      </ul>
                    </ul>
                  </Col>
                  <Col sm="2" xs="6">
                    <ul>
                      <h4>Location</h4>
                      <li>
                        4301 Forest Hill Ave,<br></br> Richmond VA, 23225
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br></br>Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                  </p>
                </Row>{" "}
              </div>
            </div>
          </Container>{" "}
        </Fade>
      </div>
    </div>
  );
};
