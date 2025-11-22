import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CreditCard, TrendingUp, ArrowRight, CircleDollarSign, BarChart, Lock } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const modernizationTracks = [
  {
    title: 'Trusted digital onboarding',
    description:
      'Fuse eKYC, AML, and fraud engines into a single workflow so customers can open accounts in minutes while compliance teams keep full visibility.'
  },
  {
    title: 'Cloud-native core & data fabric',
    description:
      'Modernize legacy cores with composable services, resilient APIs, and an event-driven fabric that keeps every line of business in sync.'
  },
  {
    title: 'Real-time risk & treasury intelligence',
    description:
      'Stream risk data from trading, lending, and payments into dashboards that guide liquidity and capital decisions throughout the day.'
  }
];

const capabilityGrid = [
  {
    icon: CreditCard,
    heading: 'Experience & channels',
    bullets: ['Unified banking super-apps', 'Digital lending journeys', 'Personalized wealth portals']
  },
  {
    icon: ShieldCheck,
    heading: 'Risk, fraud & compliance',
    bullets: ['AI anomaly detection', 'Case management copilots', 'Reg-report automation']
  },
  {
    icon: TrendingUp,
    heading: 'Operations & automation',
    bullets: ['Straight-through processing', 'Cloud data lakes & ELT', 'Self-healing infrastructure']
  }
];


const financePlays = [
  'Digital onboarding platforms with biometric verification & AML scoring',
  'Payment orchestration layers that intelligently route card, UPI, and RTP traffic',
  'Portfolio intelligence portals that surface client insights and proactive advice',
  'Core banking modernization strategies with API-first accelerators'
];

const Finance = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>Finance & Banking IT Solutions | Enginerds</title>
        <meta
          name="description"
          content="Digitize finance & banking with secure onboarding, core modernization, real-time risk intelligence, and automation programs delivered by Enginerds."
        />
        <link rel="canonical" href="https://www.enginerds.in/industries/finance" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=2000&q=80"
          alt="Finance technology"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Finance & Banking
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Secure, modern, always-on financial experiences
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              We help banks, NBFCs, and fintechs re-architect customer journeys, core systems, and risk operations with cloud-native platforms and AI support so every interaction is compliant, fast, and delightful.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Start a transformation call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                Recent finance wins
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">What we modernize</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">Digital foundations for future-ready finance</h2>
            <p className="text-gray-300">
              We connect siloed cores, streamline risk, and build new digital revenue channels without compromising governance.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {modernizationTracks.map((pillar) => (
              <div key={pillar.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 left-20 h-56 w-56 bg-slate-200/50 blur-[120px]"></div>
          <div className="absolute bottom-0 right-10 h-64 w-64 bg-primary-200/30 blur-[140px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Front-to-back value
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Where IT delivers measurable gains</h2>
              <ul className="space-y-4">
                {financePlays.map((play) => (
                  <li key={play} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <CircleDollarSign className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{play}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {capabilityGrid.map((card) => {
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
            <h2 className="text-3xl font-bold text-glow-white">Launch the next finance innovation cycle</h2>
            <p className="text-gray-300">
              From digital-only banks and NBFCs to enterprise-grade treasuries, we orchestrate squads of solution architects, security engineers, and designers to deliver rapid proofs and scalable platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Book a workshop
              </a>
              <a
                href="mailto:info@enginerds.in"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:border-primary-400"
              >
                Email solutions desk
              </a>
            </div>
          </div>
          <div className="glass-dark rounded-3xl border border-primary-500/20 p-8 shadow-glow-md space-y-4 scroll-animate">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary-300" />
              <h3 className="text-xl font-semibold">Program snapshots</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'API sandbox for a top-five private bank',
                'Fraud detection AI for a credit issuer with 12M cards',
                'Robo-advisory launch for an investment house'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <BarChart className="h-4 w-4 text-primary-400 mt-1" />
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

export default Finance;
