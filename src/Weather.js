import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Brisbane</h1>
      <p>Monday 18:00</p>
      <h2>
        ⛅{" "}
        <span className="temperature">
          <strong>27</strong>
        </span>
        <span className="unit">°C</span>
      </h2>
      <p>
        Humidity: <strong>72%</strong> • Wind: <strong>13 km/h</strong>
        <br />
        Mostly Cloudy
      </p>
    </div>
  );
}
