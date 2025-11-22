import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Truck, Layers, Sparkles, ArrowRight, PackageSearch, Store } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const commerceTracks = [
  {
    title: 'Unified commerce platforms',
    description:
      'Consolidate product, pricing, and fulfillment data so shoppers move between web, mobile, and store experiences without friction.'
  },
  {
    title: 'Experience-led storefronts',
    description:
      'Story-driven storefronts powered by headless CMS and design systems that keep launches fast and brand teams in control.'
  },
  {
    title: 'Real-time retail intelligence',
    description:
      'Surface inventory, demand, and marketing signals in real time so merchandisers and ops teams can react instantly.'
  }
];

const capabilityCards = [
  {
    icon: ShoppingBag,
    heading: 'Digital & D2C',
    bullets: ['Headless Shopify / Woo builds', 'Marketplace integrations', 'Personalized promotion engines']
  },
  {
    icon: Truck,
    heading: 'Supply & fulfillment',
    bullets: ['OMS / WMS integrations', 'BOPIS / ship-from-store flows', 'Logistics partner APIs']
  },
  {
    icon: Layers,
    heading: 'Retail automation',
    bullets: ['AI catalog enrichment', 'Customer service copilots', 'Demand planning forecasts']
  }
];


const opsHighlights = [
  'Immersive product discovery journeys with quiz-led personalization',
  'Omnichannel carts that follow shoppers from mobile to in-store POS',
  'Automated content syndication to marketplaces and retail media networks',
  'Customer data platforms stitched together with privacy-aware identity graphs'
];

const Retail = () => {
  useScrollAnimation();

  return (
    <div className="pt-20 bg-space-950 text-white smoky-overlay">
      <Helmet>
        <title>Retail & E-Commerce IT Solutions | Enginerds</title>
        <meta
          name="description"
          content="Launch omnichannel retail experiences, automate fulfillment, and gain real-time commerce intelligence with Enginerds."
        />
        <link rel="canonical" href="https://www.enginerds.in/industries/retail" />
      </Helmet>

      <section className="relative overflow-hidden py-24">
        <img
          src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=80"
          alt="Retail technology"
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/85 to-space-900/80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 scroll-animate">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30">
              Retail & E-Commerce
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-glow-white leading-tight">
              Omnichannel experiences that convert and retain
            </h1>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              From digital-first brands to enterprise retailers, we design commerce stacks that blend creative storytelling with dependable operations so customers can browse, buy, and reorder from anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Discuss your next launch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 font-semibold hover:border-primary-400"
              >
                Explore case studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-950/95 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">Commerce building blocks</p>
            <h2 className="text-3xl sm:text-4xl lehet-bold text-glow-white">Technology foundations for growth</h2>
            <p className="text-gray-300">
              We pair brand storytellers with engineers to deliver storefronts and backend services that adapt to fast-moving retail roadmaps.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {commerceTracks.map((track) => (
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
          <div className="absolute -top-16 right-10 h-60 w-60 bg-primary-200/35 blur-[130px]"></div>
          <div className="absolute bottom-0 left-16 h-56 w-56 bg-amber-200/25 blur-[130px]"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr,0.95fr] items-start">
            <div className="space-y-6 scroll-animate">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">
                Operations & growth
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How IT unlocks retail advantage</h2>
              <ul className="space-y-4">
                {opsHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                      <Sparkles className="h-4 w-4" />
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
            <h2 className="text-3xl font-bold text-glow-white">Ship the next retail milestone</h2>
            <p className="text-gray-300">
              Launch loyalty programs, experiential commerce, and automated fulfillment with cross-functional squads that stay embedded until revenue impact is proven.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-glow-md hover:bg-primary-400"
              >
                Book a roadmap session
              </a>
              <a
                href="mailto:info@enginerds.in"
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:border-primary-400"
              >
                Email commerce desk
              </a>
            </div>
          </div>
          <div className="glass-dark rounded-3xl border border-primary-500/20 p-8 shadow-glow-md space-y-4 scroll-animate">
            <div className="flex items-center gap-3">
              <Store className="h-6 w-6 text-primary-300" />
              <h3 className="text-xl font-semibold">Program snapshots</h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                'Headless Shopify build for a global apparel brand',
                'Live shopping engine for a beauty retailer',
                'Marketplace catalog automation for a 15K SKU brand'
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <PackageSearch className="h-4 w-4 text-primary-400 mt-1" />
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

export default Retail;
