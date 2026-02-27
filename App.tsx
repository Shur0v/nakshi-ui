import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/loader';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import CeoMessage from './components/CeoMessage';
import WhyUs from './components/WhyUs';
import Authorization from './components/Authorization';
import ProductList from './components/ProductList';
import Blog from './components/Blog';
import TechnicalSupport from './components/TechnicalSupport';
import Sustainability from './components/Sustainability';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dashboard Components
import Login from './components/dashboard/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';
import BlogManagement from './components/dashboard/pages/BlogManagement';
import GalleryManagement from './components/dashboard/pages/GalleryManagement';
import ContactManagement from './components/dashboard/pages/ContactManagement';

const MainSite: React.FC = () => {
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
      <Loader />
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
        <section id="authorization">
          <Authorization />
        </section>
        <section id="why-us">
          <WhyUs />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <ProductList />
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

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />

        {/* Dashboard Auth Flow */}
        <Route
          path="/dashboard"
          element={
            !isAuthenticated ? (
              <Login onLogin={() => setIsAuthenticated(true)} />
            ) : (
              <Navigate to="/dashboard/blogs" />
            )
          }
        />

        <Route
          path="/dashboard/blogs"
          element={
            isAuthenticated ? (
              <DashboardLayout onLogout={() => setIsAuthenticated(false)}>
                <BlogManagement />
              </DashboardLayout>
            ) : <Navigate to="/dashboard" />
          }
        />

        <Route
          path="/dashboard/gallery"
          element={
            isAuthenticated ? (
              <DashboardLayout onLogout={() => setIsAuthenticated(false)}>
                <GalleryManagement />
              </DashboardLayout>
            ) : <Navigate to="/dashboard" />
          }
        />

        <Route
          path="/dashboard/contact"
          element={
            isAuthenticated ? (
              <DashboardLayout onLogout={() => setIsAuthenticated(false)}>
                <ContactManagement />
              </DashboardLayout>
            ) : <Navigate to="/dashboard" />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
