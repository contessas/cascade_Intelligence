
import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center bg-sky-blue/10 rounded-lg p-8 md:p-12 gap-8 md:gap-12">
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src="https://picsum.photos/seed/founder/400/400" 
              alt="Contessa, Founder of Cascade Intelligence" 
              className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto object-cover shadow-lg border-4 border-white"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-slate-gray mb-4">Meet Our Founder</h2>
            <p className="text-coral font-montserrat font-bold text-lg mb-4">Contessa, AI Strategist</p>
            <p className="text-slate-gray/80 leading-relaxed mb-4">
              With over 20 years at the intersection of technology and operations, Contessa founded Cascade Intelligence to address a critical need: clear, actionable AI strategy for businesses ready to evolve. Her expertise lies in translating complex AI concepts into practical roadmaps that drive growth and efficiency.
            </p>
            <p className="text-slate-gray/80 leading-relaxed italic">
              "My mission is to empower leaders with the clarity and confidence to harness AI, transforming their organizations from the inside out."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
