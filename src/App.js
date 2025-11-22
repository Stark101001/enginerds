import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import OurModel from './pages/OurModel';
import Development from './pages/services/Development';
import ECommerce from './pages/services/ECommerce';
import SaasSolutions from './pages/services/SaasSolutions';
import AIAutomations from './pages/services/AIAutomations';
import ITSupport from './pages/services/ITSupport';
import ITConsulting from './pages/ITConsulting';
import PlaceholderPage from './pages/PlaceholderPage';
import Healthcare from './pages/industries/Healthcare';
import Finance from './pages/industries/Finance';
import Retail from './pages/industries/Retail';
import Manufacturing from './pages/industries/Manufacturing';
import AIMachineLearning from './pages/technology/AIMachineLearning';
import CloudInfrastructure from './pages/technology/CloudInfrastructure';
import MobileDevelopment from './pages/technology/MobileDevelopment';
import WebTechnologies from './pages/technology/WebTechnologies';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <Router>
      {/* Custom cursor glow */}
      <div
        className={`cursor-glow ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
        aria-hidden="true"
      />

      <div className="min-h-screen bg-space-950 text-white smoky-overlay flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/our-model" element={<OurModel />} />
            <Route path="/services/development" element={<Development />} />
            <Route path="/services/ecommerce" element={<ECommerce />} />
            <Route path="/services/saas-solutions" element={<SaasSolutions />} />
            <Route path="/services/ai-automations" element={<AIAutomations />} />
            <Route path="/services/it-support" element={<ITSupport />} />
            <Route path="/consulting" element={<ITConsulting />} />

            {/* Industries Routes */}
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />

            {/* Technology Routes */}
            <Route path="/technology/ai-ml" element={<AIMachineLearning />} />
            <Route path="/technology/cloud" element={<CloudInfrastructure />} />
            <Route path="/technology/mobile" element={<MobileDevelopment />} />
            <Route path="/technology/web" element={<WebTechnologies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
