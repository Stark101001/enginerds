import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-950 text-white cyber-grid-bg border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Enginerds" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Empowering businesses with premier software solutions and exceptional support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/enginerds/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-primary-500 hover:shadow-neon-green transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/enginerds"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-primary-500 hover:shadow-neon-green transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/enginerds.in"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-primary-500 hover:shadow-neon-green transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-primary-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm hover:text-primary-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm hover:text-primary-500 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#case-studies" className="hover:text-primary-500 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-primary-500 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-primary-500 transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-primary-500 transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-primary-500 transition-colors">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@enginerds.in" className="text-sm hover:text-primary-500 transition-colors">
                  info@enginerds.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+918567927943" className="text-sm hover:text-primary-500 transition-colors">
                  +91 8567927943
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/cAWbiPxC8czW9aeXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary-500 transition-colors"
                >
                  Ludhiana, Punjab - 141010
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500/20 pt-6 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {currentYear} Enginerds. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
