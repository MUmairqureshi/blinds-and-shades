import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../CustomButton";
import "./style.css";
import { useSelector } from "react-redux";
import api from "../../api/axiosInstance";
import CustomModal from "../CustomModal";

const Registration = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setmodalText] = useState("");

  const { user, loading, error, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    console.log("formRef.current", formData);
    try {
      const resp = await api.post("/user-register", formData);
      setmodalText("User Registered successfully");
      setShowModal(true);
      if (resp?.status == 200) {
        setTimeout(() => navigate("/login"), 800);
      } // Redirect on successful signup
    } catch (error) {
      setmodalText("cannot register user");
      setShowModal(true);
      console.error("Signup failed", error);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <h4 className="contact_secondary_heading">Register</h4>

      <div className="mb-3">
        <label htmlFor="email" className="form-label login_label">
          Email address <span className="yellow_star">*</span>
        </label>
        <input
          name="email"
          type="email"
          className="form-control register_custom_input"
          id="email"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label login_label">
          Password <span className="yellow_star">*</span>
        </label>
        <input
          name="password"
          type="password"
          className="form-control register_custom_input"
          id="password"
          placeholder=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label login_label">
          Confirm Password <span className="yellow_star">*</span>
        </label>
        <input
          name="password_confirmation"
          type="password"
          className="form-control register_custom_input"
          id="confirmPassword"
          placeholder=""
        />
      </div>
      <div>
        <CustomButton
          loading={loading}
          type="submit"
          className="w-100 user_login_actionBth"
          text="Register"
        />
      </div>
      <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        success={true}
        heading={modalText}
      />
    </form>
  );
};

export default Registration;
