import axios from "axios";

const API_URL = "https://restcountries.com/v3.1";

export const getCountriesByRegion = async (region) => {
  const response = await axios.get(`${API_URL}/region/${region}`);
  return response.data;
};

export const getAllCountries = async () => {
  const response = await axios.get(`${API_URL}/all`);
  return response.data;
};
