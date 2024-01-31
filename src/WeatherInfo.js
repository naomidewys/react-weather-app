import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="today-weather">
        <span className="today-weather-icon">
          <WeatherIcon code={props.data.icon} />
        </span>
        <span className="temperature">
          <strong>{Math.round(props.data.temperature)}</strong>
        </span>
        <span className="unit">°C</span>
      </div>
      <p className="weather-condition">
        <div>
          Humidity: <strong>{props.data.humidity}%</strong> • Wind:{" "}
          <strong>{props.data.wind} km/h</strong>
        </div>
        <div className="weather-description">{props.data.description}</div>
      </p>
    </div>
  );
}
