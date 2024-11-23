import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import {heroHeadingFlowerImg, welcomeImg01, plusLogo, dollarLogo, welcomeImg02, arrowImg } from "../../asserts/images";
import "./style.css";

const Welcome = () => {
  return (
    <>
         <section className="welcome_section">
        <Container>
          <Row>
            <Col sm={10} lg={5} className='mx-auto order-1 order-sm-1 order-lg-0'>
              <div>
                <img src={welcomeImg01} alt="welcomeImg01" className="img-fluid"></img>
              </div>
            </Col>

            <Col sm={12} lg={7} className='order-0 order-sm-0 order-lg-1'>
              <div className="d-flex h-100 flex-column justify-content-center">
                  <div className="d-flex align-items-center justify-content-start gap-4">
                    <h2 className="primaryHeading">welcome to</h2>

                  </div>
                          
                    <div className="d-flex align-items-center justify-content-center gap-3">

                    <div className="heroHeadingImg03">
                      <img src={heroHeadingFlowerImg} alt="hero"></img>
                    </div>

                      <h2 className="primaryHeading font_yellow_color">BLINDSNSHADES</h2>
                    </div>

                    <p className="welcome_para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

              </div>
            </Col>
          </Row>

          <Row className="justify-content-between">
          <Col sm={6} lg={8}>
              <div>
              
                <div className="welcome_counts_container">
                    <div>
                      <div className="d-flex align-items-lg-center gap-1 align-items-sm-start">
                        <h4 className="secondary_heading">800</h4>
                        <span className="plusIconImg">
                          <img src={plusLogo} alt="plus"></img>
                        </span>
                      </div>
                      <p className="total_counts_para">Total Projects</p>
                    </div>

                    <div>
                      <div className="d-flex align-items-lg-center gap-1 align-items-sm-start">
                        <span className="dollarIconImg">
                          <img src={dollarLogo} alt="plus"></img>
                        </span>
                        <h4 className="secondary_heading">200m</h4>
                      </div>
                      <p className="total_counts_para">Revenue Earned All Time</p>
                    </div>

                    <div>
                      <div className="d-flex align-items-lg-center gap-1 align-items-sm-start">
                        <h4 className="secondary_heading">500</h4>
                        <span className="plusIconImg">
                          <img src={plusLogo} alt="plus"></img>
                        </span>
                      </div>
                      <p className="total_counts_para">Client's Feeedback</p>
                    </div>
                </div>

                    <p className="welcome_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="yellowActionBtn"
                        text="Read More"
                      />
                    </div>

              </div>
            </Col>

            <Col xs={5} sm={5} lg={3} className='mx-auto'>
              <div className="welcome_right_img_box">
                <div className="welocme_right_img">
                  <img src={welcomeImg02} alt="sideImg" className="img-fluid"></img>
                </div>

                <div className="main_svg_with_arrow">
                  <div className="svg_with_arrow">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path id="circle"
                      d="
                        M 50, 50
                        m -37, 0
                        a 37,37 0 1,1 74,0
                        a 37,37 0 1,1 -74,0"/>
                  </defs>
                  <text fontSize="16">
                    <textPath xlinkHref="#circle">
                      All Best Services View
                    </textPath>
                  </text>
                </svg>
                <div className="arrowImageIcon">
                  <img src={arrowImg} alt="arrow_img"></img>
                </div>
                  </div>

                </div>
               
              </div>
              
            </Col>
          </Row>
        </Container>
        </section>
    </>
  )
}

export default Welcome