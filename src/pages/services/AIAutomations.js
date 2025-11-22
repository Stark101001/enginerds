import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SEO from '../../components/SEO';

const automationFeatures = [
    {
        title: 'Automated Workflows',
        description: 'Streamline routine approvals, ticket routing, and hand-offs with intelligent workflows that run on autopilot.'
    },
    {
        title: 'Generative AI Assistants',
        description: 'Deploy conversational copilots that resolve FAQs, draft communications, and surface insights instantly.'
    },
    {
        title: 'Real-time Analytics',
        description: 'Turn raw data into decisions with dashboards that forecast revenue, monitor risk, and surface anomalies.'
    }
];

const integrationHighlights = [
    {
        title: 'Salesforce & HubSpot',
        description: 'Sync customer journeys, automate follow-ups, and predict pipeline health across your CRM stack.'
    },
    {
        title: 'Slack & Microsoft Teams',
        description: 'Trigger workflows, answer questions, and orchestrate processes directly inside your collaboration tools.'
    },
    {
        title: 'ServiceNow & Zendesk',
        description: 'Resolve incidents faster with AI triage, smart suggestions, and automated escalations in your service desk.'
    }
];

const automationStories = [
    {
        badge: 'CASE STUDY',
        title: 'Creating Automation with Intention',
        description:
            'How we helped a national manufacturing leader connect siloed platforms, automate fulfillment, and slash manual effort by 68%.',
        metrics: [
            { label: 'Cycle time reduction', value: '68%' },
            { label: 'Tickets auto-resolved', value: '42K+' },
            { label: 'Integrations launched', value: '12' }
        ]
    },
    {
        badge: 'SUCCESS PLAN',
        title: 'Get a personalized plan',
        description:
            'Discover the automation roadmap your team needs. We partner closely with ops, IT, and finance leaders to drive measurable outcomes.',
        cta: {
            label: 'Talk to an expert',
            href: '#contact'
        }
    }
];

const testimonial = {
    quote:
        'Enginerds guided us from discovering automation opportunities to deploying AI agents that now handle 60% of customer inquiries. Their team moved fast, collaborated across departments, and delivered immediate wins.',
    author: 'Priya Ahuja',
    role: 'VP of Digital Operations, Northwind Traders'
};

const trustBadges = [
    {
        company: 'Nova Health',
        quote: 'Automated patient intake workflows saved 1,500 staff hours within the first quarter.'
    },
    {
        company: 'BlueFox Logistics',
        quote: 'Predictive maintenance prevented outages and boosted on-time deliveries by 22%.'
    },
    {
        company: 'Orbit Finance',
        quote: 'AI document processing cut underwriting decisions from 5 days to 6 hours.'
    }
];

const offerings = [
    {
        title: 'Guided AI Adoption',
        description: 'Assess your automation maturity, identify high-impact use cases, and build a roadmap aligned to business goals.'
    },
    {
        title: 'Systems Integration',
        description: 'Connect CRMs, ERPs, and proprietary systems with API orchestration, event-driven architecture, and secure data pipelines.'
    },
    {
        title: 'AI Agent Enablement',
        description: 'Launch, monitor, and continuously train specialized AI agents that collaborate with your teams across functions.'
    }
];

const insights = [
    {
        category: 'INSIGHTS',
        title: 'What’s New in AI & Automation',
        description: 'Stay ahead with practical guidance on multi-agent systems, AI governance, and automation change management.',
        href: '#contact'
    },
    {
        category: 'EVENT',
        title: 'Scaling Automation in 2025',
        description: 'Join our live briefing to learn how digital leaders are building AI operating models that last.',
        href: '#contact'
    }
];

const metrics = [
    { label: 'Workflows automated', value: '180+' },
    { label: 'Hours saved annually', value: '48K' },
    { label: 'Systems integrated', value: '60+' },
    { label: 'Customer satisfaction lift', value: '32%' }
];

const SectionDivider = () => (
    <div aria-hidden="true" className="relative py-8">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="h-[1px] max-w-6xl mx-auto bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        <div className="h-2 w-40 sm:w-60 mx-auto rounded-full bg-gradient-to-r from-primary-500/0 via-primary-400/50 to-primary-500/0 blur-md opacity-80"></div>
    </div>
);

