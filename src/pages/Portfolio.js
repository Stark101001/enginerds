import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const Portfolio = () => {
    useScrollAnimation();
    const navigate = useNavigate();

    const scrollToContact = () => {
        navigate('/');
        setTimeout(() => {
            const element = document.querySelector('#contact');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    const portfolioGrid = [
        {
            image: '/portfolio/Screenshot 2025-11-14 154038.png',
            title: 'Vion Industries',
            description:
                'Manufacturing partner site crafted to spotlight injection moulding expertise, certifications, and a detailed part gallery for enterprise buyers.',
            url: 'https://vionindustries.in/',
            category: 'Manufacturing'
        },
        {
            image: '/portfolio/Screenshot 2025-11-14 153525.png',
            title: 'Maternity Wardrobe Store',
            description:
                'Custom Shopify storefront with curated collections, shoppable lookbooks, and conversational support that boosted conversion by 28% in three months.',
            url: 'https://mumzhug.com/',
            category: 'E-Commerce'
        },
        {
            image: '/portfolio/Screenshot 2025-11-14 153540.png',
            title: 'JIT University Admissions',
            description:
                'End-to-end admissions portal modernizing program discovery, lead capture, and CRM sync for thousands of prospective students each intake.',
            url: 'https://jit.edu.in/',
            category: 'Education'
        },
        {
            image: '/portfolio/Screenshot 2025-11-14 153610.png',
            title: 'Kaalingh Cosmetics',
            description:
                'High-impact D2C beauty experience with campaign landing pages, localized pricing, and automated marketing journeys driving repeat orders.',
            url: 'https://kaalingh.in/',
            category: 'E-Commerce'
        }
    ];

    const metrics = [
        { label: 'Projects shipped', value: '120+' },
        { label: 'Industries served', value: '35+' },
        { label: 'Avg. ROI uplift', value: '5x' }
    ];

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: portfolioGrid.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'CreativeWork',
                name: project.title,
                description: project.description,
                url: project.url,
                category: project.category
            }
        }))
    };

    return (
        <div className="pt-20">
            <SEO
                title="Portfolio | Enginerds - Our Work & Case Studies"
                description="Explore our portfolio of successful projects including web development, e-commerce solutions, SaaS platforms, and AI automation implementations for clients across industries. 120+ projects shipped."
                keywords="portfolio, case studies, web development projects, e-commerce solutions, SaaS platforms, client work, project showcase"
                canonical="/portfolio"
                ogTitle="Portfolio | Digital Products Engineered for Impact"
                ogDescription="Platforms, apps, and websites crafted for clients across manufacturing, e-commerce, education, and wellness industries."
                ogImage="https://www.enginerds.in/og-portfolio.jpg"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=2000&q=80"
                        alt="Product designers reviewing digital work"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-space-950/95 via-space-900/92 to-space-800/88"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl space-y-6 text-left scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400">
                            Portfolio
                        </p>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-glow-white leading-tight">
                            Digital products engineered for measurable impact.
                        </h1>
                        <p className="text-lg text-gray-200">
                            We partner with ambitious teams to launch commerce platforms, SaaS suites, and intelligent experiences that move markets. Explore a few of our favorite releases.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-3">
                            {metrics.map((metric) => (
                                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
                                    <span className="block text-2xl font-semibold text-white">{metric.value}</span>
                                    <span className="text-xs uppercase tracking-[0.35em] text-primary-200">{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-space-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
                    <div className="space-y-5 scroll-animate">
                        <h2 className="text-3xl font-bold text-white">How we deliver standout launches</h2>
                        <p className="text-gray-300">
                            Every engagement blends discovery, brand-led design, engineering rigor, and measurable growth plans. The result: resilient systems that feel effortless for users.
                        </p>
                        <ul className="space-y-3 text-gray-200 text-sm">
                            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500"></span>Integrated pods spanning strategy, UX, engineering, QA, and lifecycle marketing.</li>
                            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500/70"></span>Evidence-based roadmaps with instrumented analytics from day zero.</li>
                            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary-500/40"></span>Launch playbooks covering rollout, training, and on-call support for smooth adoption.</li>
                        </ul>
                    </div>
                    <div className="scroll-animate rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.8)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-400 mb-3">Industries on repeat</p>
                        <div className="grid gap-3 text-white text-sm">
                            {['Manufacturing & Industry 4.0', 'D2C & Subscription Commerce', 'Higher Education', 'BFSI & Fintech', 'Health & Wellness'].map((label) => (
                                <span key={label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 bg-white/5">
                                    <span className="h-2 w-2 rounded-full bg-primary-400"></span>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid Section */}
            <section className="py-20 bg-space-900 cyber-grid-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                        {portfolioGrid.map((project, index) => {
                            const cardClasses =
                                'group relative h-80 rounded-3xl overflow-hidden shadow-[0_24px_55px_-35px_rgba(15,23,42,0.6)] bg-slate-900 text-white cursor-default transition-transform duration-300 hover:-translate-y-2 scroll-animate';

                            const cardContent = (
                                <>
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover object-top transition-all duration-[3000ms] ease-linear group-hover:object-bottom"
                                            style={{ objectPosition: 'top' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300 mb-2">
                                                {project.category}
                                            </p>
                                            <h3 className="text-xl font-semibold leading-snug">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 flex flex-col justify-between p-6 bg-slate-950/95 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300 mb-3">
                                                {project.category}
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

            {/* CTA Section */}
            <section className="py-20 bg-space-950 cyber-grid-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="glass-dark rounded-3xl shadow-glow-md border border-neon-cyan/20 p-12 text-center scroll-animate">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white text-glow-white mb-4">
                            Ready to start your project?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-500 text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:bg-primary-400"
                            >
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <a
                                href="https://wa.me/918567927943"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-green-500 text-green-400 font-semibold transition-all duration-200 hover:bg-green-500/10 hover:shadow-glow-md"
                            >
                                WhatsApp Us
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
