import React from 'react';
import { Code2, Smartphone, Cloud, Database, Zap, Shield } from 'lucide-react';
import ServiceHero from '../../components/ServiceHero';
import ServiceFeatures from '../../components/ServiceFeatures';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SEO from '../../components/SEO';

const Development = () => {
    useScrollAnimation();

    const features = [
        {
            icon: Code2,
            title: 'Web Development',
            description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js for scalable, high-performance solutions.'
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and Swift/Kotlin.'
        },
        {
            icon: Cloud,
            title: 'Cloud Solutions',
            description: 'Cloud-native applications deployed on AWS, Azure, and Google Cloud with automated CI/CD pipelines.'
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Robust APIs and microservices architecture with databases like PostgreSQL, MongoDB, and Redis.'
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Lightning-fast applications optimized for speed, SEO, and user experience with best practices.'
        },
        {
            icon: Shield,
            title: 'Security First',
            description: 'Enterprise-grade security with encryption, authentication, and compliance with industry standards.'
        }
    ];

    const technologies = [
        { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go', 'PHP'] },
        { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
        { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'] },
        { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'] },
        { category: 'Tools', items: ['Git', 'Jenkins', 'Jira', 'Figma', 'Postman'] }
    ];

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Web & Mobile Development',
        provider: {
            '@type': 'Organization',
            name: 'Enginerds'
        },
        description: 'Expert web and mobile development services. Custom applications built with React, Node.js, React Native, and modern cloud technologies.',
        areaServed: 'IN'
    };

    return (
        <div className="pt-20">
            <SEO
                title="Web & Mobile Development Services | React, Node.js, Flutter | Enginerds"
                description="Expert web and mobile development services. Custom applications built with React, Node.js, React Native, and modern cloud technologies. Transform your ideas into powerful digital solutions."
                keywords="web development, mobile development, React development, Node.js, mobile apps, custom software, Flutter, cloud solutions"
                canonical="/services/development"
                ogTitle="Web & Mobile Development | Build Powerful Digital Solutions"
                ogDescription="Transform your ideas into powerful web and mobile applications with modern frameworks and cloud technologies."
                ogImage="https://www.enginerds.in/og-development.jpg"
                structuredData={structuredData}
            />

            <ServiceHero
                title="Web & Mobile Development"
                subtitle="Development Services"
                description="Transform your ideas into powerful digital solutions. We design, develop, and deploy modern web and mobile applications that drive business growth and deliver exceptional user experiences."
                backgroundImage="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=2000&q=80"
                ctaText="Start Your Project"
                ctaLink="#contact"
            />

            <ServiceFeatures
                title="Our Development Expertise"
                subtitle="What We Offer"
                features={features}
            />

            {/* Technology Stack Section */}
            <section className="relative py-20 bg-gradient-to-br from-[#FFF5EB] via-white to-[#FFECDC] overflow-hidden">
                <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_top,_rgba(255,145,1,0.18),_transparent_60%)] blur-[120px]"></div>
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom_right,_rgba(79,195,247,0.25),_transparent_55%)] blur-[140px]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Technology Stack
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                            Cutting-Edge Technologies
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We leverage the latest technologies and frameworks to build scalable, maintainable, and future-proof applications.
                        </p>
                    </div>

                    <div className="tech-3d-scene grid gap-6 md:grid-cols-2 lg:grid-cols-3 scroll-animate">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-card-3d rounded-[30px] p-8 border border-white/60 bg-white/90 backdrop-blur-xl shadow-[0_35px_60px_-35px_rgba(15,23,42,0.55)]"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="tech-pill-3d inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Our Process
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
                            How We Build Your Application
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 scroll-animate">
                        {[
                            { step: '01', title: 'Discovery', description: 'Understanding your requirements, goals, and target audience.' },
                            { step: '02', title: 'Design', description: 'Creating wireframes, prototypes, and user interface designs.' },
                            { step: '03', title: 'Development', description: 'Building your application with clean, scalable code.' },
                            { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support for your success.' }
                        ].map((item, index) => (
                            <div key={index} className="relative">
                                <div className="text-6xl font-bold text-primary-100 mb-4">{item.step}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Development;
