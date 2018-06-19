import React from 'react';
import Unity from 'react-unity-webgl';
import '../../resources/css/space-shooter.css';

const SpaceShooterApp = () => (
  <div className="webgl-content">
    <Unity src="/Build/SpaceShooter.json"
      loader="/Build/UnityLoader.js" />
  </div>
);

export default SpaceShooterApp;
