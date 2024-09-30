import React from 'react';

interface Props {
  routeHref: string;
  tileName: string;
}

const OverlayTile: React.FC<Props> = ({ routeHref, tileName }) => {
  return (
    <div style={{padding: '50px', border: 'solid'}}>
      {tileName}
    </div>
  );
}

export default OverlayTile;
