import React, { useState } from "react";
import UserLayout from "../../components/Layout/userlayout";
import ForgotPassworddd from "../../components/Registrationcopy/ForgotPassworddd";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router";
const ForgotPassword = () => {
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
                  <div className="py-4">
                    <ForgotPassworddd />
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

export default ForgotPassword;
