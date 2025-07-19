import React from 'react';
import Orb from './Orb';
import './Orb.css';

export default function OrbBackground() {
  return (
    <div style={{
      width:'100%',
      height:'100%',
      position:'absolute',
      inset:0,
      zIndex:0,
      overflow:'hidden',
      pointerEvents:'none' // important
    }}>
      <Orb
        hoverIntensity={0.5}
        rotateOnHover
        hue={0}
        forceHoverState={false}
      />
    </div>
  );
}
