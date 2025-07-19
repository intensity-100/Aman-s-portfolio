import React from 'react';
import Orb from './Orb';
import './Orb.css';

export default function OrbBackground() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none', // 👈 THIS LINE FIXES IT
        zIndex: -1              // Optional: keeps orb behind content
      }}
    >
      <Orb
        hoverIntensity={0.5}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </div>
  );
}
