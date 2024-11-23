import React, { useState } from "react";
import UserLayout from "../../components/Layout/userlayout";
import Registration from "../../components/Registration";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();
  const [activeSectionPart, setActiveSectionPart] = useState("Register");

  const handleToggleSection = (section) => {
    setActiveSectionPart(section);
  };

  return (
    <>
      <UserLayout>
        <section className="login_section">
          <Container>
            <Row>
              <Col sm={10} lg={6} className="mx-auto">
                <div className="main_login">
                  <div className="login_register_actionBtns">
                    <button
                      className={`user_login_btn ${
                        activeSectionPart === "login" ? "buttonActive" : ""
                      }`}
                      onClick={() => {
                        handleToggleSection("login");
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                    <button
                      className={`user_login_btn ${"buttonActive"}`}
                      onClick={() => {
                        handleToggleSection("register");
                        navigate("/registration");
                      }}
                    >
                      Register
                    </button>
                  </div>

                  <div className="py-4">
                    <Registration />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </UserLayout>
    </>
  );
};

export default Register;
