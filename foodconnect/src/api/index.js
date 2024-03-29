import axios from "axios";
export const baseURL =
  "http://127.0.0.1:5001/foodconnect-34d99/us-central1/app";

export const validateUserJWToken = async (token) => {
  try {
    const res = await axios.get(`${baseURL}/api/users/jwtVerification`, {
      headers: { Authorization: "Bearer " + token },
    });
    return res.data.data;
  } catch (err) {
    return null;
  }
};
