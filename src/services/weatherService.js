// src/services/weatherService.js

// const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;
const BASE_URL = `http://localhost:3000/api/weather/`;

const show = async (city) => {
  try {
    const queryString = `?q=${city}`;
    const res = await fetch(BASE_URL + city);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { show }; //named export syntax
