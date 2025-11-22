import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Award,
  Briefcase,
  Globe2,
  Cpu,
  BrainCircuit,
  Rocket,
  Users,
  Lightbulb,
  ShieldCheck,
  Bot
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const serviceHighlights = [
  {
    icon: Briefcase,
    title: 'Product Engineering',
    description: 'Full-lifecycle development for web and mobile experiences built to scale with your ambitions.'
  },
  {
    icon: ShieldCheck,
    title: 'Managed IT & Support',
    description: 'Always-on monitoring, proactive maintenance, and rapid response to keep mission-critical systems online.'
  },
  {
    icon: Lightbulb,
    title: 'Growth Strategy',
    description: 'Data-backed roadmaps that connect brand storytelling with measurable marketing outcomes.'
  }
];

const industryVerticals = [
  {
    title: 'Healthcare & Wellness',
    description: 'Telehealth platforms, patient engagement apps, and HIPAA-aligned data systems that elevate care experiences.'
  },
  {
    title: 'Finance & Banking',
    description: 'Secure fintech solutions enabling digital onboarding, lending workflows, and real-time analytics.'
  },
  {
    title: 'Retail & E-Commerce',
    description: 'Omnichannel commerce ecosystems with personalization, inventory orchestration, and built-in loyalty.'
  },
  {
    title: 'Manufacturing & Industry 4.0',
    description: 'IoT-led automation, digital twins, and factory intelligence to modernize supply chains.'
  }
];

const aiCapabilities = [
  {
    icon: BrainCircuit,
    title: 'AI Strategy Workshops',
    description: 'Identify automation opportunities, prioritize use cases, and define the governance required for ethical AI adoption.'
  },
  {
    icon: Bot,
    title: 'Autonomous Assistants',
    description: 'Deploy conversational agents and process bots that orchestrate customer support, sales enablement, and internal knowledge.'
  },
  {
    icon: Cpu,
    title: 'Predictive Intelligence',
    description: 'Build ML pipelines that surface forecasts, anomaly detection, and actionable insights in near real time.'
  }
];

const About = () => {
  useScrollAnimation();

  return (
    <div className="pt-28 pb-24 bg-space-950 text-white min-h-screen smoky-overlay">
      <Helmet>
        <title>About Enginerds | Builders of Perpetually Adaptive Enterprises</title>
        <meta
          name="description"
          content="Learn about Enginerds, the multidisciplinary studio delivering bespoke software, managed IT, and AI-led innovation for ambitious brands."
        />
      </Helmet>

      <section className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-start">
          <div className="scroll-animate">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-300 mb-4">About Enginerds</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gradient-pink-orange leading-tight mb-6">
              We design adaptive solutions for ideas that refuse to stand still.
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I founded Enginerds with a simple belief: brilliant software happens when strategy, craftsmanship, and
              empathy meet. Today our team of engineers, designers, and growth specialists help emerging brands and
              enterprises launch digital experiences that stay ahead of change.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <Award className="h-4 w-4 text-primary-300" /> 8+ years of crafting digital-first products
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2">
                <Users className="h-4 w-4 text-primary-300" /> Dedicated team of strategists, engineers & storytellers
              </span>
            </div>
          </div>

          <div className="scroll-animate glass-dark rounded-3xl border border-white/10 p-8 lg:p-10 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.8)]">
            <h2 className="text-2xl font-semibold mb-4 text-white">Founder Note</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              "Every engagement begins with listening. We partner closely with you to understand what a win truly looks
              like—then align design, engineering, and go-to-market motions so success becomes inevitable." — Founder, Enginerds
            </p>
            <div className="mt-6 grid gap-4 text-sm text-gray-300">
              <div className="inline-flex items-center gap-3">
                <Globe2 className="h-5 w-5 text-primary-300" /> Serving clients across India, the Middle East, UK & USA
              </div>
              <div className="inline-flex items-center gap-3">
                <Rocket className="h-5 w-5 text-primary-300" /> Launch support from discovery workshops to sustained growth
              </div>
              <div className="inline-flex items-center gap-3">
                <Cpu className="h-5 w-5 text-primary-300" /> Human-centered innovation with AI, automation, and analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 mt-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white text-slate-900 shadow-[0_45px_80px_-65px_rgba(15,23,42,0.8)] px-6 sm:px-10 lg:px-16 py-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 right-6 h-48 w-48 bg-primary-100 blur-[120px]"></div>
            <div className="absolute bottom-0 left-10 h-44 w-44 bg-amber-100 blur-[120px]"></div>
          </div>
          <div className="relative">
            <div className="scroll-animate text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What We Deliver</h2>
              <p className="text-lg text-slate-600">
                From MVPs to enterprise-scale rollouts, we architect digital products that are resilient, measurable, and delightful.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {serviceHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="scroll-animate rounded-2xl border border-slate-200 bg-white/90 p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-40px_rgba(15,23,42,0.7)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white text-slate-900 shadow-[0_45px_80px_-65px_rgba(15,23,42,0.8)] px-6 sm:px-10 lg:px-16 py-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 h-44 w-44 -translate-x-1/2 bg-primary-100/70 blur-[120px]"></div>
          </div>
          <div className="relative">
            <div className="scroll-animate text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs tracking-[0.4em] uppercase text-primary-500 mb-4">Industries</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">We enable leaders across critical sectors.</h2>
              <p className="text-lg text-slate-600">
                Our team adapts quickly to your domain, combining deep research with industry best practices to ship experiences that resonate with real users.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {industryVerticals.map((vertical) => (
                <div
                  key={vertical.title}
                  className="scroll-animate rounded-2xl border border-slate-200 bg-white/90 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-40px_rgba(15,23,42,0.7)]"
                >
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{vertical.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{vertical.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white text-slate-900 shadow-[0_45px_80px_-65px_rgba(15,23,42,0.8)] px-6 sm:px-10 lg:px-16 py-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 right-8 h-56 w-56 bg-amber-100/60 blur-[140px]"></div>
          </div>
          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1.1fr)] items-center">
            <div className="scroll-animate">
              <p className="text-xs tracking-[0.4em] uppercase text-primary-500 mb-4">Emerging Tech</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Building with AI at the Core</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Artificial intelligence is no longer a future aspiration—it is a fundamental accelerant for businesses ready to
                own their category. Enginerds combines research-backed experimentation with production-grade engineering so
                your automation journey is both responsible and transformational.
              </p>
              <Link
                to="/services/ai-automations"
                className="inline-flex items-center mt-6 px-5 py-3 rounded-lg bg-primary-500 text-dark font-semibold hover:bg-primary-400 transition-colors duration-200"
              >
                Explore AI Automations
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {aiCapabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={capability.title}
                    className="scroll-animate rounded-2xl border border-slate-200 bg-white/90 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-40px_rgba(15,23,42,0.7)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{capability.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-10 mt-24 scroll-animate">
        <div className="glass-dark rounded-3xl border border-primary-500/20 p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let’s build something remarkable together</h2>
          <p className="text-gray-300 text-lg mb-6">
            Share your vision and we will assemble the team, technology, and roadmap to bring it to life. From product discovery
            to AI-enabled growth loops—we have you covered.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-dark font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-primary-500/30"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
