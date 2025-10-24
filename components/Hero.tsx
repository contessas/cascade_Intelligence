
import React from 'react';
import AnimatedWave from './AnimatedWave';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-warm-white pt-24 pb-32 md:pt-32 md:pb-40 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedWave />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-slate-gray mb-6 leading-tight animate-fade-in">
          From AI exploration to <span className="text-deep-teal">intelligent execution.</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-gray/80 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Practical, human-centered AI strategy for organizations ready to move from curiosity to clarity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#" className="w-full sm:w-auto bg-deep-teal text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book a Workshop
          </a>
          <a href="#" className="w-full sm:w-auto bg-warm-white text-coral font-medium py-3 px-8 rounded-full border border-coral hover:bg-coral hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg">
            See Our Approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
