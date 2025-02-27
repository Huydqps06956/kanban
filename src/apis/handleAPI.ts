import axiosClient from "./axiosClient";

const handleAPI = async (
  url: string,
  method?: "post" | "put" | "get" | "delete",
  data?: any
) => {
  return await axiosClient(url, {
    method: method ?? "get",
    data,
  });
};
export default handleAPI;
