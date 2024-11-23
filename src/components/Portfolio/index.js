import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { heroHeadingFlowerImg } from "../../asserts/images";
import "./style.css";
import CustomButton from "../../components/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import {
  portfolioImg01,
  portfolioImg02,
  portfolioImg03,
} from "../../asserts/images";
import api from "../../api/axiosInstance";

const Portfolio = (props) => {
  const imgUrl = process.env.REACT_APP_IMG_URL;

  const [portfolioData, setportfolioData] = useState([]);
  const getPortfolio = async () => {
    try {
      const response = await api.get("/portfolio");
      console.log("response", response);
      setportfolioData(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getPortfolio();
  }, []);
  console.log("portfolioData", portfolioData);
  return (
    <>
      {/* portfolio_section */}
      <section className="portfolio_section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs={8} sm={8} lg={6}>
              <div>
                <div className="d-flex align-items-center justify-content-start gap-4">
                  <h2 className="primaryHeading font_white_color">
                    Our Project
                  </h2>
                </div>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <div className="heroHeadingImg03">
                    <img src={heroHeadingFlowerImg} alt="hero"></img>
                  </div>

                  <h2 className="primaryHeading font_white_color">Portfolio</h2>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={4} lg={4} className="text-right">
              <div>
                <div>
                  <CustomButton
                    type="button"
                    className="yellowActionBtn"
                    text="View All"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* portfolio_custom_swiper */}
      <div className={`portfolio_custom_swiper ${props?.className}`}>
        <Swiper
          // slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[]}
          className="mySwiper"
        >
          {portfolioData?.length > 0 &&
            portfolioData.map((item, ind) => {
              return (
                <SwiperSlide>
                  <div className="portfolioImg">
                    <img
                      src={`${imgUrl}/${item.image}`}
                      alt="portfolio01"
                      className="img-fluid"
                    ></img>

                    <div className="detailBox_under_swiper">
                      <div>
                        <p className="heading_under_swiper">{item.title}</p>
                        <p className="para_under_swiper">{item.description}</p>

                        <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                          <CustomButton
                            type="button"
                            className="actionBtn_under_swiper"
                            text="Roller Shades"
                          />

                          <CustomButton
                            type="button"
                            className="actionBtn_under_swiper"
                            text="Cellular Shades"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          {/* <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg01}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg02}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg03}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg01}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg02}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolioImg">
              <img
                src={portfolioImg03}
                alt="portfolio01"
                className="img-fluid"
              ></img>

              <div className="detailBox_under_swiper">
                <div>
                  <p className="heading_under_swiper">
                    Lorem ipsum is a dummy text
                  </p>
                  <p className="para_under_swiper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>

                  <div className="d-flex gap-2 flex-sm-wrap flex-wrap flex-lg-nowrap">
                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Roller Shades"
                    />

                    <CustomButton
                      type="button"
                      className="actionBtn_under_swiper"
                      text="Cellular Shades"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
