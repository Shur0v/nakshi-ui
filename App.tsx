
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import CeoMessage from './components/CeoMessage';
import WhyUs from './components/WhyUs';
import ProductList from './components/ProductList';
import TechnicalSupport from './components/TechnicalSupport';
import Sustainability from './components/Sustainability';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TrustStrip />
        <section id="about">
          <About />
        </section>
        <section id="message">
          <CeoMessage />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="products">
          <ProductList />
        </section>
        <section id="support">
          <TechnicalSupport />
        </section>
        <section id="sustainability">
          <Sustainability />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
