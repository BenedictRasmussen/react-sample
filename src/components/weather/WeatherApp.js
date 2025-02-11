import React, { Component } from 'react';
import '../../resources/css/weather.css';
import WeatherTitle from "./WeatherTitle";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = 'afa3c3295945c2fbb1817c38c47a9790';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=Imperial`);
    const data = await api_call.json();
    console.log(data);

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Must enter city and country"
      });
    }
  }

  render() {
    return (
      <div className="container test">
        <div className="row">
           <div className="col-xs-5 title-container weather-title">
              <WeatherTitle />
           </div>
           <div className="col-xs-7 form-container">
             <Form getWeather={this.getWeather} />
             <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
             />
           </div>
         </div>
      </div>
    );
  }
}

export default App;
