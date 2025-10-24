
import React from 'react';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const WhyCascade: React.FC = () => {
  const points = [
    {
      title: "Clarity Above All",
      description: "We cut through the hype to deliver clear, practical advice that you can act on with confidence."
    },
    {
      title: "Human-Centered Ethics",
      description: "Our approach prioritizes ethical considerations, ensuring your AI initiatives are responsible and beneficial."
    },
    {
      title: "Measurable Results",
      description: "We focus on strategies that deliver tangible business outcomes, not just technological novelties."
    },
    {
        title: "Partnership Mindset",
        description: "We work as an extension of your team, transferring knowledge and building your internal AI capabilities."
    }
  ];

  return (
    <section className="bg-warm-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-6">Why Cascade Intelligence?</h2>
            <p className="text-lg text-slate-gray/80 leading-relaxed">
              In a sea of AI possibilities, we are your guide to clarity and confident action. Our expertise isn't just technical—it's strategic. We connect the power of AI to the realities of your business, ensuring every step forward is intentional, ethical, and impactful.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div>
                    <CheckIcon />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-lg font-bold text-deep-teal">{point.title}</h3>
                    <p className="text-slate-gray/80">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCascade;
