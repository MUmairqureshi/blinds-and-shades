import { convertToFormData } from "../utils/convertToFormData";
import api from "./axiosInstance";

export const getEntity = async (endpoint) => {
  // loaderrrr remove
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    // loaderrrr
    console.error("Registration failed:", error);
    throw new Error(error.response?.data?.message || "Something went wrong");
  } finally {
    // loaderrrr
  }
};
export const addEntity = async (endpoint, data) => {
  const formData = convertToFormData(data);
  // loaderrrr remove

  try {
    const response = await api.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    // loaderrrr

    return error;

    console.error("Registration failed:", error);
  } finally {
    // loaderrrr
  }
};
export const editEntity = async (endpoint) => {
  // loaderrrr remove

  try {
    const response = await api.get(endpoint);
    console.log("tryyy");

    return response.data;
  } catch (error) {
    // loaderrrr
    console.error("Registration failed:", error);
    throw new Error(error.response?.data?.message || "Something went wrong");
  } finally {
    // loaderrrr
  }
};
export const updateEntity = async (endpoint, data) => {
  console.log("Payload:");
  for (let [key, value] of data.entries()) {
    console.log(key, value);
  }

  const formData = await convertToFormData(data);

  // loaderrrr remove

  try {
    const response = await api.post(endpoint, data);
    console.log("data.....", data);

    return response.data;
  } catch (error) {
    document?.querySelector(".loaderBox")?.classList?.("d-none");

    console.error("Registration failed:", error);
    throw new Error(error.response?.data?.message || "Something went wrong");
  } finally {
    // loaderrrr
  }
};
export const deleteEntity = async (endpoint) => {
  console.log("deleteee");
  // loaderrrr remove
  try {
    const response = await api.post(endpoint);
    return response.data;
  } catch (error) {
    // loaderrrr

    console.error("Registration failed:", error);
    throw new Error(error.response?.data?.message || "Something went wrong");
  } finally {
    // loaderrrr
  }
};
