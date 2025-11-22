import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Factory, Cog, Cpu, ArrowRight, Gauge, Workflow, Share2 } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const plantTracks = [
  {
    title: 'Connected shop floors',
    description:
      'Unify SCADA, MES, and ERP signals in near real time so production leaders can make proactive decisions from a single pane.'
  },
  {
    title: 'Smart supply networks',
    description:
      'Digitize vendor collaboration, quality checks, and logistics orchestration with APIs and workflow automation.'
  },
  {
    title: 'Predictive assets & maintenance',
    description:
      'Deploy IoT twins, anomaly detection, and AI scheduling to cut downtime and extend equipment life.'
  }
];

const capabilityCards = [
  {
    icon: Factory,
    heading: 'Digital plant',
    bullets: ['MES modernization', 'Operator dashboards', 'Traceability & genealogy']
  },
  {
    icon: Cog,
    heading: 'Industrial automation',
    bullets: ['PLC/SCADA integration', 'Robotics orchestration', 'Vision systems for QA']
  },
  {
    icon: Cpu,
    heading: 'AI & analytics',
    bullets: ['Predictive maintenance models', 'Yield optimization', 'Energy management intelligence']
  }
];


const manufacturingWins = [
  'Digital twins that replicate production lines for what-if analysis',
  'Self-service quality portals for suppliers with instant feedback loops',
  'Command centers that monitor global plants, logistics, and energy usage',
  'Modular microservices that wrap around legacy ERP/PLM systems'
];

const Manufacturing = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>Manufacturing IT Solutions | Enginerds</title>
        <meta
          name="description"
          content="Bring Industry 4.0 to life with connected shop floors, predictive maintenance, and smart supply chains engineered by Enginerds."
        />
        <link rel="canonical" href="https://www.enginerds.in/industries/manufacturing" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          alt="Manufacturing technology"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Manufacturing
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Digitized production, resilient supply chains
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              We partner with plant, OT, and IT leaders to modernize manufacturing stacks with data platforms, automations, and AI that keep throughput high and quality consistent.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Schedule a plant audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                See industrial work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">Industry 4.0 accelerators</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">Platforms that connect design, production, and delivery</h2>
            <p className="text-gray-300">
              We stitch together OT data, enterprise systems, and cloud analytics so every production run has context and traceability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plantTracks.map((track) => (
              <div key={track.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                <h3 className="text-xl font-semibold text-white mb-4">{track.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-12 left-24 h-60 w-60 bg-primary-200/35 blur-[130px]"></div>
          <div className="absolute bottom-0 right-16 h-56 w-56 bg-slate-200/30 blur-[130px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Plant operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Where IT supercharges manufacturing</h2>
              <ul className="space-y-4">
                {manufacturingWins.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <Workflow className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {capabilityCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.heading} className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_35px_65px_-40px_rgba(15,23,42,0.65)] scroll-animate">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/15 to-primary-400/20 text-primary-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{card.heading}</h3>
                        <p className="text-xs uppercase tracking-[0.35em] text-primary-300">Focus area</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-space-950/90 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr,0.85fr] items-center">
          <div className="space-y-5 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-300">Partner with Enginerds</p>
            <h2 className="text-3xl font-bold text-glow-white">Reimagine your factory of the future</h2>
            <p className="text-gray-300">
              We co-create modernization roadmaps with OT engineers, reliability teams, and supply planners to deliver quick wins without disrupting production schedules.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Book a modernization sprint
              </a>
              <a
                href="mailto:info@enginerds.in"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:border-primary-400"
              >
                Email manufacturing desk
              </a>
            </div>
          </div>
          <div className="glass-dark rounded-3xl border border-primary-500/20 p-8 shadow-glow-md space-y-4 scroll-animate">
            <div className="flex items-center gap-3">
              <Share2 className="h-6 w-6 text-primary-300" />
              <h3 className="text-xl font-semibold">Program snapshots</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'IoT retrofit for 120+ CNC machines',
                'Predictive maintenance AI for a tier-1 auto supplier',
                'Supplier collaboration portal for a global OEM'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Gauge className="h-4 w-4 text-primary-400 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
