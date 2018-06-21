import React from "react";

const Weather = props => (
  <div className="container">
    <div className="row">
    {props.city && props.country && (
      <div className="col-md-3">
        <h3>Location</h3><p>{props.city}, {props.country}</p>
      </div>
    )}
    {props.temperature && (
      <div className="col-md-3">
        <h3>Temperature</h3><p>{props.temperature} °F</p>
      </div>
    )}
  </div>
  <div className="row">
    {props.humidity && (
      <div className="col-md-3">
        <h3>Humidity</h3><p>{props.humidity}%</p>
      </div>
    )}
    {props.description && (
      <div className="col-md-3">
        <h3>Conditions</h3><p>{props.description}</p>
        <div className="rainyPic"></div>
      </div>
    )}
    {props.error && (
      <div>
        <p>{props.error}</p>
      </div>
    )}
    </div>
  </div>
);

export default Weather;
