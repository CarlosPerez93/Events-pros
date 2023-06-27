import axios from "axios";
import { propsApi } from "./api.tpye";
const url = "http://localhost:4000/api/";

const Api = async (props: propsApi) => {
  const { data, params, patch, token } = props;
  if (patch === "post") {
    return await axios.post(`${url}${params}`, data, { headers: token });
  } else if (patch === "get") {
    return await axios.get(`${url}${params}`);
  } else if (patch === "put") {
    return await axios.put(`${url}${params}`, data);
  } else if (patch === "delete") {
    return await axios.delete(`${url}${params}`);
  }
};

export default Api;
