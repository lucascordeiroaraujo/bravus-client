import axios from "axios";

const config = {
  baseURL: "https://jsonplaceholder.typicode.com"
};

export default axios.create(config);
