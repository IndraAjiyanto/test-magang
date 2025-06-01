import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const fetchMenu = async () => {
  const response = await axios.get(`${BASE_URL}/menu`);
  return response.data;
};

export const postOrder = async (pesanan) => {
  const response = await axios.post(`${BASE_URL}/order`, { pesanan });
  return response.data;
};