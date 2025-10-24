import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Challenge from './components/Challenge';
import Services from './components/Services';
import Process from './components/Process';
import WhyCascade from './components/WhyCascade';
import Founder from './components/Founder';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Workshop from './components/Workshop';

const App: React.FC = () => {
  const getPage = (hash: string): 'home' | 'workshop' => {
    if (hash.startsWith('#/workshop')) {
      return 'workshop';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPage(window.location.hash));

  // Effect to listen for URL hash changes and update the page state.
  // This runs only once when the component mounts.
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPage(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once.

  // Effect to scroll to the top whenever the page actually changes.
  // This correctly handles navigation without interfering with same-page anchor links.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    if (currentPage === 'workshop') {
      return <Workshop />;
    }
    // 'home' page
    return (
      <>
        <Hero />
        <Challenge />
        <Services />
        <Process />
        <WhyCascade />
        <Founder />
        <CTA />
      </>
    );
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main key={currentPage}>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;