
import React from 'react';

const AnimatedWave: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-64 opacity-50">
      <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#A8DADC', stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: '#0E5E6F', stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        <path fill="url(#wave-gradient)" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,176C672,149,768,107,864,117.3C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave"></path>
        <path fill="url(#wave-gradient)" fillOpacity="0.5" d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,224C672,235,768,213,864,197.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" className="animate-wave-reverse"></path>
      </svg>
    </div>
  );
};

export default AnimatedWave;
