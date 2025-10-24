
import React from 'react';
import { Logo } from './icons/Logo';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-warm-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" aria-label="Cascade Intelligence Home" className="flex items-center gap-3">
          <Logo className="h-8 w-auto" />
          <span className="font-montserrat text-xl font-bold text-slate-gray hidden sm:inline">Cascade Intelligence</span>
        </a>
        <button type="button" className="hidden sm:inline-block bg-transparent text-deep-teal font-medium py-2 px-4 border border-deep-teal rounded-full hover:bg-deep-teal hover:text-white transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;