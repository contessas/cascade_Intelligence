
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Services from './components/Services';
import Process from './components/Process';
import WhyCascade from './components/WhyCascade';
import Founder from './components/Founder';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Challenge />
        <Services />
        <Process />
        <WhyCascade />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
