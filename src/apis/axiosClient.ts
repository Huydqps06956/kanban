import axios from "axios";
import queryString from "query-string";
import { localDataNames } from "../constants/appInfos";

const baseURL = `http://192.168.1.9:3001`;

const getAccessToken = () => {
  const res = localStorage.getItem(localDataNames.authData);
  if (res) {
    const auth = JSON.parse(res);
    return auth && auth.token ? auth.token : "";
  } else {
    return "";
  }
};

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  const accesstoken = getAccessToken();

  config.headers = {
    Authorization: accesstoken ? `Bearer ${accesstoken}` : "",
    Accept: "application/json",
    ...config.headers,
  };

  return { ...config, data: config.data ?? null };
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    }
    return Promise.reject(res.data);
  },
  (err) => {
    return Promise.reject(err.response?.data?.message || "An error occurred");
  }
);

export default axiosClient;
