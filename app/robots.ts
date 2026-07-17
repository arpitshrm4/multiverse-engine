import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://multiverse.arpitsharma.design';
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/test-c', '/_next/', '/static/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
