import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { loginUser, resetAuthState } from "../../redux/slices/authSlice";
import CustomModal from "../../components/CustomModal/index";
import UserLayout from "../../components/Layout/userlayout";
import CustomBanner from "../../components/CustomBanner";

import "./style.css";
import { updateEntity } from "../../api/commonServices";

const Checkout = () => {
  const navigate = useNavigate();
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(1);
  const [createAccount, setCreateAccount] = useState(0);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItem"))
  );
  console.log("Cart Items", cartItems);

  const handleSelectChange = (event) => {
    setIsBillingAddressSame(event.target.value);
  };
  const handleCreateAccountSelect = (event) => {
    setCreateAccount(event.target.value);
  };

  const dispatch = useDispatch();
  const [modalText, setmodalText] = useState("");
  const [successs, setsuccesss] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [modalHeading, setModalHeading] = useState("");
  const [addState, setAddState] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(false);

  const { login } = useAuth();
  const { user, loading, error, token, success } = useSelector(
    (state) => state.auth
  );
  // Create a ref for the form
  const formRef = useRef();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // Convert FormData to a plain object
    const data = Object.fromEntries(formData.entries());
    data.order_items = cartItems;
    data.total_price = 150;
    const formDataa = new FormData();
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((value, index) => {
          formDataa.append(`${key}[${index}]`, JSON.stringify(value));
        });
      } else {
        formDataa.append(key, data[key]);
      }
    }

    try {
      const response = await updateEntity("/checkout", formDataa);
      setModalHeading(response.message);
      setApiSuccess(true);
      setAddState(true);
      console.log("response", response);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    } catch (error) {
      console.log("error", error);
      setsuccesss(false);
      setmodalText("error !");
      setShowModal(true);
    }
    // dispatch(loginUser(formData));
  };

  const accessTokenExists = localStorage.getItem("accessToken") !== null;

  // useEffect(() => {
  //   if (success) {
  //     console.log("sucessssssss");
  //     setmodalText("User LoggedIn SuccessFully");
  //     setShowModal(true);
  //     setTimeout(() => navigate("/"), 800);
  //     dispatch(resetAuthState());
  //   } else if (success != null) {
  //     console.log("nottttsucessssssss", error);

  //     setmodalText(error.message);

  //     setShowModal(true);
  //     dispatch(resetAuthState());
  //   }
  //   return () => {
  //     dispatch(resetAuthState());
  //   };
  // }, [success]);
  // console.log("error", error, success);

  return (
    <UserLayout>
      <CustomBanner text="Checkout" className="checkout_banner" />
      <section className="checkout_formSec">
        <div className="container">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingFname"
                    className="form-label login_label"
                  >
                    First name
                    <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_first_name"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingFname"
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingLname"
                    className="form-label login_label"
                  >
                    Last Name <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_last_name"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingLname"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingAddress"
                    className="form-label login_label"
                  >
                    Shipping Address <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_address"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingAddress"
                    placeholder="Shipping Address"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingApt"
                    className="form-label login_label"
                  >
                    Shipping Apartment <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_apt"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingApt"
                    placeholder="Shipping Apartment"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingCity"
                    className="form-label login_label"
                  >
                    Shipping City <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_city"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingCity"
                    placeholder="Shipping City"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingState"
                    className="form-label login_label"
                  >
                    Shipping State <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_state"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingState"
                    placeholder="Shipping State"
                    maxlength="10"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingZipcode"
                    className="form-label login_label"
                  >
                    Shipping Zipcode <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_zipcode"
                    type="number"
                    className="form-control register_custom_input"
                    id="shippingZipcode"
                    placeholder="Shipping Zipcode"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="isBillingSddressSame"
                    className="form-label login_label"
                  >
                    Is Billing Address Same{" "}
                    <span className="yellow_star">*</span>
                  </label>
                  {/* <input
                    name="is_billing_address_same"
                    type="text"
                    className="form-control register_custom_input"
                    id="isBillingSddressSame"
                    placeholder="Is Billing Address Same"
                    required
                  /> */}
                  <select
                    class="custom-select form-control register_custom_input"
                    name="is_billing_address_same"
                    id="isBillingSddressSame"
                    onChange={handleSelectChange}
                    required
                  >
                    <option disabled>Is Billing Address Same</option>
                    <option value={1} selected>
                      Yes
                    </option>
                    <option value={0}>No</option>
                  </select>
                </div>
              </div>
              {isBillingAddressSame == 0 && (
                <>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingFirstName"
                        className="form-label login_label"
                      >
                        Billing First Name{" "}
                        <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_first_name"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingFirstName"
                        placeholder="Billing First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingLastName"
                        className="form-label login_label"
                      >
                        Billing Last Name <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_last_name"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingLastName"
                        placeholder="Billing Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingAddress"
                        className="form-label login_label"
                      >
                        Billing Address <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_address"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingAddress"
                        placeholder="Billing Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingApt"
                        className="form-label login_label"
                      >
                        Billing Apartment <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_apt"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingApt"
                        placeholder="Billing Apartment"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingCity"
                        className="form-label login_label"
                      >
                        Billing City <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_city"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingCity"
                        placeholder="Billing City"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingState"
                        className="form-label login_label"
                      >
                        Billing State <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_state"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingState"
                        placeholder="Billing State"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingZipCode"
                        className="form-label login_label"
                      >
                        Billing Zipcode <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="billing_zipcode"
                        type="number"
                        className="form-control register_custom_input"
                        id="billingZipCode"
                        placeholder="Billing Zipcode"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="shippingMethod"
                    className="form-label login_label"
                  >
                    Shipping Method <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="shipping_method"
                    type="text"
                    className="form-control register_custom_input"
                    id="shippingMethod"
                    placeholder="Shipping Method"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="billingEmail"
                    className="form-label login_label"
                  >
                    Email <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control register_custom_input"
                    id="billingEmail"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="billingPhone"
                    className="form-label login_label"
                  >
                    Phone <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="phone"
                    type="number"
                    className="form-control register_custom_input"
                    id="billingPhone"
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="payment_method_type"
                    className="form-label login_label"
                  >
                    Payment Method <span className="yellow_star">*</span>
                  </label>
                  {/* <input
                    name="payment_method_type"
                    type="text"
                    className="form-control register_custom_input"
                    id="paymentMethod"
                    placeholder="Payment Method"
                    required
                  /> */}
                  <select
                    class="custom-select form-control register_custom_input"
                    name="payment_method_type"
                    id="payment_method_type"
                    required
                  >
                    <option selected disabled value="">
                      Payment Method type
                    </option>
                    <option value="other">Paypal</option>
                    <option disabled value="googla_pay">
                      Google Pay
                    </option>
                    <option disabled value="credit_card">
                      Credit Card
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label
                    htmlFor="orderAmount"
                    className="form-label login_label"
                  >
                    Order Amount <span className="yellow_star">*</span>
                  </label>
                  <input
                    name="order_amount"
                    type="number"
                    className="form-control register_custom_input"
                    id="orderAmount"
                    placeholder="Order Amount"
                    required
                  />
                </div>
              </div>

              {!accessTokenExists && (
                <div className="col-md-4">
                  <div className="mb-3">
                    <label
                      htmlFor="isBillingSddressSame"
                      className="form-label login_label"
                    >
                      Create Account <span className="yellow_star">*</span>
                    </label>
                    <select
                      class="custom-select form-control register_custom_input"
                      name="create_account"
                      id="isBillingSddressSame"
                      onChange={handleCreateAccountSelect}
                      value={accessTokenExists ? 0 : createAccount}
                      required
                    >
                      <option disabled selected>
                        Do you want to create Account
                      </option>
                      <option value={1}>Yes</option>
                      <option value={0}>No</option>
                    </select>
                  </div>
                </div>
              )}

              {createAccount == 1 && (
                <>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="billingFirstName"
                        className="form-label login_label"
                      >
                        Password <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="password"
                        type="text"
                        className="form-control register_custom_input"
                        id="billingFirstName"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label
                        htmlFor="passwordConfirmation"
                        className="form-label login_label"
                      >
                        Confirm Password <span className="yellow_star">*</span>
                      </label>
                      <input
                        name="password_confirmation"
                        type="text"
                        className="form-control register_custom_input"
                        id="passwordConfirmation"
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="col-md-12">
                <div>
                  <CustomButton
                    loading={loading}
                    type="submit"
                    className="user_login_actionBth"
                    text="Checkout"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        success={successs}
        heading={modalText}
      />
      <CustomModal
        autoClose={false}
        show={addState}
        success={apiSuccess}
        close={() => setAddState(false)}
        heading={modalHeading}
      ></CustomModal>
    </UserLayout>
  );
};

export default Checkout;
