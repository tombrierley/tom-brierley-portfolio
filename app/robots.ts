import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/_next/static/', '/admin/'],
        crawlDelay: 1,
      },
      // AI and search crawlers with enhanced permissions
      {
        userAgent: [
          'GPTBot',
          'Google-Extended', 
          'CCBot',
          'Claude-Web',
          'PerplexityBot',
          'anthropic-ai',
          'ChatGPT-User',
          'Baiduspider',
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
        ],
        allow: '/',
        disallow: '/private/',
      },
      // Specific rules for better indexing
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/api/'],
      },
    ],
    sitemap: 'https://tombrierley.co.uk/sitemap.xml',
    host: 'https://tombrierley.co.uk',
  };
}
