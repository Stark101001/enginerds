import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Code2, ShoppingCart, Cloud, Bot, Headphones } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const Services = () => {
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

    const services = [
        {
            icon: Code2,
            title: 'Development',
            slug: 'development',
            description: 'Custom web and mobile applications built with modern frameworks and cloud technologies.',
            features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'API Development'],
            image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80'
        },
        {
            icon: ShoppingCart,
            title: 'E-Commerce Development',
            slug: 'ecommerce',
            description: 'High-performing WooCommerce and Shopify stores that drive sales and delight customers.',
            features: ['WooCommerce', 'Shopify', 'Payment Integration', 'Conversion Optimization'],
            image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80'
        },
        {
            icon: Cloud,
            title: 'SaaS Solutions',
            slug: 'saas-solutions',
            description: 'Cloud-native SaaS platforms with ERP and CRM capabilities for enterprise operations.',
            features: ['ERP Development', 'CRM Platforms', 'Cloud Architecture', 'API Integration'],
            image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80'
        },
        {
            icon: Bot,
            title: 'AI Automations',
            slug: 'ai-automations',
            description: 'Intelligent AI agents and chatbots that automate workflows and enhance customer experience.',
            features: ['AI Agents', 'Chatbots', 'Process Automation', 'Machine Learning'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
        },
        {
            icon: Headphones,
            title: 'IT Support',
            slug: 'it-support',
            description: '24/7 managed IT services with proactive monitoring and rapid incident response.',
            features: ['24/7 Monitoring', 'Security Operations', 'Help Desk', 'Infrastructure Management'],
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            tag: 'Free!'
        }
    ];

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                provider: {
                    '@type': 'Organization',
                    name: 'Enginerds'
                }
            }
        }))
    };

    return (
        <div className="pt-20">
            <SEO
                title="Our Services | Software Development & IT Solutions | Enginerds"
                description="Comprehensive IT services including web development, e-commerce, SaaS solutions, AI automation, and 24/7 IT support. Transform your business with cutting-edge technology solutions."
                keywords="IT services, software development, web development, ecommerce, SaaS, AI automation, IT support, managed services"
                canonical="/services"
                ogTitle="Comprehensive IT Solutions | Enginerds"
                ogDescription="From custom software development to 24/7 IT support, we deliver end-to-end technology solutions that drive business growth."
                ogImage="https://www.enginerds.in/og-services.jpg"
                structuredData={structuredData}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-space-950 via-space-900 to-space-950 smoky-overlay">
                <div className="absolute inset-0 bg-black/65 mix-blend-multiply"></div>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_45%),_radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.2),_transparent_55%)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30 shadow-glow-md mb-6">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></span>
                        Our Services
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-glow-white leading-tight mb-4 sm:mb-6">
                        Comprehensive IT Solutions
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        From custom software development to 24/7 IT support, we deliver end-to-end technology solutions that drive business growth and digital transformation.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-space-950 cyber-grid-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl glass-dark border border-neon-cyan/20 shadow-glow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-neon-purple scroll-animate"
                                >
                                    {service.tag && (
                                        <span className="absolute top-6 right-6 z-10 inline-flex items-center rounded-full bg-neon-pink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-neon-pink">
                                            {service.tag}
                                        </span>
                                    )}

                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-6 left-6">
                                            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl glass text-primary-500 shadow-glow-md">
                                                <Icon className="h-7 w-7" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-500 border border-primary-500/30"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-500 transition-colors group/link"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-space-900 cyber-grid-bg">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-glow-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 mb-8">
                        Let's discuss how our services can help you achieve your goals. Get in touch with our team today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={scrollToContact}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-primary-500 text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:bg-primary-400"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <a
                            href="https://wa.me/918567927943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-green-500 text-green-400 font-semibold transition-all duration-200 hover:bg-green-500/10 hover:shadow-glow-md"
                        >
                            WhatsApp Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
