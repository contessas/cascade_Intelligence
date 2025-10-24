
import React from 'react';
import { Logo } from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-gray text-warm-white/70">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <a href="#" className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <Logo className="h-6 w-auto" />
            <span className="font-montserrat text-lg font-bold text-warm-white">Cascade Intelligence</span>
          </a>
          <p className="text-sm">&copy; {new Date().getFullYear()} Cascade Intelligence. All rights reserved.</p>
        </div>
        <div className="text-sm">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
