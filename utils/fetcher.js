import axios from "axios";

export const fetcher = async (url, options = {}) => {
  const apiURL = `${url}`;
  const fetchOptions = {
    method: "GET",
    ...options
  };

  try {
    const response = await axios(apiURL, fetchOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
}