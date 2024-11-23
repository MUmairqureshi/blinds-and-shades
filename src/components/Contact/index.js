import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import { heroHeadingFlowerImg, anonymous } from "../../asserts/images";
import CustomButton from "../CustomButton";
import api from "../../api/axiosInstance";

const Contact = (props) => {
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }
    setloading(true);
    try {
      const response = await api.post(`/submit-query`, form);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);

      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <section className={`contact_us_section ${props.className}`}>
        <Container>
          <div className="contact_form_bk">
            <Row>
              <Col sm={12} lg={6}>
                <div>
                  <p className="product_card_heading">Contact Us</p>

                  <div className="d-flex align-items-center justify-content-start gap-4">
                    <h2 className="primaryHeading contactBlueHeading smaller_font">
                      Make us Your #1
                    </h2>
                  </div>

                  <div className="d-flex align-items-center justify-content-start gap-3 pl-3">
                    <div className="heroHeadingImg03">
                      <img src={heroHeadingFlowerImg} alt="hero"></img>
                    </div>
                    <h2 className="primaryHeading contactBlueHeading contactSmallHeading">
                      Choice For Blinds & SHADES
                    </h2>
                  </div>

                  <p className="contact_us_para pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>

                  <p className="contact_us_para">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>

                  <div className="contact_btn_with_img d-flex justify-content-between align-items-center">
                    <div className="">
                      <CustomButton
                        type="button"
                        className="yellowActionBtn"
                        text="Read More"
                      />
                    </div>

                    <div className="anonymousImg">
                      <img src={anonymous} alt="contact"></img>
                    </div>
                  </div>
                </div>
              </Col>

              <Col sm={12} lg={6} className="mx-auto">
                <div className="main_contact_form">
                  <h4 className="contact_secondary_heading">
                    Get A Free Estimate
                  </h4>

                  <form onSubmit={handleSubmit}>
                    <div className=" pt-3">
                      <input
                        name="username"
                        type="text"
                        className="form-control custom_input"
                        id="exampleFormControlInput1"
                        placeholder="Full Name*"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <input
                        name="phone"
                        type="number"
                        className="form-control custom_input"
                        id="exampleFormControlInput11"
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <input
                        name="email"
                        type="email"
                        className="form-control custom_input"
                        id="exampleFormControlInput111"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <input
                        name="budget"
                        type="number"
                        className="form-control custom_input"
                        id="exampleFormControlInput1111"
                        placeholder="Project Budget*"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="">
                      <textarea
                        name="message"
                        className="form-control custom_input"
                        id="exampleFormControlTextarea1"
                        rows="6"
                        placeholder="Project Description*"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="">
                      <CustomButton
                        type="submit"
                        className="yellowActionBtn contact_form_submit_actionBtn w-100"
                        text="Submit"
                        loading={loading}
                      />
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
