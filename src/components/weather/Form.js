import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input className="LocInput" type="text" name="city" placeholder="City..." />
    <input className="LocInput" type="text" name="country" placeholder="Country..." />
    <button>Get weather</button>
  </form>
);

export default Form;
