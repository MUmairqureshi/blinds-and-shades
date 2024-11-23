import React, { useEffect, useState } from "react";
import UserLayout from "../../components/Layout/userlayout";
import CustomBanner from "../../components/CustomBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomButton from "../../components/CustomButton";
import {
  blogImg01,
  blogImg02,
  blogImg03,
  blogImg04,
  blogImg05,
  blogImg06,
  blogImg07,
  blogImg08,
  blogImg09,
} from "../../asserts/images";
import "./style.css";
import api from "../../api/axiosInstance";
import { useNavigate } from "react-router";

const Blogs = () => {
  const navigate = useNavigate();
  const imgUrl = process.env.REACT_APP_IMG_URL;
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const myBlogs = await api.get("/blogs");
      setBlogs(myBlogs?.data?.data);
    } catch (error) {
      console.log("Error fetching blogs : ", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  console.log("blogs", blogs);
  return (
    <>
      <UserLayout>
        <CustomBanner text="blogs" />

        <section className="blogs_section">
          <Container>
            <Row>
              {blogs?.length > 0 &&
                blogs.map((item, index) => {
                  return (
                    <Col xs={12} sm={6} lg={4} key={index}>
                      <div className="main_blog_card">
                        <div className="blog_card_img">
                          <img
                            src={`${imgUrl}/${item.image}`}
                            alt="blog"
                            className="img-fluid"
                          ></img>
                        </div>

                        <div className="blog_card_content">
                          <p className="blog_card_title">{item.title}</p>

                          <p className="blog_card_para">
                            {item.short_description}
                          </p>

                          <div>
                            <CustomButton
                              type="button"
                              className="blog_actionBtn"
                              text="Read More"
                              onClick={() => navigate(`blog-detail/${item.slug}`)}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}

              {/* <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg02} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg03} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg04} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg05} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg06} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg07} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg08} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={6} lg={4}>
                <div className="main_blog_card">
                  <div className="blog_card_img">
                    <img src={blogImg09} alt="blog" className="img-fluid"></img>
                  </div>

                  <div className="blog_card_content">
                    <p className="blog_card_title">Lorem Ipsum Is Dummy</p>

                    <p className="blog_card_para">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industrys
                      standard dummy text ever since the when an unknown printer
                      took Lorem Ipsum is simply
                    </p>

                    <div>
                      <CustomButton
                        type="button"
                        className="blog_actionBtn"
                        text="Read More"
                        // onClick={() => navigate("/about")}
                      />
                    </div>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>
      </UserLayout>
    </>
  );
};

export default Blogs;
