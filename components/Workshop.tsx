import React from 'react';
import AnimatedWave from './AnimatedWave';
import { ClarityIcon } from './icons/ClarityIcon';
import { TargetIcon } from './icons/TargetIcon';
import { RoadmapIcon } from './icons/RoadmapIcon';
import { TeamIcon } from './icons/TeamIcon';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-coral flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const Workshop: React.FC = () => {
  const gains = [
    { icon: <ClarityIcon className="w-8 h-8" />, title: "A Common Language", description: "Establish a shared, hype-free understanding of AI terminology and capabilities across your leadership team." },
    { icon: <TargetIcon className="w-8 h-8" />, title: "High-Impact Use Cases", description: "Identify and prioritize 2-3 specific, high-value AI opportunities tailored to your unique business context." },
    { icon: <RoadmapIcon className="w-8 h-8" />, title: "Actionable Next Steps", description: "Leave with a clear, step-by-step plan for a pilot project, including resource needs and success metrics." },
    { icon: <TeamIcon className="w-8 h-8" />, title: "Team Alignment & Buy-In", description: "Build consensus and enthusiasm among stakeholders, creating the momentum needed for successful implementation." },
  ];

  const agenda = [
    { title: "Module 1: AI Demystified", description: "We cut through the noise, defining core AI concepts and exploring real-world applications relevant to your industry." },
    { title: "Module 2: The Art of the Possible", description: "A collaborative brainstorming session to uncover potential AI use cases across your operations, from efficiency gains to new revenue streams." },
    { title: "Module 3: Opportunity Mapping", description: "We apply a strategic framework to evaluate and score potential initiatives based on impact, feasibility, and alignment with business goals." },
    { title: "Module 4: Building Your First-Step Roadmap", description: "We outline the critical path for your top-priority initiative, defining the scope, timeline, and resources for a successful pilot." },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-warm-white pt-24 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 z-0"><AnimatedWave /></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-slate-gray mb-6 leading-tight">
            AI Readiness Workshop
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-gray/80">
            A half-day strategic session designed to align your leadership, demystify AI, and build an actionable roadmap for your first AI initiative.
          </p>
        </div>
      </section>

      {/* Is This For You? Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-6">Is This Workshop For Your Team?</h2>
                <p className="text-lg text-slate-gray/80 leading-relaxed mb-6">
                    This session is tailored for leadership teams who know AI is important but are struggling to find the right starting point. We bridge the gap between understanding AI's potential and taking confident, strategic action.
                </p>
            </div>
            <div className="lg:w-1/2 w-full space-y-4">
                <div className="flex items-start gap-4"><CheckIcon /><span>You're seeking <span className="font-bold">clarity and a shared language</span> for AI across your organization.</span></div>
                <div className="flex items-start gap-4"><CheckIcon /><span>You need to <span className="font-bold">align stakeholders</span> around a common AI vision and strategy.</span></div>
                <div className="flex items-start gap-4"><CheckIcon /><span>You're unsure how to <span className="font-bold">prioritize the endless AI possibilities</span> for maximum business impact.</span></div>
                <div className="flex items-start gap-4"><CheckIcon /><span>You want to move from <span className="font-bold">curiosity and conversation to a concrete, actionable plan</span>.</span></div>
            </div>
        </div>
      </section>

      {/* What You'll Gain Section */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-4">What You'll Gain in One Session</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {gains.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg flex items-start gap-6 border border-sky-blue/20">
                <div className="bg-sky-blue/20 text-deep-teal rounded-full p-3 flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-montserrat text-xl font-bold text-deep-teal mb-2">{item.title}</h3>
                  <p className="text-slate-gray/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-12">Workshop Agenda</h2>
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-blue/30 hidden sm:block" style={{transform: 'translateX(-50%)'}}></div>
                {agenda.map((item, index) => (
                    <div key={index} className="flex sm:items-center w-full mb-8 flex-col sm:flex-row">
                        <div className="sm:w-1/2 sm:pr-8 text-left sm:text-right">
                            <div className="bg-deep-teal text-white rounded-full w-12 h-12 flex items-center justify-center font-montserrat font-bold text-xl mb-2 sm:ml-auto">{index + 1}</div>
                            <h3 className="font-montserrat text-2xl font-bold text-slate-gray mb-2">{item.title}</h3>
                            <p className="text-slate-gray/80">{item.description}</p>
                        </div>
                         <div className="sm:w-1/2 sm:pl-8 text-left"></div>
                    </div>
                ))}
            </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="bg-deep-teal text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your AI Potential?
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-sky-blue/80 mb-10">
            Book your AI Readiness Workshop and turn strategic conversations into confident action.
            </p>
            <button type="button" className="bg-coral text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block">
                Schedule Your Workshop
            </button>
        </div>
      </section>
    </div>
  );
};

export default Workshop;