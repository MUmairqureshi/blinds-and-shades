import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./style.css";
import { loginUser, resetAuthState } from "../../redux/slices/authSlice";
import CustomModal from "../../components/CustomModal/index";

const UserLogin = () => {
  const dispatch = useDispatch();
  const [modalText, setmodalText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
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

    dispatch(loginUser(formData));
  };
  useEffect(() => {
    if (success) {
      console.log("sucessssssss");
      setmodalText("User LoggedIn SuccessFully");
      setShowModal(true);
      setTimeout(() => navigate("/"), 800);
      dispatch(resetAuthState());
    } else if (success != null) {
      console.log("nottttsucessssssss", error);

      setmodalText(error.message);

      setShowModal(true);
      dispatch(resetAuthState());
    }
    return () => {
      dispatch(resetAuthState());
    };
  }, [success]);
  console.log("error", error, success);

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <h4 className="contact_secondary_heading">Login</h4>
        <div className="mb-3">
          <label htmlFor="email" className="form-label login_label">
            Username or email address <span className="yellow_star">*</span>
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

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="rememberMe"
            id="flexCheckDefault"
          />
          <label
            className="form-check-label login_label"
            htmlFor="flexCheckDefault"
          >
            Remember me
          </label>
        </div>

        <div>
          <CustomButton
            loading={loading}
            type="submit"
            className="w-100 user_login_actionBth"
            text="Log in"
          />
        </div>

        <div className="text-center">
          <Link className="lost_your_password" to={"/forgotPassword"}>
            Lost your password?
          </Link>
        </div>
      </form>
      <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        success={false}
        heading={modalText}
      />
    </>
  );
};

export default UserLogin;
