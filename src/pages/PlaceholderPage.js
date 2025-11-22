import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const PlaceholderPage = ({ title, category }) => {
    const { type } = useParams();
    const location = useLocation();

    // Format the title from the URL parameter if not provided
    const displayTitle = title || (type ? type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Page Not Found');

    return (
        <div className="pt-24 pb-16 min-h-screen bg-space-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium mb-6 backdrop-blur-sm">
                        {category || 'Coming Soon'}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {displayTitle}
                    </h1>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        We are currently building this page to bring you comprehensive information about our {displayTitle} solutions.
                    </p>

                    <div className="p-8 rounded-2xl glass-dark border border-white/10 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-xl bg-white/5">
                            <span className="text-4xl mb-4">🚧</span>
                            <h3 className="text-xl font-semibold text-white mb-2">Under Construction</h3>
                            <p className="text-gray-400">Check back soon for updates!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
