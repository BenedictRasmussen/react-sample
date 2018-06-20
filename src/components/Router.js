import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import WeatherApp from './weather/WeatherApp';
import SpaceShooterApp from './space-shooter/SpaceShooterApp'

class Router extends Component{
    render() {
      return (
        <main>
          <Switch>
            <Route exact path='/' component={WeatherApp} />
            <Route path='/weather' component={WeatherApp} />
            <Route path='/space-shooter' component={SpaceShooterApp} />
          </Switch>
        </main>
      )
    }
}

export default Router;
