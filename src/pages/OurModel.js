import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Palette,
  Code2,
  Search,
  Server,
  Megaphone,
  ArrowRight
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const modelCards = [
  {
    id: '01',
    title: 'Brainstorming Ideas',
    description: 'Collaborative discovery sessions to surface high-impact opportunities.',
    icon: Brain
  },
  {
    id: '02',
    title: 'Product Design',
    description: 'Design systems and prototypes that align brand, UX, and business goals.',
    icon: Palette
  },
  {
    id: '03',
    title: 'Front-End Development',
    description: 'Interfaces engineered for performance, accessibility, and delight.',
    icon: Code2
  },
  {
    id: '04',
    title: 'SEO Optimization',
    description: 'Data-driven improvements that help your product stay visible and competitive.',
    icon: Search
  },
  {
    id: '05',
    title: 'Back-End Development',
    description: 'Robust, scalable services architected for security and reliability.',
    icon: Server
  },
  {
    id: '06',
    title: 'Digital Marketing',
    description: 'Launch strategies that extend reach and drive measurable growth.',
    icon: Megaphone
  }
];

const OurModel = () => {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24 bg-space-950 min-h-screen text-white smoky-overlay">
      <Helmet>
        <title>Our Model | Enginerds</title>
        <meta
          name="description"
          content="Discover the Enginerds delivery model that blends strategy, design, development, and growth to launch high-impact digital solutions."
        />
      </Helmet>

      <section className="max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
        <div className="scroll-animate">
          <p className="text-sm tracking-[0.4em] uppercase text-primary-300 mb-4">
            Our Model
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gradient-pink-orange mb-6">
            The Method Behind Every Success
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
            Our end-to-end approach integrates design thinking, engineering excellence, and marketing
            intelligence to help you reach your goals faster and smarter.
          </p>
          <div className="inline-flex flex-wrap gap-4">
            <Link
              to="#model-cards"
              onClick={(event) => {
                event.preventDefault();
                const target = document.getElementById('model-cards');
                target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center bg-primary-500 hover:bg-primary-400 text-dark font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-primary-500/30"
            >
              Explore Our Playbook
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center text-white/80 hover:text-white border border-white/10 px-6 py-3 rounded-lg transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>

        <div
          id="model-cards"
          className="scroll-animate grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {modelCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="glass-dark border border-white/5 rounded-2xl p-6 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:border-primary-500/40"
              >
                <span className="absolute top-4 right-4 text-sm font-semibold text-primary-300/80">
                  {card.id}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 lg:px-0 mt-20 scroll-animate">
        <div className="glass-dark rounded-3xl border border-primary-500/20 p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discover How We Work?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Partner with Enginerds to turn ambitious ideas into enduring digital experiences—through a model that
            keeps strategy, execution, and growth in perfect sync.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary-500 hover:bg-primary-400 text-dark font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-primary-500/30"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurModel;
