
import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#A8DADC" />
        <stop offset="100%" stopColor="#0E5E6F" />
      </linearGradient>
    </defs>
    <path
      d="M90 15 C 60 15, 50 40, 50 50 C 50 60, 60 85, 90 85"
      stroke="url(#logo-gradient)"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M70 15 C 40 15, 30 40, 30 50 C 30 60, 40 85, 70 85"
      stroke="url(#logo-gradient)"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.7"
    />
    <path
      d="M50 15 C 20 15, 10 40, 10 50 C 10 60, 20 85, 50 85"
      stroke="url(#logo-gradient)"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity="0.4"
    />
  </svg>
);
