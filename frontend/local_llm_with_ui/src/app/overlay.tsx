'use client'
import React, { useState } from 'react';

import OverlayTile from './overlay_tile.tsx';

const Overlay: React.FC = () => {
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '50px', display: 'flex', justifyContent: 'center'}}>
        <h1 style={{fontSize: '25px'}}>Apps</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <OverlayTile routeHref={'Hi'} tileName={'LLM UI'} /> 
        <OverlayTile routeHref={'Hi'} tileName={'Weather app'} />  
      </div>
    </div>
  )
};

export default Overlay;
