import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";
import { fadeInUp, fadeInDown, fadeIn } from "react-animations";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import logo from "../assets/logo.png";

export const NavPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="lg" className="nav p-3 pb-3 fixed-top" fixed="top" light>
        <NavbarBrand href="/" className="nav-img nav-group mx-5 ">
          <img src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto nav-group mx-5" navbar>
            <NavItem>
              <NavLink className="nav-text">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-text">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-text">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-text ">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <Button className="nav-btn">Join Our Community</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
