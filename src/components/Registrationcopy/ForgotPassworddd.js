import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../CustomButton";
import "./style.css";
import api from "../../api/axiosInstance";
import { useNavigate } from "react-router";
import CustomModal from "../CustomModal";

const ForgotPassworddd = () => {
  const navigate = useNavigate();
  const { forgotPassword, verifyOtp, resetPassword } = useAuth();
  const { loading, error, success } = useSelector((state) => state.auth);
  console.log("loggg", error);
  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Verify OTP, Step 3: Reset Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setpassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/forgot-password", { email });
      console.log("response password", data);
      if (data?.status) {
        setStep(2);
      } // Move to step 2: Verify OTP
    } catch (error) {
      console.error("Forgot password failed", error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/otp-verification", { email, otp });
      if (response.data.status) {
        setStep(3);
      } // Move to step 3: Reset Password
    } catch (error) {
      console.error("Verify OTP failed", error);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/reset-password`, {
        email,
        otp,
        password,
        password_confirmation,
      });
      console.log("response", response);
      if (response.data.status) {
        navigate("/login");
      }
      // Handle successful password reset (e.g., navigate to login page)
    } catch (error) {
      console.error("Reset password failed", error);
    }
  };
  console.log("success", success);
  return (
    <>
      <div className="forgot-password-container">
        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <h4 className="contact_secondary_heading">Forgot Password</h4>
            <div className="mb-3">
              <label htmlFor="email" className="form-label login_label">
                Email address <span className="yellow_star">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control register_custom_input"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <CustomButton
                loading={loading}
                type="submit"
                className="w-100 user_login_actionBth"
                text="Submit"
              />
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <h4 className="contact_secondary_heading">Verify OTP</h4>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label login_label">
                OTP <span className="yellow_star">*</span>
              </label>
              <input
                name="otp"
                type="text"
                className="form-control register_custom_input"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <div>
              <CustomButton
                loading={loading}
                type="submit"
                className="w-100 user_login_actionBth"
                text="Verify OTP"
              />
            </div>
          </form>
        )}

      {step === 3 && (
        <form onSubmit={handlePasswordReset}>
          <h4 className="contact_secondary_heading">Reset Password</h4>
          <div className="mb-3">
            <label htmlFor="password" className="form-label login_label">
              New Password <span className="yellow_star">*</span>
            </label>
            <input
              name="password"
              type="password"
              className="form-control register_custom_input"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation" className="form-label login_label">
              Confirm Password <span className="yellow_star">*</span>
            </label>
            <input
              name="password_confirmation"
              type="password"
              className="form-control register_custom_input"
              id="password_confirmation"
              value={password_confirmation}
              onChange={(e) => setpassword_confirmation(e.target.value)}
              required
            />
          </div>
          <div>
            <CustomButton
              loading={loading}
              type="submit"
              className="w-100 user_login_actionBth"
              text="Reset Password"
            />
          </div>
        </form>
      )}
    </div>
    </>
  );
}

export default ForgotPassworddd;
