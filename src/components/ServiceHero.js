import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceHero = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText = "Get Started",
  ctaLink = "#contact"
}) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-space-950/98 via-space-900/95 to-space-950/90 smoky-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30 shadow-glow-md mb-6">
            <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></span>
            {subtitle}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-glow-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-500 text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:bg-primary-400"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="https://wa.me/918567927943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-green-500 text-green-400 font-semibold transition-colors duration-200 hover:bg-green-500/10"
            >
              WhatsApp Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
