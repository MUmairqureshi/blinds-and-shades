import React, { useEffect, useState } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  galleryImg01,
  galleryImg02,
  galleryImg03,
  galleryImg04,
  galleryImg05,
  galleryImg06,
  galleryImg07,
  galleryImg08,
  heroHeadingFlowerImg,
} from "../../asserts/images";
import CustomButton from "../CustomButton";
import api from "../../api/axiosInstance";

const Gallery = () => {
  const imgUrl = process.env.REACT_APP_IMG_URL
  const [images, setimages] = useState([])
  const getGallery = async () => {
    try {
      const response = await api.get("/gallery");
      console.log("response", response);
      setimages(response.data.data)
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getGallery();

  }, []);
console.log('images',images);
  return (
    <>
      <section className="image_gallery_section">
        <Container>
          <Row className="align-items-center pb-5">
            <Col lg={8} sm={6}>
              <div>
                <div className="d-flex align-items-center justify-content-start gap-3">
                  <h2 className="primaryHeading contactBlueHeading">
                    our Gallery
                  </h2>

                  <div className="heroHeadingImg03" bis_skin_checked="1">
                    <img src={heroHeadingFlowerImg} alt="hero"></img>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={4} sm={6}>
              <div className="text-right">
                <CustomButton
                  type="button"
                  className="yellowActionBtn"
                  text="View All"
                />
              </div>
            </Col>
          </Row>

        {images?.length>0 &&  <Row>
            <Col sm={6} lg={3} className="mb-3">
              <div className="moving_down_gallery">
                <div className="image_move_down">
                  <img
                    src={`${imgUrl}/${images[0]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                     src={`${imgUrl}/${images[1]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-3">
              <div>
                <div className="image_move_down">
                  <img
                     src={`${imgUrl}/${images[2]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                    src={`${imgUrl}/${images[3]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-3">
              <div className="moving_down_gallery">
                <div className="image_move_down">
                  <img
                     src={`${imgUrl}/${images[4]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                    src={`${imgUrl}/${images[5]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-3">
              <div>
                <div className="image_move_down">
                  <img
                    src={`${imgUrl}/${images[6]?.image}`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                     src={`${imgUrl}/${images[7]?.image ||images[0]?.image }`}
                    alt="gallery"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </Col>
          </Row>}
        </Container>
      </section>
    </>
  );
};

export default Gallery;
