import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    structuredData
}) => {
    const siteUrl = 'https://www.enginerds.in';
    const defaultImage = `${siteUrl}/og-image.jpg`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={`${siteUrl}${canonical}`} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={`${siteUrl}${canonical}`} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:site_name" content="Enginerds" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle || title} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
