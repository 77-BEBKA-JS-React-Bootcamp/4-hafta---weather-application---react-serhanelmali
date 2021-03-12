import React from "react";
import "./weatherResult.css";

function WeatherResult({ date, mintemp, maxtemp, condition, icon }) {
  return (
    <div>
      <div className="result">
        <h2>{date}</h2>
        <ul>
          <li>
            <img src={icon} alt="" />
          </li>
          <li>{condition}</li>
          <li>
            {mintemp} C / {maxtemp} C
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherResult;
