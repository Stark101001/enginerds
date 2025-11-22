import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Code2, Layers, ArrowRight, Shield, Boxes, Rocket } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const webTracks = [
  {
    icon: Globe,
    title: 'Modern web platforms',
    description: 'SPA/MPA architectures with SSR, hydration, and edge delivery for lightning-fast experiences.'
  },
  {
    icon: Code2,
    title: 'Composable stacks',
    description: 'Headless CMS, commerce, and search services stitched together with secure APIs.'
  },
  {
    icon: Shield,
    title: 'Reliability & performance',
    description: 'Automated testing, observability, and performance budgets woven into every release.'
  }
];

const engineeringHighlights = [
  'Component libraries and design systems that keep every channel on-brand',
  'Event-driven backends built with Node.js, NestJS, and serverless functions',
  'CI/CD pipelines with preview environments for product, content, and QA teams',
  'Accessibility-first review cycles to keep experiences inclusive'
];

const WebTechnologies = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>Web Technologies & Engineering | Enginerds</title>
        <meta
          name="description"
          content="Engineering services for modern web platforms built with React, Node.js, and composable architectures."
        />
        <link rel="canonical" href="https://www.enginerds.in/technology/web" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=2000&q=80"
          alt="Web engineering"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Web Technologies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Progressive web experiences from concept to scale
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              We engineer responsive, resilient web products that pair compelling brand stories with measurable business outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Talk to engineering
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                Explore projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">Full-stack craft</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">Aligned squads for web innovation</h2>
            <p className="text-gray-300">Cross-functional product pods deliver discovery, design, engineering, and launch optimization in one flow.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {webTracks.map((track) => {
              const Icon = track.icon;
              return (
                <div key={track.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                  <Icon className="h-10 w-10 text-primary-300 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{track.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{track.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 left-12 h-60 w-60 bg-primary-200/40 blur-[130px]"></div>
          <div className="absolute bottom-0 right-14 h-56 w-56 bg-amber-200/35 blur-[130px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Engineering DNA
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Ship faster with composable systems</h2>
              <ul className="space-y-4 text-slate-600">
                {engineeringHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <Boxes className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_35px_65px_-40px_rgba(15,23,42,0.65)] scroll-animate">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg font-semibold text-slate-900">Web acceleration toolkit</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Starter repos, linting + testing suites, performance budgets, and governance playbooks we tailor so teams can scale delivery without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebTechnologies;
