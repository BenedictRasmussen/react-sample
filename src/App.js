import React from 'react';
import Router from './components/Router';
import Header from "./components/Header";
import './resources/css/App.css';

const App = () => (
  <div className="Wrapper">
    <div className="app-header">
      <Header />
      <Router />
    </div>
  </div>
)

export default App;
