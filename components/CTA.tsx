
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-deep-teal text-white">
      <div className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
          Ready to move from AI curiosity to clarity?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-sky-blue/80 mb-10">
          Let's build your AI roadmap together. Start with a workshop or get in touch to discuss your unique challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#" className="w-full sm:w-auto bg-coral text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book Your Workshop
          </a>
          <a href="#" className="w-full sm:w-auto bg-transparent text-warm-white font-medium py-3 px-8 rounded-full border border-warm-white hover:bg-warm-white hover:text-deep-teal transform hover:scale-105 transition-all duration-300">
            Contact Cascade Intelligence
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
