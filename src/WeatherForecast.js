import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-minimum">10°</span>
            <span className="WeatherForecast-maximum">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
