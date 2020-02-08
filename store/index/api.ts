import api from "../api";

const getPageData = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getPageData
};
