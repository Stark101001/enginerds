import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Database, Users, BarChart3, Lock, Zap } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const SaasSolutions = () => {
    useScrollAnimation();

    const features = [
        {
            icon: Cloud,
            title: 'Cloud-Native Architecture',
            description: 'Scalable SaaS platforms built on modern cloud infrastructure with microservices and containerization.'
        },
        {
            icon: Database,
            title: 'ERP Development',
            description: 'Comprehensive ERP systems for inventory, finance, HR, and operations management with real-time insights.'
        },
        {
            icon: Users,
            title: 'CRM Solutions',
            description: 'Customer relationship management platforms that streamline sales, marketing, and customer service.'
        },
        {
            icon: BarChart3,
            title: 'Analytics & Reporting',
            description: 'Advanced analytics dashboards with real-time data visualization and actionable business intelligence.'
        },
        {
            icon: Lock,
            title: 'Multi-Tenant Security',
            description: 'Enterprise-grade security with data isolation, encryption, and compliance with industry standards.'
        },
        {
            icon: Zap,
            title: 'API Integration',
            description: 'Seamless integration with third-party services, payment gateways, and business tools via REST APIs.'
        }
    ];

    const solutions = [
        {
            title: 'ERP Systems',
            description: 'Streamline your back-office operations',
            capabilities: ['Inventory Management', 'Financial Accounting', 'HR & Payroll', 'Supply Chain', 'Procurement']
        },
        {
            title: 'CRM Platforms',
            description: 'Enhance customer engagement and sales',
            capabilities: ['Lead Management', 'Sales Pipeline', 'Marketing Automation', 'Customer Support', 'Analytics']
        }
    ];

    return (
        <div className="pt-20">
            <Helmet>
                <title>SaaS Solutions | ERP & CRM Development | Enginerds</title>
                <meta
                    name="description"
                    content="Custom SaaS, ERP, and CRM development services. Cloud-native platforms that unify operations and drive business growth."
                />
                <meta
                    name="keywords"
                    content="SaaS development, ERP software, CRM platform, cloud software, business management software"
                />
                <link rel="canonical" href="https://www.enginerds.in/services/saas-solutions" />
            </Helmet>

            <ServiceHero
                title="SaaS Solutions"
                subtitle="Enterprise Software"
                description="Transform your business with cloud-native SaaS platforms. We deliver comprehensive ERP and CRM solutions that unify operations, automate workflows, and provide actionable insights across your organization."
                backgroundImage="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2000&q=80"
                ctaText="Build Your Platform"
                ctaLink="#contact"
            />

            <ServiceFeatures
                title="SaaS Development Capabilities"
                subtitle="What We Build"
                features={features}
            />

            {/* Solutions Overview */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Our Solutions
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Comprehensive Business Software
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            From ERP to CRM, we build complete software ecosystems that grow with your business.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 scroll-animate">
                        {solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.55)] border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_38px_80px_-35px_rgba(236,72,153,0.65)] hover:border-primary-200"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                                <p className="text-gray-600 mb-6">{solution.description}</p>
                                <div className="space-y-2">
                                    {solution.capabilities.map((capability, idx) => (
                                        <div key={idx} className="flex items-center space-x-3">
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700">{capability}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#FFF7F1] via-white to-[#FFEEDD] overflow-hidden">
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,_rgba(255,145,1,0.18),_transparent_55%)] blur-[90px]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Why Choose SaaS
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Cloud-Native Benefits
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Unlock the power of subscription-driven software with predictable performance, always-on updates, and rapid scaling.
                        </p>
                    </div>

                    <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] items-center">
                        <div className="relative rounded-[34px] overflow-hidden shadow-[0_35px_95px_-45px_rgba(15,23,42,0.55)] border border-white/60 bg-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80"
                                alt="Product team collaborating on cloud software"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-space-950/70 via-space-900/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 text-slate-800">
                                <p className="text-xs font-semibold tracking-[0.35em] text-primary-500 mb-1">SaaS in Action</p>
                                <p className="text-base font-semibold">
                                    Seamless collaboration, automated releases, and real-time analytics across every product squad.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2 scroll-animate">
                            {[
                                { title: 'Scalability', description: 'Grow from 10 to 10,000 users without infrastructure changes.' },
                                { title: 'Cost Effective', description: 'Pay-as-you-grow pricing with no upfront hardware costs.' },
                                { title: 'Always Updated', description: 'Automatic updates and new features without downtime.' },
                                { title: 'Accessible Anywhere', description: 'Work from any device with internet connectivity.' },
                                { title: 'Data Security', description: 'Enterprise-grade security and automated backups.' },
                                { title: 'Integration Ready', description: 'Connect with your existing tools and workflows.' }
                            ].map((benefit, index) => (
                                <div
                                    key={index}
                                    className="benefit-card rounded-[28px] bg-white/85 border border-white/80 px-8 py-10 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.35)]"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SaasSolutions;
