// src/hooks/useAuth.js
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPasswordUser,
  loginUser,
  logout,
  otpVerification,
  resetPasswordUser,
  signupUser,
} from "../redux/slices/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const login = (credentials) => {
    dispatch(loginUser(credentials));
  };
  const signup = (credentials) => {
    dispatch(signupUser(credentials));
  };
  const signout = () => {
    dispatch(logout());
  };
  const forgotPassword = (email) => {
    dispatch(forgotPasswordUser(email));
  };

  const verifyOtp = (reqData) => {
    dispatch(otpVerification(reqData));
  };

  const resetPassword = (reqData) => {
    dispatch(resetPasswordUser(reqData));
  };
  return {
    ...authState,
    login,
    signout,
    signup,
    forgotPassword,
    verifyOtp,
    resetPassword,
  };
};

export default useAuth;
