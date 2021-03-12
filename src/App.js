import React, { useState } from "react";
import Wheather from "./components/WeatherResult";
import "./App.css";

function App() {
  const APP_KEY = "6f3cd2b04da140c3a4b195322211103";
  const [weatherData, setWeatherData] = useState([]);
  const [input, setInput] = useState([]);

  async function getData(value) {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=5&aqi=no&alerts=no`
    );
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
  }

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search a city"
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={() => getData(input)}>Search</button>
      </div>
      <Wheather />
    </div>
  );
}

export default App;
