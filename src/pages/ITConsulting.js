import React from 'react';
import { ArrowRight, ShieldCheck, Server, Layers, Mail, Cloud, Workflow, Network } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const serviceItems = [
  {
    title: 'Network as a Service (NaaS)',
    description: 'Planning, designing, and deployment of routers, switches, firewalls, VLAN, and VPN for resilient connectivity.',
    icon: Network
  },
  {
    title: 'Server Setup & RAID Configuration',
    description: 'Installation, RAID (0/1/5/6/10) configuration, storage optimization, and continuity plans for mission-critical workloads.',
    icon: Server
  },
  {
    title: 'Hosting & Control Panels Management',
    description: 'cPanel, WHM, and Plesk setup, domain + SSL provisioning, FTP/database tuning, and performance optimization.',
    icon: Layers
  },
  {
    title: 'Email Server Solutions',
    description: 'Google Workspace, Microsoft 365, Zoho Mail, custom SMTP, and anti-spam protection for business-grade communication.',
    icon: Mail
  },
  {
    title: 'Domain, DNS & Cloud Hosting',
    description: 'Nameserver management, DNS security, and AWS/Azure/GCP/DigitalOcean hosting tailored to your workloads.',
    icon: Cloud
  },
  {
    title: 'IT Hardware & Asset Management',
    description: 'Procurement, installation, upgrades, and lifecycle tracking for physical infrastructure and devices.',
    icon: ShieldCheck
  },
  {
    title: 'Website & Software Consulting',
    description: 'Tech stack advisory, performance improvements, and scalable architecture design for apps and platforms.',
    icon: Workflow
  }
];

const processSteps = [
  'Requirement Understanding',
  'Technical Assessment',
  'Strategy & Solution Blueprint',
  'Implementation Support',
  'Maintenance & Training'
];

const industries = ['Healthcare', 'Manufacturing', 'Education', 'Retail', 'Services', 'Finance & Banking'];

const reasons = [
  'Expert Professional Support',
  'End-to-end Infrastructure Solutions',
  'Future-Ready & Scalable Systems',
  'Security & Performance Focused',
  'Fast Response & Reliable Support'
];

const ITConsulting = () => {
  useScrollAnimation();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IT Consulting Services',
    provider: {
      '@type': 'Organization',
      name: 'Enginerds',
      url: 'https://www.enginerds.in'
    },
    description: 'Smart IT consulting for secure, scalable, and high-performance infrastructure covering networks, servers, hosting, email, and cloud solutions.',
    areaServed: 'IN',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://www.enginerds.in/consulting'
    }
  };

  return (
    <div className="pt-24 bg-space-950 text-white">
      <SEO
        title="IT Consulting Services | Infrastructure & Cloud Solutions | Enginerds"
        description="Smart IT consulting for secure, scalable, and high-performance infrastructure covering networks, servers, hosting, email, and cloud solutions. Expert guidance for modern business growth."
        keywords="IT consulting, infrastructure management, cloud hosting, network services, server setup, IT support, managed services, cybersecurity"
        canonical="/consulting"
        ogTitle="IT Consulting Services | Expert Infrastructure Solutions"
        ogDescription="Build secure, scalable, and high-performance IT foundations with expert guidance across networks, servers, hosting, and cloud technology."
        ogImage="https://www.enginerds.in/og-consulting.jpg"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=2000&q=80"
            alt="IT consultant managing secure infrastructure"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-space-950/95 via-space-900/92 to-space-800/88" aria-hidden="true"></div>
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,145,1,0.2),_transparent_55%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6 text-left">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400">
              Smart IT Consulting for Modern Business Growth
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-glow-white">
              We help you build secure, scalable, and high-performance IT foundations.
            </h1>
            <p className="text-lg text-gray-200">
              Expert guidance across networks, servers, hosting, email systems, and cloud tech so you can focus on growth while we handle the infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#consulting-contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FE6301] to-[#FF9101] text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:brightness-110"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-primary-400 hover:text-primary-300 transition-all"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center">
          <div className="space-y-6 scroll-animate">
            <h2 className="text-3xl font-bold">About Our Consulting</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We provide professional IT consulting solutions that help businesses adopt the right technology, improve operational performance,
              and stay secure in a fast-moving digital environment. Our focus is on simplifying complex IT decisions and delivering practical results.
            </p>
            <ul className="space-y-3 text-gray-200">
              {['Business-driven IT strategy', 'Cost-effective + secure infrastructure', 'Long-term trusted support'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-animate rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.9)]">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-300 mb-4">Trusted IT Guidance</p>
            <p className="text-lg text-gray-100 leading-relaxed">
              Whether you need a complete infrastructure overhaul or targeted advisory on networks, servers, cloud, or collaboration tools,
              our consulting pod embeds with your team to deliver measurable outcomes and operational clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10 bg-space-900/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-3xl font-bold">Our IT Consulting Services</h2>
            <p className="text-gray-300">Hands-on expertise across infrastructure, cloud, collaboration, and software delivery.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceItems.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl scroll-animate">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 mb-4">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 scroll-animate">
          <h2 className="text-3xl font-bold">Consulting Process</h2>
          <div className="grid gap-4 sm:grid-cols-5">
            {processSteps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-space-900/80 p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-400">Step {idx + 1}</span>
                <p className="mt-3 text-sm text-gray-200 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-10 bg-space-900/50">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
          <div className="scroll-animate">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-300 mb-6">
              Experience delivering compliant, high-availability environments across:
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span key={industry} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200">
                  <span>•</span>
                  {industry}
                </span>
              ))}
            </div>
          </div>
          <div className="scroll-animate rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-100">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <ArrowRight className="h-4 w-4 text-primary-400" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="consulting-contact" className="py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-primary-500/20 bg-gradient-to-br from-space-900 via-space-950 to-space-900 p-10 shadow-glow-md scroll-animate">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-400 mb-4">Ready to Grow With the Right Technology?</p>
          <h2 className="text-3xl font-bold text-white mb-4">Let’s discuss your IT requirements and build a secure, high-performance environment.</h2>
          <p className="text-gray-300 mb-6">Book your free consultation today and get a clear roadmap for your infrastructure.</p>
          <a
            href="mailto:contact@enginerds.in"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary-500 text-gray-900 font-semibold shadow-glow-md transition-all duration-200 hover:bg-primary-400"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;
