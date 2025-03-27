// src/services/weatherService.js

const API_KEY = "19dfcefe8f034cbfa3c184230252703";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { show }; //named export syntax
