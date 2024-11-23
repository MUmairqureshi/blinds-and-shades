import React from 'react'
import "./style.css"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import CustomButton from "../../components/CustomButton";
import { heroHeadingImg, heroHeadingFlowerImg, heroHeadingSunImg, heroSectionImg01, heroSectionImg02} from "../../asserts/images";
import "./style.css";

const Homehero = () => {
  return (
    <>
          <section className="best_blinds_section">
          <Container>
            <Row>
              <Col md={12}>
                <div className="pt-4 pb-3">
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <h2 className="primaryHeading">Find ThE Best</h2>

                    <div className="heroHeadingImg">
                      <img src={heroHeadingImg} alt="hero"></img>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-4 pt-2 moving_text_further">

                    <div className="heroHeadingImg02">
                      <img src={heroHeadingFlowerImg} alt="hero"></img>
                    </div>

                    <h2 className="primaryHeading">BLINDS & SHADES</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <div className='position-relative'>
            <div className="sunFlowerImg">
                    <img src={heroHeadingSunImg} alt="sunflower_icon"></img>
                  </div>
          <div className="hero_section_imgs">
            <Row>
              <Col sm={4} md={4} xs={4} lg={4}>
                <div className="d-flex justify-content-end h-100 flex-column left_hero_img">
                  <p className="hero_para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
                    mod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
                    quip ex ea commodo consequat uis aute irure dolor in repreh
                    enderit in voluptate velit esse.
                  </p>

                  <div>
                    <img src={heroSectionImg01} alt="" className="img-fluid"></img>
                  </div>
                </div>
              </Col>

              <Col xs={8} md={8} sm={8} lg={8}>
                <div className="position-relative h-100">
                  <div className='h-100'>
                    <img src={heroSectionImg02} alt="" className="img-fluid h-100"></img>
                  </div>
                  {/* <div className="sunFlowerImg">
                    <img src={heroHeadingSunImg} alt="sunflower_icon"></img>
                  </div> */}
                </div>
              </Col>
            </Row>
          </div>
          </div>

          


        </section>
    </>
  )
}

export default Homehero