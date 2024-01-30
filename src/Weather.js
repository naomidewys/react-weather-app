import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weather, setWeather] = useState({ read: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      date: "Monday 18:00",
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <p>{weather.date}</p>
        <h2>
          <span className="weather-icon">
            <img src={weather.icon} alt={weather.description} />
          </span>{" "}
          <span className="temperature">
            <strong>{Math.round(weather.temperature)}</strong>
          </span>
          <span className="unit">°C</span>
        </h2>
        <p>
          <div>
            Humidity: <strong>{weather.humidity}%</strong> • Wind:{" "}
            <strong>{weather.wind} km/h</strong>
          </div>
          <div className="weather-description">{weather.description}</div>
        </p>
      </div>
    );
  } else {
    let apiKey = "a8ef3f3t189785b5cbocc4f20b7a40e0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
