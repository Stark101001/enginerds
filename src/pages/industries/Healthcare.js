import React from 'react';
import { CheckCircle, Activity, Shield, Stethoscope, Cpu, Users, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SEO from '../../components/SEO';

const carePillars = [
  {
    title: 'Connected Care Journeys',
    description:
      'Link EHR, telehealth, pharmacy, and billing workflows so clinicians always have a complete, real-time view of the patient story.'
  },
  {
    title: 'Operational Intelligence',
    description:
      'Predict demand, orchestrate staffing, and track inventory in minutes with analytics pipelines that surface anomalies instantly.'
  },
  {
    title: 'Patient Experience Platforms',
    description:
      'Launch portals, companion apps, and AI assistants that keep patients informed, scheduled, and engaged between visits.'
  }
];

const capabilityCards = [
  {
    icon: Stethoscope,
    title: 'Virtual care & RPM',
    points: [
      'HIPAA-ready telemedicine suites',
      'Remote patient monitoring dashboards',
      'IoT gateway integrations'
    ]
  },
  {
    icon: Shield,
    title: 'Compliance & trust',
    points: [
      'Zero trust reference architectures',
      'Audit-ready data trails',
      'PHI encryption & key rotation'
    ]
  },
  {
    icon: Cpu,
    title: 'AI decision support',
    points: [
      'Clinical NLP for chart summarization',
      'Predictive risk scoring models',
      'Copilot experiences for triage teams'
    ]
  }
];

const careOpsStats = [
  { label: 'Clinical systems connected', value: '14+ integrations' },
  { label: 'Time back to nurses', value: '2 hrs / shift' },
  { label: 'First-pass claim accuracy', value: '+9% lift' }
];

const Healthcare = () => {
  useScrollAnimation();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Healthcare Industry IT Solutions',
    description: 'See how Enginerds modernizes healthcare with connected care platforms, analytics, automation, and secure integrations.',
    author: {
      '@type': 'Organization',
      name: 'Enginerds'
    }
  };

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <SEO
        title="Healthcare IT Solutions | Connected Care Platforms | Enginerds"
        description="Modernize healthcare with connected care platforms, analytics, automation, and secure integrations. HIPAA-ready telemedicine, EHR integration, and AI decision support."
        keywords="healthcare IT, telemedicine, EHR integration, HIPAA compliance, healthcare analytics, patient engagement, clinical systems"
        canonical="/industries/healthcare"
        ogTitle="Healthcare IT Solutions | Connected Care Platforms"
        ogDescription="IT that keeps clinicians connected and patients confident. Interoperable systems, modern data stacks, and AI-enabled workflows."
        ogImage="https://www.enginerds.in/og-healthcare.jpg"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1580281657521-4a39e61d36b2?auto=format&fit=crop&w=1920&q=80"
          alt="Healthcare technology"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <p className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Healthcare industry
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              IT that keeps clinicians connected and patients confident
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              We design interoperable systems, modern data stacks, and AI-enabled workflows that give caregivers more time for care and patients more control over their health journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Discuss a healthcare sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                View industry work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">How we help</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white mb-4">Digital care foundations we build</h2>
            <p className="text-gray-300">
              From front-office experience to back-office orchestration, our squads bridge legacy EMRs with modern experience layers and analytics platforms.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {carePillars.map((pillar) => (
              <div key={pillar.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                <h3 className="text-xl font-semibold text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-gradient-to-br from-white via-[#FFF4EC] to-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-20 h-64 w-64 bg-primary-200/30 blur-[120px]"></div>
          <div className="absolute bottom-0 left-12 h-48 w-48 bg-orange-200/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="space-y-8 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Care operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Where IT moves the needle</h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We instrument every step of the care journey—from referral to reimbursement—with auditable data and workflow visibility. Your teams gain proactive alerts, automation-ready checklists, and the confidence to scale programs without increasing burnout.
              </p>
              <ul className="space-y-4">
                {[
                  'Unified clinician workbenches pull data from EHR, PACS, LIS, and ERP in near real time.',
                  'Patient access centers use AI routing and chatbots to coordinate visits 24/7.',
                  'Revenue cycles modernize with rules engines that scrub claims before submission.'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <CheckCircle className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-4 sm:grid-cols-3">
                {careOpsStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/60 bg-white/90 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.55)] p-4 text-center">
                    <p className="text-xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {capabilityCards.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="rounded-3xl border border-white/70 bg-white p-6 shadow-[0_35px_65px_-40px_rgba(15,23,42,0.65)] scroll-animate"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/15 to-primary-400/20 text-primary-600">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{capability.title}</h3>
                        <p className="text-xs uppercase tracking-[0.35em] text-primary-300">Focus area</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {capability.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                          {point}
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

      <section className="py-20 bg-gradient-to-b from-space-950 via-space-900 to-space-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1fr,0.85fr] items-center">
          <div className="space-y-5 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-300">Partner with us</p>
            <h2 className="text-3xl font-bold text-glow-white">Launch your next healthcare initiative</h2>
            <p className="text-gray-300">
              Whether you are digitizing service lines, connecting wearable data, or building command centers, we bring healthcare SMEs, engineers, and designers to the same sprint table.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Book a discovery call
              </a>
              <a
                href="mailto:info@enginerds.in"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:border-primary-400"
              >
                Email the team
              </a>
            </div>
          </div>
          <div className="glass-dark rounded-3xl border border-primary-500/20 p-8 shadow-glow-md space-y-4 scroll-animate">
            <div className="flex items-center gap-3">
              <Activity className="h-6 w-6 text-primary-300" />
              <h3 className="text-xl font-semibold">Engagement snapshots</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'Digital front door for a 40-location hospital network',
                'AI documentation assistant for home health nurses',
                'Population-health analytics hub covering 1.2M members'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-primary-400 mt-1" />
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

export default Healthcare;
