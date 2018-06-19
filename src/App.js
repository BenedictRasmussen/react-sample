import React from 'react';
import Router from './components/Router';
import Header from "./components/Header";
import Footer from "./components/Footer"
import './resources/css/App.css';

const App = () => (
  <div className="wrapper">
    <div className="app-header">
      <Header />
    </div>
    <div id="content-container">
      <Router />
    </div>
    <Footer />
  </div>
)

export default App;
