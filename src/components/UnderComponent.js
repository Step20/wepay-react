import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

export const Under = () => {
  return (
    <div className="under-bg">
      <div className="under-out">
        <Fade>
          <Container className="under-group mx-auto">
            <div className="under-body  my-auto mx-auto">
              <Row className="icon-group  ">
                <Col sm="4" xs="12" className="icons ">
                  <BsFillArrowUpRightCircleFill className="icon" />
                  <div className="icon-text">
                    <h4>Send</h4>
                    <p>is simply dummy text of the printing and typesetting</p>
                  </div>
                </Col>
                <Col sm="4" xs="12" className="icons">
                  <BsFillArrowUpCircleFill className="icon" />
                  <div className="icon-text">
                    <h4>Spend</h4>
                    <p>is simply dummy text of the printing and typesetting</p>
                  </div>
                </Col>
                <Col sm="4" xs="12" className="icons">
                  <BsCheckCircleFill className="icon" />
                  <div className="icon-text">
                    <h4>Secure</h4>
                    <p>is simply dummy text of the printing and typesetting</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Fade>
      </div>
    </div>
  );
};
