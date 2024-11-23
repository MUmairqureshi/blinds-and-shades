import React, { useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import CustomButton from "../CustomButton";
import "./style.css";

const ForgotPassword = () => {
  const { forgotPassword, verifyOtp, resetPassword } = useAuth();
  const { loading, error } = useSelector((state) => state.auth);

  const [step, setStep] = useState(1); // Step 1: Enter Email, Step 2: Verify OTP, Step 3: Reset Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setNewPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      setStep(2); // Move to step 2: Verify OTP
    } catch (error) {
      console.error("Forgot password failed", error);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      await verifyOtp({ email, otp });
      setStep(3); // Move to step 3: Reset Password
    } catch (error) {
      console.error("Verify OTP failed", error);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await resetPassword({ email, otp, password, password_confirmation });
      // Handle successful password reset (e.g., navigate to login page)
    } catch (error) {
      console.error("Reset password failed", error);
    }
  };
  console.log("error", error);
  return (
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
            <label htmlFor="newPassword" className="form-label login_label">
              New Password <span className="yellow_star">*</span>
            </label>
            <input
              name="newPassword"
              type="password"
              className="form-control register_custom_input"
              id="newPassword"
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label login_label">
              Confirm Password <span className="yellow_star">*</span>
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="form-control register_custom_input"
              id="confirmPassword"
              value={password_confirmation}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};

export default ForgotPassword;
