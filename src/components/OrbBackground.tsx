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
        zIndex: 0,                  // Keep behind all content
        overflow: 'hidden',
        pointerEvents: 'none'       // ✅ Let events pass through this layer
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',     // ✅ But Orb can still receive mouse move
        }}
      >
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
}
