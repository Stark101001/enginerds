import React from 'react';
import { Headphones, Shield, Server, Clock, Wrench, CheckCircle } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SEO from '../../components/SEO';

const ITSupport = () => {
    useScrollAnimation();

    const features = [
        {
            icon: Clock,
            title: '24/7 Monitoring',
            description: 'Round-the-clock system monitoring with proactive alerts and rapid incident response.'
        },
        {
            icon: Shield,
            title: 'Security Operations',
            description: 'Comprehensive security management including threat detection, vulnerability scanning, and compliance.'
        },
        {
            icon: Server,
            title: 'Infrastructure Management',
            description: 'Complete management of servers, networks, cloud resources, and hybrid environments.'
        },
        {
            icon: Wrench,
            title: 'Maintenance & Updates',
            description: 'Regular system updates, patches, and preventive maintenance to ensure optimal performance.'
        },
        {
            icon: Headphones,
            title: 'Help Desk Support',
            description: 'Multi-channel support for your team with ticketing system and knowledge base.'
        },
        {
            icon: CheckCircle,
            title: 'Disaster Recovery',
            description: 'Backup solutions and disaster recovery planning to protect your critical business data.'
        }
    ];

    const supportPlans = [
        {
            name: 'Essential',
            price: 'Custom',
            features: [
                'Business Hours Support',
                'Email & Phone Support',
                'System Monitoring',
                'Monthly Reports',
                'Basic Security'
            ]
        },
        {
            name: 'Professional',
            price: 'Custom',
            popular: true,
            features: [
                '24/7 Support',
                'Priority Response',
                'Advanced Monitoring',
                'Security Management',
                'Backup & Recovery',
                'Performance Optimization'
            ]
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            features: [
                'Dedicated Support Team',
                'Instant Response',
                'Full Infrastructure Management',
                'Advanced Security Operations',
                'Compliance Management',
                'Custom SLA',
                'Strategic IT Consulting'
            ]
        }
    ];

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'IT Support & Managed Services',
        provider: {
            '@type': 'Organization',
            name: 'Enginerds'
        },
        description: 'Professional IT support and managed services. 24/7 monitoring, security operations, and infrastructure management for your business.',
        areaServed: 'IN'
    };

    return (
        <div className="pt-20">
            <SEO
                title="IT Support Services | 24/7 Managed IT Services | Enginerds"
                description="Professional IT support and managed services. 24/7 monitoring, security operations, and infrastructure management for your business. Guaranteed response times."
                keywords="IT support, managed services, help desk, infrastructure management, security operations, 24/7 support, disaster recovery"
                canonical="/services/it-support"
                ogTitle="IT Support & Managed Services | Always-On Support"
                ogDescription="Focus on your business while we handle your IT. 24/7 managed services with proactive monitoring and rapid incident response."
                ogImage="https://www.enginerds.in/og-it-support.jpg"
                structuredData={structuredData}
            />

            <ServiceHero
                title="IT Support & Managed Services"
                subtitle="Always-On Support"
                description="Focus on your business while we handle your IT. Our 24/7 managed services provide proactive monitoring, rapid incident response, and comprehensive infrastructure management for peace of mind."
                backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=80"
                ctaText="Get Support"
                ctaLink="#contact"
            />

            <ServiceFeatures
                title="Comprehensive IT Support"
                subtitle="What We Manage"
                features={features}
            />

            {/* Support Plans */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Support Plans
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Choose Your Support Level
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Flexible support plans tailored to your business needs and budget.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3 scroll-animate">
                        {supportPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-3xl p-8 shadow-[0_24px_55px_-35px_rgba(15,23,42,0.55)] border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_38px_80px_-35px_rgba(236,72,153,0.65)] hover:border-primary-200 ${plan.popular ? 'border-primary-500 ring-2 ring-primary-500 hover:ring-primary-500/80' : 'border-slate-100'
                                    }`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full bg-primary-500 text-white text-sm font-semibold">
                                        Most Popular
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-primary-500 mb-6">{plan.price}</div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 flex-shrink-0 mt-0.5">
                                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contact"
                                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-colors ${plan.popular
                                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                                        : 'bg-slate-100 text-gray-900 hover:bg-slate-200'
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Response Times */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Service Level Agreement
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            Guaranteed Response Times
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3 scroll-animate">
                        {[
                            { priority: 'Critical', time: '15 min', description: 'System down or major outage' },
                            { priority: 'High', time: '1 hour', description: 'Significant impact on operations' },
                            { priority: 'Normal', time: '4 hours', description: 'Standard support requests' }
                        ].map((item, index) => (
                            <div key={index} className="text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                <div className="text-5xl font-bold text-primary-500 mb-2">{item.time}</div>
                                <div className="text-xl font-semibold text-gray-900 mb-2">{item.priority} Priority</div>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ITSupport;
