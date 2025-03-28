import { useState, useEffect } from "react";
import "./App.css";
import WeatherSearch from "./components/WeatherSearch/WeatherSearch";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import * as weatherService from "./services/weatherService";

function App() {
  const [weather, setWeather] = useState({});

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  useEffect(() => {
    const fetchDefaultData = async (city) => {
      const data = await weatherService.show(city);
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };

    navigator.geolocation.getCurrentPosition(
      function (result) {
        const lat = result.coords.latitude;
        const long = result.coords.longitude;
        const locationString = `${lat},${long}`;
        fetchDefaultData(locationString);
      },
      function (error) {
        console.error(error);
      }
    );
  }, []);

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  );
}

export default App;
