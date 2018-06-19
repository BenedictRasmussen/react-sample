import React from 'react';
import Unity from 'react-unity-webgl';
import '../../resources/css/space-shooter.css';

const SpaceShooterApp = () => (
  <div className="webgl-content">
    <Unity src="%PUBLIC_URL%/space-shooter/Build/SpaceShooter.json"
      loader="%PUBLIC_URL%/space-shooter/Build/UnityLoader.js" />
  </div>
);

export default SpaceShooterApp;

/*
  <div className="webgl-logo" />
  <div className="footer">
  <div className="fullscreen" onClick="gameInstance.SetFullscreen(1)" />
  <div className="title">SpaceShooter</div>
</div>
*/
