import React from "react";
import UserLayout from "../../components/Layout/userlayout";
import CustomBanner from "../../components/CustomBanner";
import Welcome from "../../components/Welcome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { aboutImg03 } from "../../asserts/images";


const About = () => {
  return (
    <>
        <UserLayout>

        <CustomBanner text="about us"/>

        <Welcome/>

          <Container className="pb-5">
                <Row className="align-items-center">
                    <Col sm={10} lg={6} className="mx-auto">
                      <div>
                        <div>
                          <img src={aboutImg03} alt="first" className="img-fluid"></img>
                        </div>

                      </div>
                    </Col>

                    <Col sm={12} lg={6}>
                      <div>
                      <p className="welcome_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p className="welcome_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                      </div>
                    </Col>
                </Row>
            </Container>

        </UserLayout>
    </>
  )
}

export default About