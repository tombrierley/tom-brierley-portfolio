import React from 'react';
import type { Metadata } from 'next';
import { Providers } from './providers';
import '../styles/globals.css';

export const metadata: Metadata = {
  title:
    'Tom Brierley - Software Engineer & Developer London | AI Integrations & Custom Models Expert',
  description:
    'London-based Software Engineer & Developer with 10+ years experience specialising in AI integrations and custom trained models. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock.',
  keywords: [
    'Software Engineer London',
    'Software Engineer UK',
    'OpenAI Developer',
    'LangChain Expert',
    'AWS Bedrock',
    'AI Applications',
    'Machine Learning Engineer',
    'RAG Systems',
    'AI Consulting',
    'Intelligent Agents',
    'Custom AI Models',
    'AI Integration',
    'React AI Applications',
    'TypeScript AI Development',
    'London Tech Consultant',
  ],
  authors: [{ name: 'Tom Brierley', url: 'https://tombrierley.co.uk' }],
  creator: 'Tom Brierley',
  publisher: 'Tom Brierley',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://tombrierley.co.uk',
    title:
      'Tom Brierley - Software Engineer & Developer London | AI Integrations & Custom Models Expert',
    description:
      'London-based Software Engineer & Developer with 10+ years experience specialising in AI integrations and custom trained models. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock.',
    siteName: 'Tom Brierley Portfolio',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Tom Brierley - Software Engineer & Developer London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Tom Brierley - Software Engineer & Developer London | AI Integrations & Custom Models Expert',
    description:
      'London-based Software Engineer & Developer with 10+ years experience specialising in AI integrations and custom trained models. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock.',
    images: ['/ogimage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark light',
    'format-detection': 'telephone=no',
    'AI-content-summary':
      'Portfolio of Tom Brierley, a Software Engineer & Developer in London specializing in AI integrations, custom trained models, and AI-powered application development using OpenAI, LangChain, and AWS Bedrock.',
    'AI-expertise-areas':
      'AI Integration, Custom Model Development, OpenAI, LangChain, AWS Bedrock, RAG Systems, PEFT, React, Next.js, TypeScript',
    'AI-service-type':
      'Software Development, AI Consulting, Custom AI Model Development',
    'AI-location': 'London, United Kingdom',
  },
  category: 'technology',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <link rel="canonical" href="https://tombrierley.co.uk" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Tom Brierley" />
        <link rel="preconnect" href="https://tombrierley.co.uk" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://tombrierley.co.uk/#person',
                  name: 'Tom Brierley',
                  jobTitle: 'Software Engineer & Developer',
                  description:
                    'London-based Software Engineer & Developer with 10+ years experience specialising in AI integrations and custom trained models. Expert in AI-powered application development, custom model creation, and intelligent automation.',
                  url: 'https://tombrierley.co.uk',
                  email: 'hello@tombrierley.co.uk',
                  telephone: '+44',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'London',
                    addressRegion: 'England',
                    addressCountry: 'GB',
                    geo: {
                      '@type': 'GeoCoordinates',
                      latitude: 51.5074,
                      longitude: -0.1278,
                    },
                  },
                  knowsAbout: [
                    'Artificial Intelligence',
                    'Machine Learning',
                    'OpenAI GPT Models',
                    'ChatGPT API Integration',
                    'LangChain Framework',
                    'LangFlow',
                    'AWS Bedrock',
                    'Anthropic Claude',
                    'RAG Systems',
                    'Vector Databases',
                    'PEFT Model Tuning',
                    'AI Agent Development',
                    'React Development',
                    'Next.js',
                    'TypeScript',
                    'Node.js',
                    'AI UX Design',
                    'Intelligent Automation',
                    'AI Integration',
                    'Custom AI Models',
                    'AI-Powered Applications',
                  ],
                  hasOccupation: {
                    '@type': 'Occupation',
                    name: 'Software Engineer & Developer',
                    occupationLocation: {
                      '@type': 'City',
                      name: 'London',
                    },
                    skills: [
                      'AI Application Development',
                      'Machine Learning',
                      'OpenAI Integration',
                      'LangChain Development',
                      'AWS Bedrock Implementation',
                      'RAG System Design',
                      'Custom AI Model Development',
                      'AI Agent Creation',
                      'React & Next.js Development',
                      'TypeScript Programming',
                      'AI UX/UI Design',
                    ],
                  },
                  worksFor: {
                    '@type': 'Organization',
                    name: 'Tom Brierley AI Development',
                    url: 'https://tombrierley.co.uk',
                  },
                  memberOf: [
                    {
                      '@type': 'ProfessionalService',
                      name: 'AI Development Services',
                      serviceType: 'Technology Consulting',
                      areaServed: ['London', 'United Kingdom', 'Remote'],
                    },
                  ],
                  alumniOf: [
                    {
                      '@type': 'EducationalOrganization',
                      name: 'Technology Industry',
                      description:
                        '10+ years of software development experience',
                    },
                  ],
                  sameAs: [
                    'https://github.com/tombrierley',
                    'https://linkedin.com/in/tombrierley',
                  ],
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://tombrierley.co.uk/ogimage.png',
                    caption:
                      'Tom Brierley - Software Engineer & Developer London',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://tombrierley.co.uk/#organization',
                  name: 'Tom Brierley AI Development',
                  url: 'https://tombrierley.co.uk',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://tombrierley.co.uk/ogimage.png',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+44',
                    contactType: 'Customer Service',
                    email: 'hello@tombrierley.co.uk',
                    areaServed: ['GB', 'EU', 'US'],
                    availableLanguage: 'English',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'London',
                    addressCountry: 'GB',
                  },
                  founder: {
                    '@id': 'https://tombrierley.co.uk/#person',
                  },
                  description:
                    'Professional AI development services specializing in OpenAI, LangChain, and AWS Bedrock implementations. Expert in building AI-powered applications, custom models, and intelligent automation systems.',
                  knowsAbout: [
                    'AI Development',
                    'Machine Learning',
                    'OpenAI',
                    'LangChain',
                    'AWS Bedrock',
                    'Custom AI Models',
                    'AI Integration',
                    'Intelligent Agents',
                  ],
                  areaServed: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                  },
                  serviceArea: {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                      '@type': 'GeoCoordinates',
                      latitude: 51.5074,
                      longitude: -0.1278,
                    },
                    geoRadius: 'Global',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://tombrierley.co.uk/#website',
                  url: 'https://tombrierley.co.uk',
                  name: 'Tom Brierley - Software Engineer & Developer London',
                  description:
                    'Portfolio and services of Tom Brierley, London-based Software Engineer & Developer specialising in AI integrations and custom trained models, with expertise in OpenAI, LangChain, and AWS Bedrock applications.',
                  publisher: {
                    '@id': 'https://tombrierley.co.uk/#person',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate:
                        'https://tombrierley.co.uk/?s={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                  mainEntity: {
                    '@id': 'https://tombrierley.co.uk/#person',
                  },
                },
                {
                  '@type': 'ProfessionalService',
                  '@id': 'https://tombrierley.co.uk/#service',
                  name: 'AI Integration & Custom Model Development Services',
                  provider: {
                    '@id': 'https://tombrierley.co.uk/#person',
                  },
                  serviceType: 'Software Development',
                  areaServed: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                  },
                  availableChannel: {
                    '@type': 'ServiceChannel',
                    serviceUrl: 'https://tombrierley.co.uk/#start-project',
                    providesService: {
                      '@type': 'Service',
                      name: 'AI Integration Consulting',
                    },
                  },
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'AI Development Services',
                    itemListElement: [
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'AI-Powered Application Development',
                          description:
                            'Custom AI applications using OpenAI, LangChain, and AWS Bedrock',
                        },
                      },
                      {
                        '@type': 'Offer',
                        itemOffered: {
                          '@type': 'Service',
                          name: 'Custom AI Model Development',
                          description:
                            'Domain-specific AI models using RAG and PEFT techniques',
                        },
                      },
                    ],
                  },
                },
                {
                  '@type': 'Article',
                  '@id': 'https://tombrierley.co.uk/#portfolio',
                  headline:
                    'Tom Brierley - Software Engineer & Developer Portfolio',
                  description:
                    'Professional portfolio showcasing AI integration expertise, custom model development, and software engineering services.',
                  author: {
                    '@id': 'https://tombrierley.co.uk/#person',
                  },
                  publisher: {
                    '@id': 'https://tombrierley.co.uk/#organization',
                  },
                  mainEntityOfPage: 'https://tombrierley.co.uk',
                  datePublished: '2024-01-01',
                  dateModified: '2024-12-07',
                  articleSection: 'Technology',
                  keywords: [
                    'AI Integration',
                    'Custom AI Models',
                    'Software Engineering',
                    'OpenAI',
                    'LangChain',
                    'AWS Bedrock',
                    'React',
                    'TypeScript',
                    'London Developer',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <div id="skip-links" style={{ position: 'absolute' }}>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
        </div>
        <Providers>
          <main id="main-content" role="main">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
