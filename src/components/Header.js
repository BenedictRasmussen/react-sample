import React from 'react';

import logo from '../resources/images/logo.svg';
import NavBar from './NavBar'

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <NavBar />
  </header>
);

export default Header;
