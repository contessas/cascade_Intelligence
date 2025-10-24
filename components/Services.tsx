
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-white p-8 rounded-lg border border-sky-blue/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="h-1 w-16 bg-coral mb-4 rounded"></div>
    <h3 className="font-montserrat text-xl font-bold text-deep-teal mb-3">{title}</h3>
    <p className="text-slate-gray/80">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "AI Readiness Workshop",
      description: "A collaborative session to demystify AI, align your team, and identify high-impact opportunities within your organization."
    },
    {
      title: "AI Roadmap Advisory",
      description: "We partner with you to develop a clear, actionable AI strategy and roadmap that aligns with your business goals."
    },
    {
      title: "Fractional AI Advisor",
      description: "Get executive-level AI guidance and oversight without the cost of a full-time hire. We provide ongoing strategic support."
    },
    {
      title: "Implementation Sprints",
      description: "Move from plan to reality. We guide your team through focused sprints to build, test, and deploy AI solutions."
    },
  ];

  return (
    <section id="services" className="bg-warm-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-slate-gray mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-gray/80">
            We offer a suite of services designed to meet you where you are and guide you to where you need to be.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
