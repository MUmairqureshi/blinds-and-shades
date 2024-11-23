// src/api/auth.js
import api from "./axiosInstance";

export const login = (credentials) => api.post("/user-login", credentials);
export const signup = (userData) => api.post("/user-register", userData);
export const forgotPassword = (email) =>
  api.post("/forgot-password", { email });
export const verifyOtp = (reqData) => api.post("/otp-verification", reqData);
export const resetPassword = (reqData) => api.post(`/reset-password`, reqData);
