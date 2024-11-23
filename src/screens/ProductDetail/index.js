import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomBanner from "../../components/CustomBanner";
import UserLayout from "../../components/Layout/userlayout";
import "./style.css";
import {
  productDetailImg,
  productDetailImg02,
  productDetailImg03,
  productDetailImg04,
  productDetailImg05,
  productDetailImg06,
  circleImg,
  heartwithquestionMart,
  truck,
  productColorSelectionImg01,
  productColorSelectionImg02,
  productColorSelectionImg03,
  productColorSelectionImg04,
  productColorSelectionImg05,
  productColorSelectionImg06,
  productColorSelectionImg07,
  productColorSelectionImg08,
  productColorSelectionImg09,
  productColorSelectionImg10,
  insideShade,
  outsideShade,
  measure01,
  scale01,
  measure02,
  scale02,
  lift01,
  lift02,
  upgradeImg,
  paypal,
  warrantyIconImg,
  LikeImg01,
  LikeImg02,
  LikeImg03,
  LikeImg04,
  LikeImg05,
  LikeImg06,
} from "../../asserts/images";
import { useState } from "react";
import { json, Link, useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import RangeSlider from "../../components/Ruler/RulerSlider";
import { getEntity } from "../../api/commonServices";
import { imgUrl } from "../../utils/convertToFormData";
import { log, prod } from "mathjs";
import CustomModal from "../../components/CustomModal";
const fractionOptions = [
  { value: 0, label: "0" },
  { value: 0.125, label: "1/8" },
  { value: 0.25, label: "1/4" },
  { value: 0.375, label: "3/8" },
  { value: 0.5, label: "1/2" },
  { value: 0.625, label: "5/8" },
  { value: 0.75, label: "3/4" },
  { value: 0.875, label: "7/8" },
];
const roomName = [
  { id: 1, label: "Living Room" },
  { id: 2, label: "Bedroom" },
  { id: 3, label: "Kitchen" },
  { id: 4, label: "Bathroom" },
  { id: 5, label: "Dining Room" },
];
const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [disableSubmit, setdisableSubmit] = useState(true);
  const [showModal, setshowModal] = useState(false);
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [formData, setFormData] = useState({
    mount_type: "",
    guarantee: false,
    quantity: 1,
    customizations_selected: [],
  });

  const [heightSelected, setHeightSelected] = useState(0);
  const [widthSelected, setWidthSelected] = useState(0);
  const [heightFraction, setHeightFraction] = useState(0);
  const [widthFraction, setWidthFraction] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await getEntity(`product-details/${id}`);
        const formattedData = {
          ...response.data,
          color: response.data.color.map((item) => item.color),
          customizations_selected: response.data.addon.map(
            (item) => item.addon
          ),
          category: response.data.category.map((item) => item.category),
        };
        setProduct(formattedData);
        setSelectedColor(formattedData.color[0]);
        setSelectedImage(formattedData.color[0]?.primary_image);
        setHeightSelected(formattedData.height_min);
        setWidthSelected(formattedData.width_min);
        setFormData({
          ...response.data,
          height: formattedData.height_min,
          width: formattedData.width_min,
          customizations_selected: formattedData.customizations_selected,
        });
        console.log("formattedData", formattedData);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProduct();
  }, [id]);

  const createRangeArray = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const widthRangeArray = createRangeArray(
    product.width_min,
    product.width_max
  );
  const heightRangeArray = createRangeArray(
    product.height_min,
    product.height_max
  );

  const updateFractionalValue = (
    selectedValue,
    setFraction,
    setSelected,
    newFraction
  ) => {
    const integerPart = Math.floor(selectedValue);
    const updatedValue = integerPart + newFraction;
    setFraction(newFraction);
    setSelected(updatedValue);
  };

  const handleSliderChange = (value, setSelected, setFraction, name) => {
    const isWholeNumber = Number.isInteger(value);
    setFraction(isWholeNumber ? 0 : value % 1);
    setSelected(value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    const cartItems = localStorage.getItem("cartItem");

    const cartArray = JSON.parse(cartItems);
    if (Array.isArray(cartArray)) {
      const newCart = [...cartArray, formData];
      console.log("newCart", newCart);
      localStorage.setItem("cartItem", JSON.stringify(newCart));
    } else {
      const cartArray1 = [formData];
      localStorage.setItem("cartItem", JSON.stringify(cartArray1));
    }

    // cartArray.push(formData);

    // localStorage.setItem("cartItem", JSON.stringify(cartArray));
    setshowModal(true);

    setTimeout(() => navigate(-1), 2000);
  };

  console.log("mount_type", formData);
  // console.log("Cart Array", cartArray);

  return (
    <>
      <UserLayout>
        <CustomBanner text="product" />

        <section className="product_detail_section">
          <Container>
            <Row>
              <Col xs={12} sm={10} lg={6} className="mx-auto">
                <div className="main_product_images">
                  <div className="product_single_image">
                    <img
                      src={`${imgUrl}/${selectedImage}`}
                      alt="product"
                      className="img-fluid"
                      height={400}
                      width={400}
                    ></img>
                  </div>
                </div>

                <div className="thumbnail_images">
                  <div className="thumbnail-container">
                    {selectedColor?.variations?.map((image, index) => (
                      <img
                        key={index}
                        src={`${imgUrl}/${image}`}
                        alt={`Thumbnail ${index}`}
                        className={`thumbnail single_thumbnail_img ${
                          selectedImage == image ? "selected-img-border" : ""
                        }`}
                        onClick={() => setSelectedImage(image)}
                      />
                    ))}
                  </div>
                </div>
              </Col>

              <Col xs={12} sm={12} lg={6}>
                <div>
                  <div className="d-flex gap-2 align-items-baseline">
                    <div className="product_circle_img">
                      <img src={circleImg} alt="circle"></img>
                    </div>
                    <p className="product_card_heading text-uppercase p-0 title_with_circle">
                      essential
                    </p>
                  </div>

                  <div>
                    <h4 className="product_detail_title">{product.name}</h4>
                  </div>

                  <div className="for_rating"></div>

                  <div>
                    <h6 className="eligible_discounts_title">
                      Eligible Discounts:
                    </h6>

                    <div>
                      <span className="eligible_discount_percentage">
                        <span className="red_circle"></span> 45% Off $399+
                      </span>

                      <Link>
                        <span className="eligible_discounts_terms">Terms</span>
                      </Link>
                    </div>

                    <div>
                      <div className="d-flex gap-2 align-items-baseline ">
                        <h6 className="kid_friendly_title">kid friendly</h6>
                        <div className="heart_with_questionmark">
                          <img src={heartwithquestionMart} alt="heart"></img>
                        </div>
                      </div>

                      <div className="d-flex gap-2 align-items-center align-items-sm-baseline align-items-lg-baseline">
                        <div className="truck_img">
                          <img src={truck} alt="truck"></img>
                        </div>
                        <p className="m-0 kid_friendly_para">
                          {product.shipping_desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="product_detail_accordian">
                    <Accordion defaultActiveKey="0" className="pt-3">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Selected Color: Perfect White
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flex gap-2 align-items-end align-items-lg-center flex-wrap flex-sm-nowrap flex-lg-nowrap">
                            <span className="tip_circle">TIP</span>
                            <span className="free_sample_text">
                              For a true color comparison, please order a free
                              sample
                            </span>
                          </div>

                          <form>
                            <div className="all_color_selection_inputs">
                              {Array.isArray(product.color) &&
                                product.color.map((item, id) => (
                                  <div
                                    className="form-check p-0"
                                    onClick={() => {
                                      setFormData({
                                        ...formData,
                                        color_id: item.id,
                                      });
                                      setSelectedColor(item);
                                      setSelectedImage(item.variations[0]);
                                    }}
                                  >
                                    <div className="input_with_img">
                                      <input
                                        className="form-check-input color_selection_input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                      ></input>

                                      <img
                                        src={productColorSelectionImg02}
                                        alt="selectionImg"
                                        className="img-fluid"
                                      ></img>
                                    </div>
                                    <label
                                      className="form-check-label selection_input_name"
                                      for="flexRadioDefault2"
                                    >
                                      {item.title}
                                      <span className="input_free_sample_text">
                                        Free Sample
                                      </span>
                                    </label>

                                    {/* <span className='input_free_sample_text'>Free Sample</span> */}
                                  </div>
                                ))}
                            </div>
                          </form>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Measure Your Window</Accordion.Header>
                        <Accordion.Body>
                          <div className="window_first_box">
                            <div className="d-flex gap-2 heart_with_questionmark align-items-center pb-3">
                              <h6 className="kid_friendly_title mound_type text-capitalize">
                                Mount Type
                              </h6>
                              <img
                                src={heartwithquestionMart}
                                alt="heart"
                              ></img>
                            </div>

                            <div className="d-flex gap-4">
                              <div
                                className={`window_size_img ${
                                  formData.mount_type == "Inside"
                                    ? "window_size_img_border"
                                    : ""
                                }`}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    mount_type: "Inside",
                                  })
                                }
                              >
                                <img src={insideShade} alt="inside"></img>

                                <label
                                  className="form-check-label window_size_label"
                                  for=""
                                >
                                  Inside
                                </label>
                              </div>

                              <div
                                className={`window_size_img ${
                                  formData.mount_type == "Outside"
                                    ? "window_size_img_border"
                                    : ""
                                }`}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    mount_type: "Outside",
                                  })
                                }
                              >
                                <img src={outsideShade} alt="inside"></img>

                                <label
                                  className="form-check-label window_size_label"
                                  for=""
                                >
                                  Outside
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="window_first_box">
                            <div className="d-flex justify-content-between heart_with_questionmark align-items-center pb-3 flex-wrap gap-2">
                              <h6 className="kid_friendly_title mound_type text-capitalize">
                                Enter Measurements
                              </h6>
                              <button className="help_me_measure">
                                Help Me Measure
                              </button>
                            </div>

                            <div className="d-flex gap-2 align-items-end flex-wrap flex-sm-nowrap flex-lg-nowrap">
                              <span className="tip_circle">TIP</span>
                              <span className="free_sample_text">
                                Always reference{" "}
                                <Link>product specifications</Link> below before
                                measuring.
                              </span>
                            </div>

                            {/* <div>
                              <img
                                src="measure02"
                                alt="measure"
                                className="img-fluid"
                              />
                            </div> */}
                            <div className="my-5">
                              <div className="pt-2 my-3">
                                <span className="free_sample_text block">
                                  Width (inches)
                                </span>
                                <div className="d-flex gap-1">
                                  <select
                                    className="form-select window_size_selection"
                                    value={Math.floor(widthSelected)}
                                    onChange={(e) =>
                                      setWidthSelected(
                                        parseFloat(e.target.value) +
                                          widthFraction
                                      )
                                    }
                                    aria-label="Select width in inches"
                                  >
                                    {widthRangeArray.map((width) => (
                                      <option key={width} value={width}>
                                        {width}
                                      </option>
                                    ))}
                                  </select>
                                  <select
                                    className="form-select window_size_selection"
                                    value={widthFraction}
                                    onChange={(e) =>
                                      updateFractionalValue(
                                        widthSelected,
                                        setWidthFraction,
                                        setWidthSelected,
                                        parseFloat(e.target.value)
                                      )
                                    }
                                    aria-label="Select width fractions"
                                  >
                                    {fractionOptions.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div>
                                <RangeSlider
                                  onChange={(value) =>
                                    handleSliderChange(
                                      value,
                                      setWidthSelected,
                                      setWidthFraction,
                                      "width"
                                    )
                                  }
                                  max={product.width_max}
                                  min={product.width_min}
                                  val={widthSelected}
                                />
                              </div>
                            </div>
                            <div className="my-5">
                              <div className="pt-2 my-3">
                                <span className="free_sample_text block">
                                  Height (inches)
                                </span>
                                <div className="d-flex gap-1">
                                  <select
                                    className="form-select window_size_selection"
                                    value={Math.floor(heightSelected)}
                                    onChange={(e) =>
                                      setHeightSelected(
                                        parseFloat(e.target.value) +
                                          heightFraction
                                      )
                                    }
                                    aria-label="Select height in inches"
                                  >
                                    {heightRangeArray.map((height) => (
                                      <option key={height} value={height}>
                                        {height}
                                      </option>
                                    ))}
                                  </select>
                                  <select
                                    className="form-select window_size_selection"
                                    value={heightFraction}
                                    onChange={(e) =>
                                      updateFractionalValue(
                                        heightSelected,
                                        setHeightFraction,
                                        setHeightSelected,
                                        parseFloat(e.target.value)
                                      )
                                    }
                                    aria-label="Select height fractions"
                                  >
                                    {fractionOptions.map((option) => (
                                      <option
                                        key={option.value}
                                        value={option.value}
                                      >
                                        {option.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div>
                                <RangeSlider
                                  onChange={(value) =>
                                    handleSliderChange(
                                      value,
                                      setHeightSelected,
                                      setHeightFraction,
                                      "height"
                                    )
                                  }
                                  max={product.height_max}
                                  min={product.height_min}
                                  val={heightSelected}
                                />
                              </div>
                            </div>
                            <div className="gurantee_your_fit_main">
                              <h6 className="kid_friendly_title m-0">
                                Guarantee your FIT!
                              </h6>

                              <div>
                                <div className="form-check m-0">
                                  <input
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        guarantee_fit: e.target.checked,
                                      })
                                    }
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="ghtght"
                                  ></input>
                                  <label
                                    className="form-check-label measuring_protection"
                                    for="ghtght"
                                  >
                                    Add our Measuring Protection Guarantee{" "}
                                    <span className="zero_dollar">+$0</span>
                                  </label>
                                </div>
                              </div>

                              <div>
                                <Link className="what_is_it_text">
                                  What is it?
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="d-flex gap-2 heart_with_questionmark align-items-center py-3">
                            <h6 className="kid_friendly_title mound_type text-capitalize">
                              Room Name
                            </h6>
                            <img src={heartwithquestionMart} alt="heart"></img>
                          </div>

                          <div className="selection_with_input">
                            <select
                              className="form-select room_name_selection"
                              aria-label="Default select example"
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  room_name: e.target.value,
                                })
                              }
                            >
                              <option selected>Select</option>
                              {roomName.map((item) => (
                                <option value={item.label}>{item.label}</option>
                              ))}
                              {/* <option value="2">Two</option>
                              <option value="3">Three</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option> */}
                            </select>

                            <div className="extra_room_name">
                              <input
                                name="wall"
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    room_wall: e.target.value,
                                  })
                                }
                                type="text"
                                className="form-control"
                                id="random"
                                placeholder="Ex: West Wall"
                              ></input>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Customize Your Order
                        </Accordion.Header>
                        {/* <Accordion.Body>
                          <div>
                            <div className="window_first_box">
                              <div className="d-flex gap-2 heart_with_questionmark align-items-center pb-3">
                                <h6 className="kid_friendly_title mound_type text-capitalize">
                                  Lift Style
                                </h6>
                              </div>

                              <div className="d-flex gap-4 pl-3 flex-wrap flex-sm-nowrap flex-lg-nowrap ">
                                <div className="window_size_img">
                                  <img src={lift01} alt="inside"></img>

                                  <label
                                    className="form-check-label window_size_label"
                                    for=""
                                  >
                                    Cordless
                                  </label>

                                  <div>
                                    <span className="free_text">FREE</span>
                                  </div>

                                  <div className="d-flex gap-2 align-items-baseline">
                                    <h6 className="kid_friendly_title">
                                      kid friendly
                                    </h6>
                                    <div className="heart_with_questionmark">
                                      <img
                                        src={heartwithquestionMart}
                                        alt="heart"
                                      ></img>
                                    </div>
                                  </div>
                                </div>

                                <div className="window_size_img">
                                  <img src={lift02} alt="inside"></img>

                                  <label
                                    className="form-check-label window_size_label"
                                    for=""
                                  >
                                    Motorized Wand
                                  </label>

                                  <div>
                                    <span className="free_text text-decoration-line-through">
                                      $0
                                    </span>
                                  </div>

                                  <div>
                                    <span className="ten_percent_off_text">
                                      10% Off
                                    </span>
                                    <span className="free_text pl-2">$0</span>
                                  </div>

                                  <div className="my-3">
                                    <label className="m-0 lift_style_label pb-1">
                                      Wand Length
                                    </label>
                                    <select
                                      className="form-select lift_style_selection"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>

                                  <div className="my-3">
                                    <label className="m-0 lift_style_label pb-1">
                                      Wand Location
                                    </label>
                                    <select
                                      className="form-select lift_style_selection"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>

                                  <div className="my-3">
                                    <label className="m-0 lift_style_label pb-1">
                                      Wand Color
                                    </label>
                                    <select
                                      className="form-select lift_style_selection"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>

                                  <div className="my-3">
                                    <label className="m-0 lift_style_label pb-1 d-flex gap-1">
                                      Battery Charger
                                      <div className="heart_with_questionmark">
                                        <img
                                          src={heartwithquestionMart}
                                          alt="heart"
                                        ></img>
                                      </div>
                                    </label>
                                    <select
                                      className="form-select lift_style_selection"
                                      aria-label="Default select example"
                                    >
                                      <option selected>Select</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                    </select>
                                  </div>

                                  <div className="d-flex gap-2 align-items-baseline">
                                    <h6 className="kid_friendly_title">
                                      kid friendly
                                    </h6>
                                    <div className="heart_with_questionmark">
                                      <img
                                        src={heartwithquestionMart}
                                        alt="heart"
                                      ></img>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex gap-2 heart_with_questionmark align-items-center py-3">
                              <h6 className="kid_friendly_title mound_type text-capitalize">
                                Upgrades
                              </h6>
                            </div>

                            <div className="d-flex gap-4">
                              <div className="window_size_img">
                                <img src={upgradeImg} alt="inside"></img>

                                <label
                                  className="form-check-label window_size_label"
                                  for=""
                                >
                                  NEW
                                </label>

                                <div className="d-flex gap-2 align-items-baseline">
                                  <h6 className="kid_friendly_title">
                                    No Drill Blinds
                                  </h6>
                                  <div className="heart_with_questionmark">
                                    <img
                                      src={heartwithquestionMart}
                                      alt="heart"
                                    ></img>
                                  </div>
                                </div>

                                <div>
                                  <span className="free_text text-decoration-line-through">
                                    $0
                                  </span>
                                </div>

                                <div>
                                  <span className="ten_percent_off_text">
                                    10% Off
                                  </span>
                                  <span className="free_text pl-2">$0</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body> */}
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <div className="coupon_with_payment">
                    <div className="coupon_box">
                      <p className="coupon_title">Coupon:</p>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="coupon"
                        ></input>
                        <label
                          className="form-check-label coupon_text"
                          for="coupon"
                        >
                          Apply{" "}
                          <span className="coupon_discount_bold">
                            45% Off $0
                          </span>{" "}
                          coupon
                        </label>
                        <Link className="coupon_terms">Terms</Link>
                      </div>
                    </div>

                    <div className="quantity_quote">
                      <div className="qty_with_selection">
                        <div className="d-flex align-items-center gap-2">
                          <span className="qty_text">Qty</span>
                          <select
                            className="form-select qty_text_selection"
                            aria-label="Default select example"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                quantity: e.target.value,
                              })
                            }
                          >
                            {Array.from({ length: 6 }, (item, id) => ({
                              lable: id + 1,
                              value: id + 1,
                            })).map((item) => (
                              <option value={item.value}>{item.lable}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <button
                            className="request_actionBtn"
                            onClick={() => handleSubmit()}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>

                      <div>
                        <span className="interest_free">
                          Pay in 4 interest-free payments of $14.25 with{" "}
                        </span>
                        <img
                          src={paypal}
                          alt="paypal"
                          className="paypalImg"
                        ></img>
                        <span>
                          <Link className="learn_more_about_interest">
                            Learn more
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="main_warranty_box">
                    <div className="warranty_box_head">
                      <div className="warranty_icon_img">
                        <img src={warrantyIconImg} alt="icon"></img>
                      </div>

                      <div>
                        <h6 className="kid_friendly_title">
                          Warranty Options{" "}
                        </h6>
                      </div>

                      <div>
                        <Link className="coupon_terms">Details</Link>
                      </div>
                    </div>

                    <div className="single_warranty_info">
                      <div>
                        <span className="window_size_label">
                          3-Year Limited Warranty
                        </span>
                      </div>

                      <div>
                        <span className="free_text">FREE</span>
                      </div>
                    </div>

                    <div className="single_warranty_info">
                      <div>
                        <span className="window_size_label">
                          5-Year Limited Warranty
                        </span>
                      </div>

                      <div>
                        <span className="free_text">$0</span>
                      </div>
                    </div>

                    <div className="single_warranty_info">
                      <div>
                        <span className="window_size_label">
                          5-Year Unlimited Warranty
                        </span>
                      </div>

                      <div>
                        <span className="free_text">$0</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div className="accordian_below_product_details">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Product Information</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Specifications</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Measure and Install</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Shipping & Production</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Reviews</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <div>
                  <div>
                    <h4 className="product_detail_title like_title">
                      You May Also Like
                    </h4>
                  </div>

                  <div>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={20}
                      loop={true}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        300: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        425: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        600: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        990: {
                          slidesPerView: 6,
                          spaceBetween: 20,
                        },
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg01}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Light Filtering Cellular Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Cellular Shades</h6> */}
                            <span className="like_products_discount">
                              45% Off $399+
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg02}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Blackout Cellular Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Cellular Shades</h6> */}
                            <span className="like_products_discount">
                              45% Off $399+
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg03}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Light Filtering Top Down Bottom Up Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Top Down Bottom Up Shades</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg04}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Blackout Top Down Bottom Up Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Top Down Bottom Up Shades</h6> */}
                            <span className="like_products_discount">
                              45% Off $399+
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg05}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Select Light Filtering Cellulars
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Top Down Bottom Up Shades</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg06}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Select Blackout Cellulars
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Top Down Bottom Up Shades</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg01}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Light Filtering Cellular Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Cellular Shades</h6> */}
                            <span className="like_products_discount">
                              45% Off $399+
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg02}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Blackout Cellular Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Cellular Shades</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div>
                          <div>
                            <img
                              src={LikeImg03}
                              alt="likeImg"
                              className="img-fluid"
                            ></img>
                          </div>

                          <div>
                            <h6 className="you_may_like_product_title">
                              Cordless Light Filtering Top Down Bottom Up Shades
                            </h6>
                            {/* <h6 className='you_may_like_product_title02'>Top Down Bottom Up Shades</h6> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <CustomModal
          show={showModal}
          close={() => setshowModal(false)}
          success={true}
          heading={"product added to cart"}
        />
      </UserLayout>
    </>
  );
};

export default ProductDetail;
