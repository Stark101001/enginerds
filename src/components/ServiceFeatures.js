import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ServiceFeatures = ({ title, subtitle, features }) => {
    useScrollAnimation();

    return (
        <section className="relative py-20 bg-[#030812] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050c1c] via-[#030812] to-[#010409] opacity-90"></div>
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,145,1,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(79,195,247,0.18),_transparent_60%)] blur-[80px]"></div>
            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[140px_140px]"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 scroll-animate">
                    {subtitle && (
                        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary-500 mb-4">
                            {subtitle}
                        </p>
                    )}
                    <h2 className="text-4xl sm:text-5xl font-bold text-white text-glow-white">
                        {title}
                    </h2>
                </div>

                <div className="feature-3d-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3 scroll-animate">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="feature-card-3d relative h-full rounded-[32px] p-8 bg-white/5 border border-white/10 shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)]"
                            >
                                <span className="feature-icon-3d inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/25 to-primary-400/10 text-primary-100 mb-6">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
