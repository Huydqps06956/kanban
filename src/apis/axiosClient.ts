import axios from "axios";
import queryString from "query-string";

const baseURL = `http://192.168.1.6:3001`;

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  return (config.headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
    ...config.headers,
  });
});

axios.interceptors.response.use((res) => {
  if (res.data && res.status >= 200 && res.status < 300) {
    return res.data;
  } else {
    return Promise.reject(res.data);
  }
}),
  (err: any) => {
    const { response } = err;
    return Promise.reject(response.data);
  };

export default axiosClient;
