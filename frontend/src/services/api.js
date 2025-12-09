import axios from "axios";

export const fetchSales = async (params) => {
  const res = await axios.get("/api/sales", { params });
  return res.data;
};
