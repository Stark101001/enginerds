import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('services'); // Default to services
  const [isHidden, setIsHidden] = useState(false);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const whoWeAreTriggerRef = useRef(null);
  const whoWeArePanelRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const shouldHide =
        currentScrollY > 120 && scrollingDown && scrollDelta > 10 && !isOpen && !servicesOpen && !whoWeAreOpen;
      const shouldShow =
        !scrollingDown && scrollDelta > 10 || currentScrollY <= 120 || isOpen || servicesOpen || whoWeAreOpen;

      if (shouldHide) {
        setIsHidden(true);
      } else if (shouldShow) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, servicesOpen, whoWeAreOpen]);

  useEffect(() => {
    if (isOpen || servicesOpen || whoWeAreOpen) {
      setIsHidden(false);
    }
  }, [isOpen, servicesOpen, whoWeAreOpen]);

  useEffect(() => {
    const closeServices = () => setServicesOpen(false);
    const closeWhoWeAre = () => setWhoWeAreOpen(false);

    if (!servicesOpen && !whoWeAreOpen) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      const target = event.target;
      if (servicesOpen) {
        if (
          panelRef.current &&
          !panelRef.current.contains(target) &&
          triggerRef.current &&
          !triggerRef.current.contains(target)
        ) {
          closeServices();
        }
      }
      if (whoWeAreOpen) {
        if (
          whoWeArePanelRef.current &&
          !whoWeArePanelRef.current.contains(target) &&
          whoWeAreTriggerRef.current &&
          !whoWeAreTriggerRef.current.contains(target)
        ) {
          closeWhoWeAre();
        }
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (servicesOpen) {
          closeServices();
          triggerRef.current?.focus();
        }
        if (whoWeAreOpen) {
          closeWhoWeAre();
          whoWeAreTriggerRef.current?.focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [servicesOpen, whoWeAreOpen]);

  useEffect(() => {
    setMobileServicesOpen(false);
    setMobileWhoWeAreOpen(false);
    setIsOpen(false);
    setWhoWeAreOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const scrollToSection = (selector) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleModelClick = () => scrollToSection('#process');
  const handleConsultingClick = () => {
    navigate('/consulting');
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const handleContactClick = () => scrollToSection('#contact');

  // Mega Menu Data Structure
  const megaMenuData = {
    industries: [
      {
        name: 'Healthcare',
        path: '/industries/healthcare',
        description: 'Digital health solutions and medical technology',
        icon: '🏥'
      },
      {
        name: 'Finance & Banking',
        path: '/industries/finance',
        description: 'Fintech and banking software solutions',
        icon: '💰'
      },
      {
        name: 'Retail & E-Commerce',
        path: '/industries/retail',
        description: 'Online retail and commerce platforms',
        icon: '🛍️'
      },
      {
        name: 'Manufacturing',
        path: '/industries/manufacturing',
        description: 'Industrial automation and IoT solutions',
        icon: '🏭'
      }
    ],
    services: [
      {
        name: 'Development',
        path: '/services/development',
        description: 'Custom web & mobile app development',
        icon: '💻'
      },
      {
        name: 'E-Commerce',
        path: '/services/ecommerce',
        description: 'WooCommerce & Shopify solutions',
        icon: '🛒'
      },
      {
        name: 'SaaS Solutions',
        path: '/services/saas-solutions',
        description: 'Scalable cloud-based platforms',
        icon: '☁️'
      },
      {
        name: 'AI Automations',
        path: '/services/ai-automations',
        description: 'Intelligent automation & AI agents',
        icon: '🤖'
      },
      {
        name: 'IT Support',
        path: '/services/it-support',
        description: '24/7 technical support & maintenance',
        icon: '🛠️'
      }
    ],
    products: [
      {
        name: 'AI & Machine Learning',
        path: '/technology/ai-ml',
        description: 'Neural networks and intelligent systems',
        icon: '🧠'
      },
      {
        name: 'Cloud Infrastructure',
        path: '/technology/cloud',
        description: 'AWS, Azure, and Google Cloud solutions',
        icon: '☁️'
      },
      {
        name: 'Mobile Development',
        path: '/technology/mobile',
        description: 'React Native and Flutter apps',
        icon: '📱'
      },
      {
        name: 'Web Technologies',
        path: '/technology/web',
        description: 'React, Node.js, and modern frameworks',
        icon: '🌐'
      }
    ]
  };

  // Legacy service links for mobile menu
  const serviceLinks = megaMenuData.services;

  const suggestionItems = [
    { label: 'Home', action: handleHomeClick },
    { label: 'Our Model', action: handleModelClick },
    { label: 'Who We Are', action: () => navigate('/about') },
    { label: 'What we do', action: () => window.location.href = '/services' },
    { label: 'IT Consulting', action: handleConsultingClick },
    { label: 'Contact', action: handleContactClick }
  ];

  const filteredSuggestions = suggestionItems.filter((item) =>
    item.label.toLowerCase().includes(searchValue.trim().toLowerCase())
  );
  const showSuggestions =
    (searchActive || searchValue.trim().length > 0) && filteredSuggestions.length > 0;

  const handleSuggestionSelect = (action) => {
    if (typeof action === 'function') {
      action();
    }
    setSearchValue('');
    setSearchActive(false);
  };

  const renderSearchInput = (isMobile = false) => {
    const containerClass = isMobile ? 'relative px-2' : 'relative';
    const inputClass = isMobile
      ? 'mt-2 block w-full rounded-lg border border-white/10 bg-space-800/50 backdrop-blur-md px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan'
      : 'w-48 rounded-full border border-white/10 bg-space-800/50 backdrop-blur-md px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan';
    const inputId = isMobile ? 'navbar-search-mobile' : 'navbar-search-desktop';
    const dropdownClass = `absolute left-0 right-0 mt-2 rounded-xl border border-white/10 glass-dark shadow-neon-cyan overflow-hidden ${isMobile ? '' : ''
      }`;

    return (
      <div className={containerClass}>
        <label className="sr-only" htmlFor={inputId}>
          Search
        </label>
        <input
          id={inputId}
          type="search"
          placeholder="Search..."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setTimeout(() => setSearchActive(false), 120)}
          className={inputClass}
          aria-controls={`${inputId}-suggestions`}
        />
        {showSuggestions && (
          <ul
            id={`${inputId}-suggestions`}
            className={dropdownClass}
          >
            {filteredSuggestions.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="w-full px-4 py-2 text-left text-sm text-white hover:bg-neon-cyan/10 hover:text-neon-cyan transition-colors"
                  onMouseDown={(event) => {
                    event.preventDefault();
                    handleSuggestionSelect(item.action);
                  }}
                  onTouchStart={(event) => {
                    event.preventDefault();
                    handleSuggestionSelect(item.action);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <nav
      className={`fixed top-0 w-full z-[999] transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled || isOpen || servicesOpen || whoWeAreOpen ? 'bg-space-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={handleHomeClick} className="flex items-center space-x-3">
            <img src={logo} alt="EngiNerds" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              onClick={handleHomeClick}
              className={`text-sm font-medium transition-colors ${location.pathname === '/'
                ? 'text-primary-500'
                : 'text-white hover:text-primary-400'
                }`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                type="button"
                ref={whoWeAreTriggerRef}
                id="who-we-are-trigger"
                aria-haspopup="true"
                aria-expanded={whoWeAreOpen}
                aria-controls="who-we-are-panel"
                onMouseEnter={() => {
                  setWhoWeAreOpen(true);
                  setServicesOpen(false);
                }}
                onClick={() => {
                  const nextState = !whoWeAreOpen;
                  setWhoWeAreOpen(nextState);
                  if (nextState) {
                    setServicesOpen(false);
                  }
                }}
                className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${location.pathname === '/about'
                  ? 'text-primary-400'
                  : 'text-white hover:text-primary-300'
                  }`}
              >
                Who We Are
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${whoWeAreOpen ? 'rotate-180' : ''}`} />
              </button>

              {whoWeAreOpen && (
                <div
                  ref={whoWeArePanelRef}
                  id="who-we-are-panel"
                  role="menu"
                  aria-labelledby="who-we-are-trigger"
                  onMouseLeave={() => setWhoWeAreOpen(false)}
                  className="absolute left-0 top-full mt-4 w-[720px] rounded-3xl border border-slate-200 bg-white shadow-[0_32px_80px_-40px_rgba(15,23,42,0.18)] p-8"
                >
                  <div className="grid gap-8 md:grid-cols-[minmax(0,0.55fr),minmax(0,0.45fr)] text-slate-700">
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">Who We Are</span>
                        <h3 className="mt-3 text-2xl font-semibold text-slate-900 leading-tight">
                          Crafting human-centered technology with heart and precision.
                        </h3>
                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                          From strategists to AI engineers, our hybrid squads are built to uncover insights and ship meaningful experiences quickly.
                        </p>
                      </div>
                      <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>
                          <span>120+ products launched across fintech, healthcare, and mobility.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary-400"></span>
                          <span>Cross-functional squads blending discovery, design, engineering, and AI.</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary-400"></span>
                          <span>Embedded coaching to keep founders and operators in the loop.</span>
                        </li>
                      </ul>
                      <button
                        type="button"
                        onClick={() => {
                          setWhoWeAreOpen(false);
                          navigate('/about');
                        }}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-white text-sm font-semibold shadow-glow-md hover:brightness-110 transition-all"
                      >
                        Meet the team
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                    <div className="space-y-6 border-l border-slate-200 pl-8">
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Explore</h4>
                        <Link
                          to="/about"
                          onClick={() => setWhoWeAreOpen(false)}
                          className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-primary-400 hover:shadow-lg transition-all"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 font-semibold">A</span>
                          <span>
                            <span className="block text-base font-semibold text-slate-900 group-hover:text-primary-500">About Us</span>
                            <span className="block text-xs text-slate-500">Our origin, leadership, and values.</span>
                          </span>
                        </Link>
                        <Link
                          to="/services"
                          onClick={() => setWhoWeAreOpen(false)}
                          className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:border-primary-400 hover:shadow-lg transition-all"
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500 font-semibold">C</span>
                          <span>
                            <span className="block text-base font-semibold text-slate-900 group-hover:text-primary-500">Culture</span>
                            <span className="block text-xs text-slate-500">How we collaborate, experiment, and grow.</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* What we do Mega Menu */}
            <div
              className="relative"
            >
              <button
                type="button"
                ref={triggerRef}
                id="mega-menu-trigger"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                aria-controls="mega-menu-panel"
                onMouseEnter={() => {
                  setActiveSubmenu('services');
                  setServicesOpen(true);
                  setWhoWeAreOpen(false);
                }}
                onClick={() => {
                  const nextState = !servicesOpen;
                  setServicesOpen(nextState);
                  if (nextState) {
                    setActiveSubmenu('services');
                    setWhoWeAreOpen(false);
                  }
                }}
                className={`inline-flex items-center text-sm font-medium transition-colors duration-200 ${isServicesActive
                  ? 'text-primary-500'
                  : 'text-white hover:text-primary-400'
                  }`}
              >
                What we do
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Panel */}
              {servicesOpen && (
                <div
                  ref={panelRef}
                  id="mega-menu-panel"
                  role="menu"
                  aria-labelledby="mega-menu-trigger"
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full mt-4 w-[880px] rounded-3xl border border-slate-200 bg-white shadow-[0_32px_80px_-40px_rgba(15,23,42,0.18)] p-8"
                >
                  <div className="flex flex-col gap-6 text-slate-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-500">What we do</span>
                        <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
                          <span>Industries</span>
                          <span className="h-1 w-1 rounded-full bg-white/40"></span>
                          <span>Services</span>
                          <span className="h-1 w-1 rounded-full bg-white/40"></span>
                          <span>Technology</span>
                        </div>
                      </div>
                      <div className="flex gap-2 bg-slate-100 border border-slate-200 rounded-full p-1 text-xs font-medium text-slate-500">
                        {['industries', 'services', 'products'].map((category) => (
                          <button
                            key={category}
                            onMouseEnter={() => setActiveSubmenu(category)}
                            onClick={() => setActiveSubmenu(category)}
                            className={`px-3 py-1.5 rounded-full transition-all ${activeSubmenu === category ? 'bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-gray-900 shadow-glow-sm' : ''}`}
                          >
                            {category === 'products' ? 'Products & Tech' : category.charAt(0).toUpperCase() + category.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-[minmax(0,0.6fr),minmax(0,0.4fr)]">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {megaMenuData[activeSubmenu]?.map((item, index) => (
                          <Link
                            key={`${item.name}-${index}`}
                            to={item.path}
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:border-primary-400 hover:shadow-lg transition-all"
                          >
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-lg text-primary-500">
                              <span>{item.icon}</span>
                            </div>
                            <div className="space-y-1">
                              <h3 className="text-base font-semibold text-slate-900 group-hover:text-primary-500">
                                {item.name}
                              </h3>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-4 border-l border-slate-200 pl-6">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                          <h4 className="text-sm font-semibold text-slate-900 mb-3">Need guidance?</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            We assemble tailored squads for your industry and stage. Book a consulting session to map your next move.
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setServicesOpen(false);
                              handleConsultingClick();
                            }}
                            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FE6301] to-[#FF9101] px-4 py-2 text-sm font-semibold text-white shadow-glow-md hover:brightness-110"
                          >
                            Start a discovery call
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <h4 className="text-sm font-semibold text-slate-900 mb-2">Recently shipped</h4>
                          <ul className="space-y-2 text-xs text-slate-600">
                            <li>• AI intake agent for healthcare network</li>
                            <li>• Commerce re-platform for D2C wellness brand</li>
                            <li>• Predictive ops dashboard for logistics scale-up</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${location.pathname === '/portfolio'
                ? 'text-primary-500'
                : 'text-white hover:text-primary-400'
                }`}
            >
              Portfolio
            </Link>
            <button
              type="button"
              onClick={handleConsultingClick}
              className="text-sm font-medium text-white hover:text-primary-400 transition-colors duration-200"
            >
              IT Consulting
            </button>
            {renderSearchInput(false)}
            <button
              type="button"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-primary-500 to-primary-300 text-gray-900 px-6 py-2.5 rounded-lg font-medium hover:shadow-glow-md transition-all duration-200"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden glass-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={handleHomeClick} className="block px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-primary-500/10 hover:text-primary-500">
              Home
            </Link>
            <div>
              <button
                type="button"
                onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                className="inline-flex items-center justify-between w-full px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-primary-500/10"
              >
                <span>Who We Are</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileWhoWeAreOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileWhoWeAreOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm ${location.pathname === '/about'
                      ? 'bg-primary-500/20 text-primary-400'
                      : 'text-white hover:bg-primary-500/10 hover:text-primary-400'
                      }`}
                  >
                    About Us
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile What we do Menu */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-500 text-gray-900 font-semibold transition-all duration-200 hover:bg-primary-400 hover:shadow-glow-md"
              >
                What we do
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="px-4">
                  <div className="space-y-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-lg text-sm ${location.pathname === service.path
                          ? 'bg-neon-cyan/20 text-neon-cyan font-medium'
                          : 'text-white hover:bg-neon-cyan/10 hover:text-neon-cyan'
                          }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{service.icon}</span>
                          <span>{service.name}</span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      to="/portfolio"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm ${location.pathname === '/portfolio'
                        ? 'bg-neon-cyan/20 text-neon-cyan font-medium'
                        : 'text-white hover:bg-neon-cyan/10 hover:text-neon-cyan'
                        }`}
                    >
                      Portfolio
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={handleConsultingClick}
              className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-neon-cyan/10 hover:text-neon-cyan"
            >
              IT Consulting
            </button>
            {renderSearchInput(true)}
            <button
              type="button"
              onClick={handleContactClick}
              className="block w-full bg-primary-500 text-gray-900 px-4 py-2.5 rounded-lg font-medium text-center hover:bg-primary-400 transition-all"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
