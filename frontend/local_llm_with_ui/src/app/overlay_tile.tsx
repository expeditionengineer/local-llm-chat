import React from 'react';
import Link from 'next/link';

interface Props {
  routeHref: string;
  tileName: string;
}

const OverlayTile: React.FC<Props> = ({ routeHref, tileName }) => {
  return (
    <div style={{padding: '50px', border: 'solid'}}>
      <Link href={routeHref}> 
        {tileName}
      </Link>
    </div>
  );
}

export default OverlayTile;
