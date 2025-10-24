
import React from 'react';
import { AssessIcon } from './icons/AssessIcon';
import { DesignIcon } from './icons/DesignIcon';
import { ImplementIcon } from './icons/ImplementIcon';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-sky-blue/20 text-deep-teal rounded-full p-5 mb-6">
      {icon}
    </div>
    <h3 className="font-montserrat text-xl font-bold text-slate-gray mb-2">{title}</h3>
    <p className="text-slate-gray/80 max-w-xs">{description}</p>
  </div>
);


const Process: React.FC = () => {
  return (
    <section id="approach" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-4">Our Proven Process</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-gray/80">
            Clarity and momentum are built into our three-phase approach to AI strategy.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-8 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-sky-blue/30 hidden md:block" style={{transform: 'translateY(-50%)', zIndex: 0}}></div>
          <div className="md:w-1/3 z-10">
            <ProcessStep 
              icon={<AssessIcon className="w-8 h-8" />}
              title="1. Assess"
              description="We begin by understanding your unique business context, capabilities, and goals to identify where AI can deliver the most value."
            />
          </div>
          <div className="md:w-1/3 z-10">
            <ProcessStep 
              icon={<DesignIcon className="w-8 h-8" />}
              title="2. Design"
              description="We co-design a tailored AI roadmap, outlining clear initiatives, required resources, and measurable success metrics."
            />
          </div>
          <div className="md:w-1/3 z-10">
            <ProcessStep 
              icon={<ImplementIcon className="w-8 h-8" />}
              title="3. Implement"
              description="We provide the guidance and support needed to execute your roadmap, ensuring a smooth transition from strategy to real-world application."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
