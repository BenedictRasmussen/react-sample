import React from "react";
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          <li><Link to='/weather'>React Weather</Link></li>
          <li><a href='/space-shooter'>C# Space Shooter Again!</a></li>
          <li><Link to='/space-shooter'>C# Space Shooter</Link></li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
