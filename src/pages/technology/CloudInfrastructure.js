import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, ArrowRight, Cpu, Route as RouteIcon } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const cloudPillars = [
  {
    icon: Cloud,
    title: 'Cloud-native platforms',
    description: 'Microservices, containers, and serverless foundations architected for resilience and rapid iteration.'
  },
  {
    icon: Server,
    title: 'Hybrid infrastructure',
    description: 'Secure connectivity between on-prem, private, and public cloud to modernize without disruption.'
  },
  {
    icon: Shield,
    title: 'Security & compliance',
    description: 'Zero-trust access, automation, and audits baked into every environment and delivery pipeline.'
  }
];

const modernizationWins = [
  'Landing zones and guardrails for AWS, Azure, and GCP',
  'Infrastructure-as-code libraries for consistent rollouts',
  'Cost-optimized architectures with autoscaling and observability',
  'Disaster recovery and backup strategies validated under load'
];

const CloudInfrastructure = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>Cloud Infrastructure Services | Enginerds</title>
        <meta
          name="description"
          content="Design, migrate, and optimize secure cloud infrastructure across AWS, Azure, and GCP with Enginerds."
        />
        <link rel="canonical" href="https://www.enginerds.in/technology/cloud" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80"
          alt="Cloud operations"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Cloud Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Scale confidently with well-architected cloud foundations
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              From first migrations to multi-region platforms, we engineer cloud environments that balance agility, security, and cost control.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Plan a modernization
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                Review case studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">What we cover</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">Architected for uptime & speed</h2>
            <p className="text-gray-300">We combine platform engineering, DevSecOps, and FinOps practices to keep cloud investments accountable.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {cloudPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                  <Icon className="h-10 w-10 text-primary-300 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 left-14 h-60 w-60 bg-primary-200/40 blur-[130px]"></div>
          <div className="absolute bottom-0 right-10 h-56 w-56 bg-slate-200/35 blur-[130px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Cloud playbook
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Modernize while staying online</h2>
              <ul className="space-y-4 text-slate-600">
                {modernizationWins.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <RouteIcon className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_35px_65px_-40px_rgba(15,23,42,0.65)] scroll-animate">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg font-semibold text-slate-900">Cloud Control Center</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Dashboards, runbooks, and automation we customize so your SRE and platform teams can monitor health, costs, and security signals from one pane.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructure;