const AIAutomations = () => {
    useScrollAnimation();

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'AI Automation Services',
        provider: {
            '@type': 'Organization',
            name: 'Enginerds'
        },
        description: 'AI automation solutions with intelligent agents and chatbots. Streamline operations and enhance customer experience with AI technology.',
        areaServed: 'IN'
    };

    return (
        <div className="pt-20 bg-space-950 text-white smoky-overlay">
            <SEO
                title="AI Automation Services | AI Agents & Chatbots | Enginerds"
                description="AI automation solutions with intelligent agents and chatbots. Streamline operations and enhance customer experience with AI technology. 180+ workflows automated."
                keywords="AI automation, chatbots, AI agents, machine learning, process automation, NLP, generative AI"
                canonical="/services/ai-automations"
                ogTitle="AI Automation | Intelligent Agents & Workflow Automation"
                ogDescription="Design AI systems that connect your tools, orchestrate workflows, and empower every team with real-time intelligence."
                ogImage="https://www.enginerds.in/og-ai-automation.jpg"
                structuredData={structuredData}
            />

            <section className="relative overflow-hidden py-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=2000&q=80"
                        alt="Automation control room"
                        className="h-full w-full object-cover object-center opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/65 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-950/92 to-space-900/85"></div>
                    <div className="absolute inset-0 smoky-overlay"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
                        <div className="scroll-animate">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.35em] bg-primary-500/15 text-primary-300 border border-primary-500/30 mb-5">
                                Automate & Scale
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-glow-white mb-6">
                                Streamline operations, accelerate decisions, and scale with AI automation
                            </h1>
                            <p className="text-lg text-gray-200/90 leading-relaxed mb-8 max-w-2xl">
                                We design AI systems that connect your tools, orchestrate workflows, and empower every team with real-time intelligence. From integrations to AI agents, we help you launch automation that sticks.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-400 transition-all"
                                >
                                    Start a project
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center px-6 py-3 rounded-xl border border-white/15 text-white/80 font-semibold hover:border-primary-400 hover:text-primary-300 transition-all"
                                >
                                    Explore use cases
                                </a>
                            </div>
                        </div>
                        <div className="relative scroll-animate">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-500/20 via-transparent to-primary-400/30 blur-2xl"></div>
                            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.75)]">
                                <img
                                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
                                    alt="AI data center"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-20 bg-space-950/95 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-3 scroll-animate">
                        {automationFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="glass-dark rounded-3xl border border-primary-500/20 p-8 shadow-glow-md"
                            >
                                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-gradient-to-b from-space-950 via-space-900 to-space-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 scroll-animate">
                        <div className="flex-1">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-[0.35em] text-primary-200 mb-4">
                                Playbooks
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white mb-6">
                                Creating automation with intention
                            </h2>
                            <p className="text-lg text-gray-200/85 leading-relaxed mb-10">
                                Move beyond quick fixes. Our teams partner with operations, IT, and product leaders to rewire processes, deliver intelligence faster, and scale automation responsibly across the enterprise.
                            </p>
                            <div className="glass-dark rounded-3xl border border-white/10 p-8">
                                <p className="text-white/90 text-lg leading-relaxed italic">
                                    “{testimonial.quote}”
                                </p>
                                <div className="mt-6">
                                    <span className="block text-sm font-semibold text-white">{testimonial.author}</span>
                                    <span className="block text-xs uppercase tracking-[0.3em] text-white/60">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-8 w-full">
                            {automationStories.map((story, index) => (
                                <div
                                    key={index}
                                    className="glass rounded-3xl border border-white/10 p-8 shadow-glow-md text-white"
                                >
                                    <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-300 mb-4">
                                        {story.badge}
                                    </span>
                                    <h3 className="text-2xl font-semibold mb-4 text-white">{story.title}</h3>
                                    <p className="text-gray-300 mb-6">{story.description}</p>
                                    {story.metrics && (
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            {story.metrics.map((metric, idx) => (
                                                <div key={idx} className="rounded-2xl bg-primary-500/20 border border-primary-500/30 p-4 text-center">
                                                    <div className="text-2xl font-semibold text-primary-200">{metric.value}</div>
                                                    <p className="text-xs uppercase tracking-[0.3em] text-primary-200/80 mt-1">{metric.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    {story.cta && (
                                        <a
                                            href={story.cta.href}
                                            className="mt-6 inline-flex items-center px-5 py-3 rounded-xl bg-primary-500 text-dark font-semibold hover:bg-primary-400 transition"
                                        >
                                            {story.cta.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-space-950/95 border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-300 mb-4">
                            Trusted by teams like yours
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">
                            Automation that scales with every department
                        </h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3 scroll-animate">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="glass-dark rounded-3xl p-6 border border-white/10 shadow-glow-md">
                                <p className="text-sm text-gray-300 mb-4">“{badge.quote}”</p>
                                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">{badge.company}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-gradient-to-b from-space-950 via-space-900/95 to-space-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center scroll-animate">
                        <div className="space-y-6">
                            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                                Cutting-edge & compliant
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">
                                Seamless integrations for frontline automation
                            </h2>
                            <p className="text-lg text-gray-200/85">
                                Connect AI agents with your CRM, ERP, and custom tools using secure, enterprise-grade integrations. We design automation with governance, observability, and human-in-the-loop controls built-in.
                            </p>
                            <div className="space-y-4">
                                {integrationHighlights.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                                            <span className="h-2 w-2 rounded-full bg-primary-300"></span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                            <p className="text-gray-300">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <img
                                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1200&q=80"
                                alt="AI automation collaboration"
                                className="rounded-3xl border border-white/10 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.8)]"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                                alt="Team adopting automation"
                                className="rounded-3xl border border-white/10 shadow-[0_35px_90px_-55px_rgba(15,23,42,0.8)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-space-950/95 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 scroll-animate">
                        {offerings.map((offering, index) => (
                            <div key={index} className="glass-dark rounded-3xl p-8 border border-white/10 shadow-glow-md">
                                <h3 className="text-2xl font-semibold text-white mb-4">{offering.title}</h3>
                                <p className="text-gray-300">{offering.description}</p>
                            </div>
                        ))}
                        <div className="glass rounded-3xl p-8 border border-primary-500/30 shadow-lg shadow-primary-500/20 flex flex-col justify-between">
                            <div>
                                <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-200 mb-3">
                                    Office Hours
                                </span>
                                <h3 className="text-3xl font-bold text-glow-white mb-4">Talk to our automation strategists</h3>
                                <p className="text-gray-200/85 mb-6">
                                    Share your goals in a 30-minute consultation. We’ll surface automation wins you can launch within the next quarter.
                                </p>
                            </div>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-5 py-3 rounded-xl bg-primary-500 text-dark font-semibold hover:bg-primary-400 transition"
                            >
                                Book a session
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-gradient-to-b from-space-950 via-space-900 to-space-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 items-center scroll-animate">
                        <div>
                            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-primary-200 mb-4">
                                Insights & Events
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-bold text-glow-white mb-6">What’s next in AI automation</h2>
                            <p className="text-white/80 mb-8">
                                Stay plugged into the latest playbooks, frameworks, and real-world stories from teams scaling automation responsibly.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 rounded-xl bg-primary-500 text-dark font-semibold hover:bg-primary-400 transition"
                            >
                                Download briefing
                            </a>
                        </div>
                        <div className="space-y-6">
                            {insights.map((item, index) => (
                                <div key={index} className="glass-dark border border-white/10 rounded-3xl p-6">
                                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-300">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-semibold text-white mt-3 mb-3">{item.title}</h3>
                                    <p className="text-gray-300 mb-4">{item.description}</p>
                                    <a href={item.href} className="text-primary-200 font-semibold hover:text-primary-100">
                                        Learn more →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <section className="py-24 bg-space-950/95 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <h2 className="text-3xl sm:text-4xl font-bold text-glow-white">The future of revenue is here</h2>
                        <p className="text-lg text-gray-300 mt-3">
                            Launch the automations, data intelligence, and AI agents that keep you always-on and revenue-ready.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-4 scroll-animate">
                        {metrics.map((metric, index) => (
                            <div key={index} className="glass-dark rounded-3xl p-6 border border-white/10 text-center shadow-glow-md">
                                <div className="text-3xl font-bold text-primary-300 mb-2">{metric.value}</div>
                                <p className="text-xs uppercase tracking-[0.35em] text-primary-200/80">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AIAutomations;
