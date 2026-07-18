import { MetadataRoute } from 'next';
import { siteData } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://multiverse.arpitsharma.design';

    // Static routes
    const staticRoutes = [
        '',
        '/personal-journal',
        '/work',
        '/storytelling',
        '/systems-thinking',
        '/mars-signal-station',
        '/about',
        '/contact',
        '/process',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Dynamic projects routes
    const projectRoutes = siteData.projects.map((project) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // Dynamic stories routes
    const storyRoutes = siteData.projects
        .filter((project) => project.universeContent.B)
        .map((project) => ({
            url: `${baseUrl}/stories/${project.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

    return [...staticRoutes, ...projectRoutes, ...storyRoutes];
}
