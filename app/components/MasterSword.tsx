import React from 'react';

export default function MasterSword({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bladeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>
      </defs>
      {/* Blade */}
      <path fill="url(#bladeGradient)" d="M45,10 L55,10 L55,70 L45,70 Z" />
      {/* Cross Guard */}
      <path fill="#A0A0A0" d="M30,70 L70,70 L70,75 L30,75 Z" />
      {/* Handle */}
      <path fill="#333" d="M40,75 L60,75 L60,95 L40,95 Z" />
      {/* Pommel */}
      <circle cx="50" cy="105" r="5" fill="#ff0000" stroke="#fff" strokeWidth="1" />
    </svg>
  );
} 