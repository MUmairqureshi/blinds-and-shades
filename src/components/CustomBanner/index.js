import React, { useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  heroHeadingFlowerImg,
  customBannerImg01,
  customBannerImg02,
  heroHeadingSunImg,
} from "../../asserts/images";

const CustomBanner = (props) => {
  return (
    <>
      <section className={`customBanner_section ${props?.className}`}>
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={12}>
              <div className="customBannerHeading">
                <div className="sunFlowerImg heading_with_Img">
                  <img src={heroHeadingSunImg} alt="sun"></img>
                </div>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="heroHeadingImg03" bis_skin_checked="1">
                    <img src={heroHeadingFlowerImg} alt="hero"></img>
                  </div>

                  <h2 className="primaryHeading contactBlueHeading">
                    {props?.text}
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="customBanner_main_box">
          <Row>
            <Col xs={6} sm={6} lg={6}>
              <div className="h-100">
                <img
                  src={customBannerImg01}
                  alt="banner"
                  className="img-fluid w-100 h-100"
                ></img>
              </div>
            </Col>

            <Col xs={6} sm={6} lg={6}>
              <div className="h-100">
                <img
                  src={customBannerImg02}
                  alt="banner"
                  className="img-fluid h-100"
                ></img>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default CustomBanner;
