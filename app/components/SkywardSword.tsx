import React from 'react';

export default function SkywardSword({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 250" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#a0dff0" />
        </linearGradient>
      </defs>
      {/* Blade */}
      <path d="M50,10 C65,40 65,120 50,140 C35,120 35,40 50,10 Z" fill="url(#bladeGradient)" />
      {/* Cross Guard */}
      <rect x="30" y="140" width="40" height="8" fill="#A0A0A0" />
      {/* Handle */}
      <rect x="45" y="148" width="10" height="60" fill="#333" />
      {/* Pommel */}
      <circle cx="50" cy="218" r="5" fill="#ff0000" stroke="#fff" strokeWidth="1" />
    </svg>
  );
} 