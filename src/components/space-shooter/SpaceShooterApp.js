import React from 'react';
import Unity from 'react-unity-webgl';
import '../../resources/css/space-shooter.css';

const SpaceShooterApp = () => (
  <div className="webgl-content">
    <Unity src="/space-shooter/Build/SpaceShooter.json"
      loader="/space-shooter/Build/UnityLoader.js" />
  </div>
);

export default SpaceShooterApp;
