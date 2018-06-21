import React, { Component } from 'react';
import Unity, { UnityEvent } from 'react-unity-webgl';
import '../../resources/css/space-shooter.css';

class SpaceShooterApp extends Component {
  render() {
    return (
        <div className="webgl-content">
          <Unity src="/space-shooter/Build/SpaceShooterV2.json"
            loader="/space-shooter/Build/UnityLoader.js"
            width="60vw" height="80vh"/>
        </div>
    );
  }

  componentWillUnmount() {
    console.log("Unmounting space shooter");
    this.quit = new UnityEvent("GameController", "QuitGame");
    this.quit.emit();
  }
}

export default SpaceShooterApp;
