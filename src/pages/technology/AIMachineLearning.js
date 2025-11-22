import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrainCircuit, Sparkles, Database, ShieldCheck, ArrowRight, Workflow, Cpu } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const capabilityTiles = [
  {
    icon: Sparkles,
    title: 'Intelligent experiences',
    description: 'Conversational copilots, generative UX, and real-time personalization stitched into your applications.'
  },
  {
    icon: Database,
    title: 'Modern ML pipelines',
    description: 'Feature stores, MLOps, and observability that keep high-performing models continuously deployable.'
  },
  {
    icon: ShieldCheck,
    title: 'Responsible AI',
    description: 'Bias testing, guardrails, and governance frameworks built into every release cadence.'
  }
];

const programHighlights = [
  'AI discovery sprints to rank automation and insight opportunities',
  'Cloud-native data platforms that fuel training, evaluation, and monitoring loops',
  'Fine-tuned LLMs and embeddings optimized for proprietary datasets',
  'Human-in-the-loop workflows so teams stay confident when shipping AI products'
];

const AIMachineLearning = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>AI & Machine Learning Services | Enginerds</title>
        <meta
          name="description"
          content="Strategy, MLOps, and bespoke AI solutions to launch copilots, predictive models, and intelligent products with confidence."
        />
        <link rel="canonical" href="https://www.enginerds.in/technology/ai-ml" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=2000&q=80"
          alt="AI technology"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              AI & Machine Learning
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Launch intelligent systems that stay production-ready
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              We combine research-driven experimentation with battle-tested engineering to design and deploy AI solutions that solve real business problems while protecting data, users, and reputation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Book an AI workshop
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                See AI work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">How we partner</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">Strategy + delivery squads</h2>
            <p className="text-gray-300">
              Discovery, data readiness, model design, deployment, and continuous improvement—shipped as one integrated program.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {capabilityTiles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-dark rounded-3xl border border-white/10 p-8 shadow-glow-md scroll-animate">
                  <Icon className="h-10 w-10 text-primary-300 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white text-slate-900 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 right-12 h-60 w-60 bg-primary-200/40 blur-[130px]"></div>
          <div className="absolute bottom-0 left-16 h-56 w-56 bg-amber-200/35 blur-[130px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Operating model
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Make AI measurable and trustworthy</h2>
              <ul className="space-y-4 text-slate-600">
                {programHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <Workflow className="h-4 w-4" />
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-[0_35px_65px_-40px_rgba(15,23,42,0.65)] scroll-animate">
              <div className="flex items-center gap-3 mb-4">
                <Cpu className="h-6 w-6 text-primary-500" />
                <h3 className="text-lg font-semibold text-slate-900">AI Success Kit</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Playbooks, prompt libraries, evaluation dashboards, and governance templates we tailor to your teams so AI adoption is fast, transparent, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMachineLearning;
