import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  anonymous,
  productsImg01,
  productsImg02,
  productsImg03,
  productsImg04,
} from "../../asserts/images";
import CustomButton from "../../components/CustomButton";
import "./style.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";

const BestProducts = ({ className, limit }) => {
  const imgUrl = process.env.REACT_APP_IMG_URL;

  const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const resp = await api.get("/products");

      console.log("resp", resp);
      setproducts(resp.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log("products", products);
  return (
    <>
      <section className="best_products_section">
        <Container>
          <Row className={`align-items-end ${className}`}>
            <Col xs={12} sm={12} lg={6}>
              <div>
                <div className="d-flex align-items-center justify-content-start gap-4">
                  <h2 className="primaryHeading">we provide</h2>
                </div>

                <div className="d-flex align-items-center justify-content-center gap-3">
                  <h2 className="primaryHeading">
                    the best <span className="productsBluefont">Products</span>
                  </h2>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} lg={6}>
              <div>
                <div className="anonymousImg">
                  <img src={anonymous} alt="anonymous"></img>
                </div>

                <p className="welcome_para m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid idunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exe rcitation
                  ullamco laboris nisi ut.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="pt-5 position-relative">
            <div className={`borders ${className}`}></div>

            <div className={`borders02 ${className}`}></div>
            {products.length > 0 &&
              products.slice(0, limit).map((item, id) => {
                return (
                  // <Col xs={10} sm={6} lg={3} className="mx-auto">
                  <Col lg={4} xl={3}>
                    <div className="main_product_card">
                      <div className="main_product_img">
                        <img
                          src={`${imgUrl}/${item.image}`}
                          className="img-fluid"
                          alt="productImg"
                        ></img>
                      </div>

                      <p className="product_card_heading">{item.name}</p>

                      <p className="product_card_detail_para">
                        {item.short_desc}
                      </p>

                      <div>
                        <CustomButton
                          type="button"
                          className="yellowActionBtn w-100 mb-2 px-2"
                          text="Request A Quote"
                        />
                      </div>

                      <div>
                        <CustomButton
                          type="button"
                          className="w-100 px-2"
                          text="View Product"
                          onClick={() => {
                            console.log("dddd", item.id);

                            navigate(`/product-detail/${item.id}`);
                          }}
                        />
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BestProducts;
