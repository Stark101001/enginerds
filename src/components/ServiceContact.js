import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CONTACT_API_URL =
    process.env.REACT_APP_CONTACT_API_URL || 'http://localhost:5000/api/contact';

const ServiceContact = ({ serviceName }) => {
    useScrollAnimation();

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
            const messageWithService = `Service Interest: ${serviceName}\n\n${contactForm.message}`;

            const response = await fetch(CONTACT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...contactForm,
                    message: messageWithService
                })
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

    return (
        <section id="contact" className="py-20 bg-space-900 cyber-grid-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="scroll-animate">
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            Get in Touch
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white mb-6">
                            Let's discuss your {serviceName} needs
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            Ready to transform your business? Contact us today and let's create something amazing together.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                                    <Mail className="h-6 w-6" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                    <a href="mailto:contact@enginerds.in" className="text-gray-300 hover:text-primary-500 transition-colors">
                                        contact@enginerds.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                                    <Phone className="h-6 w-6" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                                    <a href="tel:+918567927943" className="text-gray-300 hover:text-primary-500 transition-colors">
                                        +91 85679 27943
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
                                    <MapPin className="h-6 w-6" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                    <p className="text-gray-300">Ludhiana, Punjab, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="scroll-animate">
                        <div className="glass-dark rounded-3xl shadow-glow-md border border-primary-500/20 p-8">
                            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                            <form className="space-y-4" onSubmit={handleContactSubmit} noValidate>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="contact-name">
                                        Name*
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan"
                                        placeholder="Your name"
                                        value={contactForm.name}
                                        onChange={handleContactChange('name')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="contact-email">
                                        Email*
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan"
                                        placeholder="your@email.com"
                                        value={contactForm.email}
                                        onChange={handleContactChange('email')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="contact-phone">
                                        Phone
                                    </label>
                                    <input
                                        id="contact-phone"
                                        type="tel"
                                        className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple"
                                        placeholder="+91 12345 67890"
                                        value={contactForm.phone}
                                        onChange={handleContactChange('phone')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="contact-message">
                                        Message*
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        rows="4"
                                        className="block w-full rounded-xl border border-white/10 bg-space-800/50 backdrop-blur-md px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:border-neon-cyan resize-none"
                                        placeholder="Tell us about your project requirements"
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
                                    {contactStatus.loading ? 'Sending…' : 'Send Message'}
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
    );
};

export default ServiceContact;
