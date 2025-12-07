import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2024-12-07');
  
  return [
    {
      url: 'https://tombrierley.co.uk',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'en-GB': 'https://tombrierley.co.uk',
          'en': 'https://tombrierley.co.uk',
        },
      },
    },
    {
      url: 'https://tombrierley.co.uk/#services',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://tombrierley.co.uk/#how-i-work',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tombrierley.co.uk/#technologies',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tombrierley.co.uk/#clients',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://tombrierley.co.uk/#faq',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://tombrierley.co.uk/#start-project',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
