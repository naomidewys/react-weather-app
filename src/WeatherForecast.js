import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "a8ef3f3t189785b5cbocc4f20b7a40e0";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
