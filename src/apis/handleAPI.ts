import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = "http://192.168.1.6:3001";

const handleAPI = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<AxiosResponse<any>> => {
  const config: AxiosRequestConfig = {
    url: `${BASE_URL}${endpoint}`,
    method,
    data,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};

export default handleAPI;
