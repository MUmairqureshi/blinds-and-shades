import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { mainLogo } from "../../../asserts/images";
import CustomButton from "../../CustomButton";
import api from "../../../api/axiosInstance";
import CustomModal from "../../CustomModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [login, setLogin] = useState();

  const navigate = useNavigate();
  const logout = async () => {
    try {
      const resp = await api.post("/logout");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setShowModal(true);
    } catch (error) {
      console.log("error", error);
    }
  };
  const token = localStorage.getItem("accessToken");
  useEffect(() => {
    setLogin(token);
  }, [token]);

  return (
    <header>
      <Navbar expand="lg" className="pb-0">
        <Container className="border-bottom pb-3">
          <Navbar.Brand href="#" as={Link} to="/" className="mainLogoImg">
            <img src={mainLogo} alt="site_logo"></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/portfolio">
                portfolio
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/shop">
                shop
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/blogs">
                blogs
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/contact-us">
                contact us
              </Nav.Link>
              <Nav.Link as={Link} href="#" to="/account">
                Account
              </Nav.Link>
            </Nav>

            <div className="d-flex justify-content-sm-center justify-content-center justify-content-lg-start">
              <CustomButton
                type="button"
                className=""
                text={login ? "logout" : "login"}
                onClick={() => (login ? logout() : navigate("/login"))}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        success={true}
        heading="user Logged Out"
      />
    </header>
  );
};

export default Header;
