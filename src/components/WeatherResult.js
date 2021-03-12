import React from "react";
import "./weatherResult.css";

function WeatherResult() {
  
  return (
    <div>
      <div className="result">
        <h2>Date</h2>
        <ul>
          <li>
            <img src="#" alt="" />
          </li>
          <li>Weather Status</li>
          <li>min C / maxtemp C</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherResult;
