import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, Package, CreditCard, TrendingUp, Users, Smartphone } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ECommerce = () => {
    useScrollAnimation();

    const features = [
        {
            icon: ShoppingCart,
            title: 'WooCommerce Development',
            description: 'Custom WooCommerce stores with advanced features, payment gateways, and seamless WordPress integration.'
        },
        {
            icon: Package,
            title: 'Shopify Development',
            description: 'Beautiful Shopify stores with custom themes, apps, and integrations for a complete e-commerce solution.'
        },
        {
            icon: CreditCard,
            title: 'Payment Integration',
            description: 'Secure payment gateway integration with Stripe, PayPal, Razorpay, and other popular payment processors.'
        },
        {
            icon: TrendingUp,
            title: 'Conversion Optimization',
            description: 'Data-driven strategies to increase sales, reduce cart abandonment, and improve customer experience.'
        },
        {
            icon: Users,
            title: 'Customer Management',
            description: 'Advanced CRM integration, customer accounts, wishlists, and personalized shopping experiences.'
        },
        {
            icon: Smartphone,
            title: 'Mobile Commerce',
            description: 'Responsive designs and mobile apps that provide seamless shopping on any device.'
        }
    ];

    const platforms = [
        {
            name: 'WooCommerce',
            features: ['WordPress Integration', 'Unlimited Products', 'Custom Extensions', 'SEO Friendly', 'Full Control']
        },
        {
            name: 'Shopify',
            features: ['Hosted Solution', 'App Ecosystem', 'Quick Setup', 'Built-in Marketing', '24/7 Support']
        },
        {
            name: 'React Commerce (Next.js)',
            features: ['Lightning-fast Storefront', 'Headless CMS Ready', 'API-First Checkout', 'PWA Capabilities', 'Composable Integrations']
        },
        {
            name: 'Laravel Commerce',
            features: ['Secure PHP Foundation', 'Modular Architecture', 'Multi-Vendor Ready', 'Advanced Analytics', 'Localization & Multi-Currency']
        },
        {
            name: 'Magento Open Source',
            features: ['Enterprise Feature Set', 'B2B Modules', 'Marketplace Integrations', 'Flexible Catalog Rules', 'Robust Security Controls']
        },
        {
            name: 'Headless & Composable',
            features: ['Omnichannel Experiences', 'API Orchestration Layer', 'Microservices Friendly', 'Real-time Personalization', 'Future-Proof Stack']
        }
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>E-Commerce Development Services | WooCommerce & Shopify | Enginerds</title>
                <meta
                    name="description"
                    content="Professional e-commerce development with WooCommerce and Shopify. Build high-converting online stores with custom features and integrations."
                />
                <meta
                    name="keywords"
                    content="ecommerce development, WooCommerce, Shopify, online store, shopping cart, payment gateway"
                />
                <link rel="canonical" href="https://www.enginerds.in/services/ecommerce" />
            </Helmet>

            <ServiceHero
                title="E-Commerce Development"
                subtitle="E-Commerce Solutions"
                description="Build high-performing online stores that drive sales and delight customers. We create immersive WooCommerce and Shopify experiences with seamless checkout, robust integrations, and conversion-focused design."
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
                ctaText="Launch Your Store"
                ctaLink="#contact"
            />

            <ServiceFeatures
                title="E-Commerce Expertise"
                subtitle="What We Deliver"
                features={features}
            />

            {/* Platform Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Platform Comparison
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Choose Your Platform
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From turnkey platforms to fully coded solutions in React, Laravel, and Magento, we help you choose the stack that fits your operations, scale, and budget.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 scroll-animate">
                        {platforms.map((platform, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.55)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_38px_80px_-35px_rgba(236,72,153,0.65)] hover:border-primary-200"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{platform.name}</h3>
                                <ul className="space-y-3">
                                    {platform.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Proven Results
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            Success Metrics
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-4 scroll-animate">
                        {[
                            { metric: '28%', label: 'Average Conversion Increase' },
                            { metric: '150+', label: 'Stores Launched' },
                            { metric: '99.9%', label: 'Uptime Guarantee' },
                            { metric: '24/7', label: 'Support Available' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-primary-500 mb-2">{item.metric}</div>
                                <div className="text-gray-600">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ECommerce;
