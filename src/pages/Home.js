import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Palette,
  Code2,
  Search,
  Server,
  Megaphone,
  Code,
  ShoppingCart,
  Users,
  Layout,
  Headphones,
  ArrowUpRight,
  Mail,
  Phone
} from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CONTACT_API_URL =
  process.env.REACT_APP_CONTACT_API_URL || 'http://localhost:5000/api/contact';

const Home = () => {
  useScrollAnimation();
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Enginerds',
    url: 'https://www.enginerds.in/',
    logo: 'https://www.enginerds.in/logo.svg',
    description:
      'Enginerds provides bespoke software development, e-commerce, SaaS, AI automation, and IT support services for high-growth teams.',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@enginerds.in',
      telephone: '+91 85679 27943',
      contactType: 'sales',
      areaServed: 'IN'
    },
    sameAs: [
      'https://www.linkedin.com/in/enginerds/',
      'https://www.facebook.com/enginerds',
      'https://www.instagram.com/enginerds.in',
      'https://wa.me/918567927943'
    ]
  };

  const offerings = [
    {
      title: 'Development',
      description: 'Pixel-perfect engineering across modern stacks and workflows.',
      icon: Code
    },
    {
      title: 'E-Commerce Development',
      description: 'High-performing WooCommerce and Shopify storefronts tailored for memorable shopping journeys.',
      icon: ShoppingCart
    },
    {
      title: 'SAAS Solutions',
      description: 'Customer experience platforms that centralize insights for success.',
      icon: Users
    },
    {
      title: 'Web Design',
      description: 'Vibrant, intuitive, and minimal digital expressions of your brand.',
      icon: Layout
    },
    {
      title: 'IT Support',
      description: 'Always-on experts ready to troubleshoot and optimize your systems.',
      icon: Headphones,
      tag: 'Free!'
    }
  ];

  const consultingHighlights = [
    '24/7 Full Service Support',
    'Immediate Response',
    'Easy to approach us'
  ];

  const caseStudies = [
    {
      name: 'Development',
      badgePrimary: 'Web Development',
      badgeSecondary: 'Mobile Development',
      route: '/services/development',
      imagePrimary:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
      imageSecondary:
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      description:
        'Software development is a dynamic and rapidly evolving field that shapes the digital landscape. We design, create, deploy, and maintain modern applications and systems.'
    },
    {
      name: 'E-Commerce Development',
      badgePrimary: 'Woo Commerce',
      badgeSecondary: 'Shopify Development',
      route: '/services/ecommerce',
      imagePrimary:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      imageSecondary:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      description:
        'We build immersive WooCommerce and Shopify experiences that balance brand storytelling with intuitive purchasing journeys and robust integrations.'
    },
    {
      name: 'SAAS Solutions',
      badgePrimary: 'ERP Development',
      badgeSecondary: 'CRM Development',
      route: '/services/saas-solutions',
      imagePrimary:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
      imageSecondary:
        'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80',
      description:
        'We deliver cloud-native SaaS suites that unify ERP back office operations with CRM engagement tools, automating workflows and surfacing actionable insights across the customer lifecycle.'
    },
    {
      name: 'AI Automations',
      badgePrimary: 'AI Agents',
      badgeSecondary: 'AI Bots',
      route: '/services/ai-automations',
      imagePrimary:
        'https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80',
      imageSecondary:
        'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
      description:
        'We craft conversational AI agents and process-specific bots that streamline operations, enhance customer experience, and deliver intelligent automation across channels.'
    },
    {
      name: 'IT Support',
      badgePrimary: 'Managed Services',
      badgeSecondary: 'Security Operations',
      route: '/services/it-support',
      imagePrimary:
        'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
      imageSecondary:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      description:
        'Our 24/7 IT support covers proactive monitoring, rapid incident response, and lifecycle management for hybrid infrastructures.'
    }
  ];

  const portfolioGrid = [
    {
      image: '/portfolio/Screenshot 2025-11-14 154038.png',
      title: 'Vion Industries',
      description:
        'Manufacturing partner site crafted to spotlight injection moulding expertise, certifications, and a detailed part gallery for enterprise buyers.',
      url: 'https://vionindustries.in/'
    },
    {
      image: '/portfolio/Screenshot 2025-11-14 153525.png',
      title: 'Maternity Wardrobe Store',
      description:
        'Custom Shopify storefront with curated collections, shoppable lookbooks, and conversational support that boosted conversion by 28% in three months.',
      url: 'https://mumzhug.com/'
    },
    {
      image: '/portfolio/Screenshot 2025-11-14 153540.png',
      title: 'JIT University Admissions',
      description:
        'End-to-end admissions portal modernizing program discovery, lead capture, and CRM sync for thousands of prospective students each intake.',
      url: 'https://jit.edu.in/'
    },
    {
      image: '/portfolio/Screenshot 2025-11-14 153610.png',
      title: 'Kaalingh Cosmetics',
      description:
        'High-impact D2C beauty experience with campaign landing pages, localized pricing, and automated marketing journeys driving repeat orders.',
      url: 'https://kaalingh.in/'
    }
  ];

  const [activeCase, setActiveCase] = useState(caseStudies[0]);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleCaseChange = (nextCase) => {
    if (nextCase.name === activeCase.name) return;
    setActiveCase(nextCase);
  };

  const handleServiceNavigate = (route) => {
    if (!route) return;
    navigate(route);
  };

  const handleContactChange = (field) => (event) => {
    const { value } = event.target;
    setContactForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (contactStatus.loading) return;

    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      setContactStatus({
        loading: false,
        success: null,
        error: 'Please fill in your name, email, and message before submitting.'
      });
      return;
    }

    setContactStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactForm)
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(errorBody.message || 'Unable to send your message. Please try again later.');
      }

      setContactStatus({
        loading: false,
        success: 'Thank you! Your message has been sent successfully.',
        error: null
      });
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setContactStatus({
        loading: false,
        success: null,
        error: error.message || 'Unable to send your message. Please try again later.'
      });
    }
  };

  const consultingSteps = [
    {
      title: 'Discovery and Analysis',
      description: "Perform an analysis of the client's existing IT systems."
    },
    {
      title: 'Tailored Solutions',
      description: 'Develop IT solutions based on the analysis phase.'
    },
    {
      title: 'Deployment and Support',
      description: 'Regularly communicate with our client to any concern.'
    }
  ];

  const processSteps = [
    {
      title: 'Brainstorming Ideas',
      description: 'Collaborative discovery sessions to surface high-impact opportunities.',
      icon: Brain
    },
    {
      title: 'Product Design',
      description: 'Design systems and prototypes that align brand, UX, and business goals.',
      icon: Palette
    },
    {
      title: 'Front-End Development',
      description: 'Interfaces engineered for performance, accessibility, and delight.',
      icon: Code2
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven improvements that help your product stay visible and competitive.',
      icon: Search
    },
    {
      title: 'Back-End Development',
      description: 'Robust, scalable services architected for security and reliability.',
      icon: Server
    },
    {
      title: 'Digital Marketing',
      description: 'Launch strategies that extend reach and drive measurable growth.',
      icon: Megaphone
    }
  ];


  const teamFeatures = [
    {
      title: 'Diverse Expertise',
      description:
        'Seasoned engineers, designers, and strategists collaborate to tackle complex challenges across industries.'
    },
    {
      title: 'Collaborative Culture',
      description:
        'Transparent communication and cross-functional squads keep delivery fast, focused, and consistent.'
    },
    {
      title: 'Customer-Centric Approach',
      description:
        'Every engagement starts with discovery, aligning business goals with user needs for measurable outcomes.'
    },
    {
      title: 'Passion for Excellence',
      description:
        'Continuous improvement and rigorous QA ensure every release meets enterprise-grade expectations.'
    },
    {
      title: 'Empowered Learning',
      description:
        'Mentorship, guilds, and skill-building programs keep our teams sharp on emerging technologies.'
    },
    {
      title: 'Innovation and Creativity',
      description:
        'Ideation sprints and rapid prototyping unlock breakthrough solutions tailored to your roadmap.'
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Enginerds | Software Development & AI Automation Experts</title>
        <meta
          name="description"
          content="Enginerds delivers end-to-end software development, e-commerce solutions, SaaS platforms, AI automations, and managed IT support to accelerate digital growth."
        />
        <meta
          name="keywords"
          content="software development company, e-commerce development, SaaS solutions, AI automation, IT consulting, Enginerds"
        />
        <link rel="canonical" href="https://www.enginerds.in/" />
        <meta property="og:title" content="Enginerds | Software Development & AI Automation Experts" />
        <meta
          property="og:description"
          content="Partner with Enginerds for custom software, e-commerce platforms, SaaS products, and AI-powered automations that elevate your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.enginerds.in/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enginerds | Software Development & AI Automation Experts" />
        <meta
          name="twitter:description"
          content="Custom software, SaaS platforms, and AI automation solutions that drive measurable growth."
        />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-16 lg:pb-32">
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80"
          alt="Modern corporate office"
          className="absolute inset-0 h-full w-full object-cover scale-105 brightness-50"
        />
        <div className="absolute inset-0 backdrop-blur-[6px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-space-950/95 via-space-900/92 to-space-800/88 smoky-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-start">
            <div className="max-w-2xl mx-auto text-center lg:text-left space-y-8 scroll-animate">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30 shadow-glow-md">
                <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></span>
                Welcome to Enginerds
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white text-glow-white leading-tight">
                Transforming bold ideas into perpetually adaptive products
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
                We partner with founders and future-focused enterprises to design, engineer, and scale digital experiences across web, mobile, and AI-driven platforms. From discovery workshops to market launch, our squads ship measurable outcomes—fast.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 text-sm max-w-xl mx-auto lg:mx-0">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl text-gray-200 text-center sm:text-left">
                  <span className="block text-2xl font-semibold text-white">120+</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-300">Projects shipped</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl text-gray-200 text-center sm:text-left">
                  <span className="block text-2xl font-semibold text-white">35+</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-300">Industries served</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl text-gray-200 text-center sm:text-left">
                  <span className="block text-2xl font-semibold text-white">5x</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary-300">Average ROI</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:brightness-110"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/918567927943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-primary-400 text-primary-100 font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-[#FE6301]/15 hover:to-[#FF9101]/15 hover:shadow-glow-md"
                >
                  WhatsApp Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="scroll-animate mt-8 lg:mt-0">
              <div className="glass-dark rounded-3xl shadow-glow-md border border-neon-cyan/20 p-6 sm:p-8">
                <div className="space-y-2 mb-6">
                  <span className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
                    Contact Us
                  </span>
                  <h2 className="text-2xl font-semibold text-white">Start your project with Enginerds</h2>
                  <p className="text-sm text-gray-300">
                    Share a few details and our team will reach out within one business day.
                  </p>
                </div>
                <form className="space-y-4" onSubmit={handleContactSubmit} noValidate>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="hero-contact-name">
                      Name*
                    </label>
                    <input
                      id="hero-contact-name"
                      type="text"
                      className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan"
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={handleContactChange('name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="hero-contact-email">
                      Email*
                    </label>
                    <input
                      id="hero-contact-email"
                      type="email"
                      className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan"
                      placeholder="Your Mail Id"
                      value={contactForm.email}
                      onChange={handleContactChange('email')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="hero-contact-phone">
                      Phone
                    </label>
                    <input
                      id="hero-contact-phone"
                      type="tel"
                      className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple"
                      placeholder="Your Phone number"
                      value={contactForm.phone}
                      onChange={handleContactChange('phone')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="hero-contact-message">
                      Project Details*
                    </label>
                    <textarea
                      id="hero-contact-message"
                      rows="4"
                      className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan resize-none"
                      placeholder="Tell us briefly about your project or requirements"
                      value={contactForm.message}
                      onChange={handleContactChange('message')}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${contactStatus.loading
                      ? 'bg-neon-cyan/50 text-white cursor-not-allowed'
                      : 'bg-primary-500 text-gray-900 hover:bg-primary-400'
                      }`}
                    disabled={contactStatus.loading}
                  >
                    {contactStatus.loading ? 'Sending…' : 'Submit inquiry'}
                  </button>
                  {contactStatus.success && (
                    <p className="text-sm font-medium text-green-600 text-center">
                      {contactStatus.success}
                    </p>
                  )}
                  {contactStatus.error && (
                    <p className="text-sm font-medium text-red-600 text-center">
                      {contactStatus.error}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-charcoal-900 to-charcoal-800"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_45%),_radial-gradient(circle_at_bottom_right,_rgba(94,155,255,0.18),_transparent_55%)]"></div>
        <div className="relative max-w-[1200px] xl:max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-white">
          <div className="grid gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-[minmax(0,1fr),minmax(0,1.7fr)] items-start">
            <div className="space-y-6 scroll-animate">
              <div className="uppercase tracking-[0.35em] text-primary-200 text-xs font-semibold">
                Our Model
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                The Method Behind Every Success
              </h2>
              <p className="text-lg text-primary-100/80 max-w-md">
                Our end-to-end approach integrates design thinking, engineering excellence, and marketing intelligence to help you reach your goals faster and smarter.
              </p>
              <Link
                to="/our-model"
                className="inline-flex items-center bg-primary-500 hover:bg-primary-400 text-dark font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg shadow-primary-500/30"
              >
                Discover How We Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="relative lg:ml-auto w-full scroll-animate">
              <div className="pointer-events-none hidden lg:block absolute inset-6 xl:inset-8">
                <div className="absolute top-6 bottom-6 left-[33.333%] border-l border-dashed border-white/15"></div>
                <div className="absolute top-6 bottom-6 left-[66.666%] border-l border-dashed border-white/15"></div>
                <div className="absolute left-8 right-8 top-1/2 border-t border-dashed border-white/15"></div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="relative group h-full rounded-2xl bg-charcoal-800/80 backdrop-blur border border-white/5 p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.8)]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/10 text-primary-200">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="absolute -bottom-2 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  );
                })}
              </div>
              <div className="hidden sm:block pointer-events-none absolute inset-10 border border-dashed border-white/10 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="services" className="py-20 bg-space-950 cyber-grid-bg">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">
            <div className="space-y-4 scroll-animate">
              <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500">
                What we're offering
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white leading-snug">
                Dealing in all professional IT services.
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed scroll-animate">
              One fundamental aspect of IT services is infrastructure management. This involves the design,
              implementation, and maintenance of the hardware, software, networks, and servers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 scroll-animate">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="relative h-full rounded-3xl glass border border-neon-cyan/20 p-8 shadow-glow-md transition-all duration-200 hover:-translate-y-2 hover:shadow-glow-md"
                >
                  {item.tag && (
                    <span className="absolute -top-3 right-6 inline-flex items-center rounded-full bg-primary-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-neon-pink">
                      {item.tag}
                    </span>
                  )}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500 mb-6">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="relative py-24 bg-space-950">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_45%),_radial-gradient(circle_at_bottom,_rgba(255,255,255,0.1),_transparent_55%)]"></div>
        <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 scroll-animate">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
              Our Services
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white mb-4">
              Detailing of our products
            </h2>
            <p className="text-lg text-gray-300">
              Our core service lines span modern software delivery web, mobile, SaaS, AI automation, and managed ITto move your roadmap forward with confidence.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 scroll-animate">
            {caseStudies.map((study) => (
              <button
                key={study.name}
                type="button"
                onMouseEnter={() => handleCaseChange(study)}
                onFocus={() => handleCaseChange(study)}
                onClick={() => handleServiceNavigate(study.route)}
                aria-pressed={activeCase.name === study.name}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan/70 focus-visible:ring-offset-2 focus-visible:ring-offset-space-900 ${activeCase.name === study.name
                  ? 'bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-gray-900 shadow-glow-md'
                  : 'glass text-white hover:bg-white/10'
                  }`}
              >
                {study.name}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr,1.05fr,0.9fr] items-stretch">
            <div className="relative overflow-hidden rounded-3xl glass-dark border border-primary-500/15 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(254,99,1,0.32)] hover:border-primary-500/40">
              <div className="flex items-center justify-between px-6 pt-6">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FE6301]/15 to-[#FF9101]/15 text-primary-100 font-medium text-xs px-3 py-1">
                  {activeCase.badgePrimary}
                </span>
              </div>
              <img
                src={activeCase.imagePrimary}
                alt={`${activeCase.name} project showcase primary view`}
                className="mt-4 h-80 w-full object-cover"
              />
            </div>

            <div className="relative overflow-hidden rounded-3xl glass-dark border border-primary-500/15 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(255,92,26,0.35)] hover:border-primary-500/40">
              <div className="flex items-center justify-between px-6 pt-6">
                <span className="inline-flex items-center rounded-full bg-primary-500/20 text-primary-500 font-medium text-xs px-3 py-1">
                  {activeCase.badgeSecondary}
                </span>
              </div>
              <img
                src={activeCase.imageSecondary}
                alt={`${activeCase.name} project showcase secondary view`}
                className="mt-4 h-80 w-full object-cover" />
            </div>

            <div className="rounded-3xl glass-dark p-10 border border-primary-500/15 shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(254,99,1,0.36)] hover:border-primary-500/45 flex flex-col">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#FE6301]/12 to-[#FF9101]/12 text-primary-100 mb-6">
                <ArrowRight className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-semibold text-white mb-4">{activeCase.name}</h3>
              <p className="text-sm text-gray-300 leading-relaxed flex-1">{activeCase.description}</p>
              <Link
                to={activeCase.route || '/services'}
                className="mt-6 inline-flex items-center justify-center self-start rounded-full bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-gray-900 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:brightness-110"
              >
                Learn more
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Selected work we've delivered */}
      <section id="portfolio" className="py-20 bg-space-950 cyber-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 scroll-animate">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-6">
              <div className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500">
                  Portfolio
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white">
                  Selected work we've delivered
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl">
                  A snapshot of platforms, apps, and websites crafted for clients across industries.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-500 text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:bg-primary-400 whitespace-nowrap self-start sm:self-auto"
              >
                View All
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {portfolioGrid.slice(0, 4).map((project, index) => {
              const cardClasses =
                'group relative h-80 rounded-3xl overflow-hidden shadow-[0_24px_55px_-35px_rgba(15,23,42,0.6)] bg-slate-900 text-white cursor-default transition-transform duration-300 hover:-translate-y-2 scroll-animate';

              const cardContent = (
                <>
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300 mb-2">
                        Case Study
                      </p>
                      <h3 className="text-xl font-semibold leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-between p-6 bg-slate-950/95 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300 mb-3">
                        Overview
                      </p>
                      <h3 className="text-xl font-semibold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>End-to-end delivery</span>
                      <span className="inline-flex items-center gap-1 text-primary-300 font-medium">
                        View details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </>
              );

              if (project.url) {
                return (
                  <a
                    key={`${project.title}-${index}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500`}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div key={`${project.title}-${index}`} className={cardClasses}>
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consulting Excellence Section */}
      <section id="consulting" className="py-20 bg-space-900 cyber-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,1.1fr] items-start">
            <div className="space-y-6 scroll-animate">
              <div className="uppercase tracking-[0.35em] text-xs font-semibold text-primary-500">
                Consulting Excellence
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white leading-tight">
                Best pathway to our clients.
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Our consulting process begins with a thorough assessment of your current IT infrastructure, workflows, and pain points.
              </p>
              <ul className="space-y-4">
                {consultingHighlights.map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/10 text-primary-500">
                      <CheckCircle className="h-4 w-4" />
                    </span>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative scroll-animate">
              <div className="hidden sm:block absolute left-6 top-6 bottom-6 border-l border-dashed border-primary-500/30"></div>
              <div className="space-y-6">
                {consultingSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative pl-16"
                  >
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 font-semibold shadow-glow-md">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="rounded-2xl glass border border-neon-cyan/20 p-6 shadow-glow-md">
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Strength Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.12),_transparent_60%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.2fr,1.8fr] gap-16">
            <div className="space-y-6 scroll-animate">
              <div className="uppercase tracking-[0.35em] text-primary-300 text-xs font-semibold">Features</div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-snug max-w-xl">
                Boosting your business using our team
              </h2>
              <p className="text-lg text-slate-300 max-w-lg">
                Our teams are a melting pot of diverse expertise and perspectives. From seasoned industry specialists to
                emerging talent, every member brings a unique set of experiences that elevate your initiatives.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-10 scroll-animate">
              {teamFeatures.map((feature, idx) => (
                <div key={feature.title} className="space-y-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-500/15">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary-400"></span>
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-base text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-animate">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Let's get in touch
              </h2>
              <p className="text-xl text-gray-600 mb-5">
                Your success matters to us. Let’s talk about how technology can boost your business and unlock real growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 text-gray-600 mb-8">
                <a href="mailto:contact@enginerds.in" className="inline-flex items-center justify-center gap-2 text-sm font-medium">
                  <Mail className="w-4 h-4 text-primary-500" />
                  contact@enginerds.in
                </a>
                <span className="hidden sm:block text-gray-300">|</span>
                <a href="tel:+918567927943" className="inline-flex items-center justify-center gap-2 text-sm font-medium">
                  <Phone className="w-4 h-4 text-primary-500" />
                  +91 85679 27943
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/918567927943"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border-2 border-green-500 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
                >
                  WhatsApp Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl shadow-[0_24px_55px_-35px_rgba(15,23,42,0.45)] border border-slate-100 p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h3>
              <form className="space-y-4" onSubmit={handleContactSubmit} noValidate>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Pawan Kumar"
                    value={contactForm.name}
                    onChange={handleContactChange('name')}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact-email">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="contact@enginerds.in"
                      value={contactForm.email}
                      onChange={handleContactChange('email')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact-phone">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+91 85679 27943"
                      value={contactForm.phone}
                      onChange={handleContactChange('phone')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    className="block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                    placeholder="Tell us briefly about your project or requirements"
                    value={contactForm.message}
                    onChange={handleContactChange('message')}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`inline-flex w-full items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl ${contactStatus.loading
                    ? 'bg-primary-400 text-white cursor-not-allowed'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                    }`}
                  disabled={contactStatus.loading}
                >
                  {contactStatus.loading ? 'Sending…' : 'Submit'}
                </button>
                {contactStatus.success && (
                  <p className="text-sm font-medium text-green-600 text-center">
                    {contactStatus.success}
                  </p>
                )}
                {contactStatus.error && (
                  <p className="text-sm font-medium text-red-600 text-center">
                    {contactStatus.error}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
