import "dotenv";
import axios from "axios";
import { Api } from "./api.tpye";

const URL = import.meta.env.VITE_BACKEND_URL;

const Api = async (props: Api) => {
  const { data, params, patch, token } = props;
  if (patch === "post") {
    return await axios.post(`${URL}${params}`, data, { headers: token });
  } else if (patch === "get") {
    return await axios.get(`${URL}${params}`);
  } else if (patch === "put") {
    return await axios.put(`${URL}${params}`, data);
  } else if (patch === "delete") {
    return await axios.delete(`${URL}${params}`);
  }
};

export default Api;
