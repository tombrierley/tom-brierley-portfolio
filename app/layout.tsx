import React from 'react'
import type { Metadata } from 'next'
import { Providers } from './providers'
import '../styles/globals.css'

export const metadata: Metadata = {
  title:
    'Tom Brierley - AI Developer London | Expert in OpenAI, LangChain & AWS Bedrock',
  description:
    'London-based AI Developer with 14+ years experience. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock. Specializing in rapid prototyping, intelligent agents, and seamless AI integration for businesses.',
  keywords: [
    'AI Developer London',
    'AI Developer UK',
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
  authors: [{ name: 'Tom Brierley', url: 'https://tombrierley.com' }],
  creator: 'Tom Brierley',
  publisher: 'Tom Brierley',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://tombrierley.com',
    title:
      'Tom Brierley - AI Developer London | Expert in OpenAI, LangChain & AWS Bedrock',
    description:
      'London-based AI Developer with 14+ years experience. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock.',
    siteName: 'Tom Brierley Portfolio',
    images: [
      {
        url: '/ogimage.png',
        width: 1200,
        height: 630,
        alt: 'Tom Brierley - AI Developer London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Tom Brierley - AI Developer London | Expert in OpenAI, LangChain & AWS Bedrock',
    description:
      'London-based AI Developer with 14+ years experience. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock.',
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
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
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
        />
        <link rel="canonical" href="https://tombrierley.com" />
        <meta name="geo.region" content="GB-LND" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://tombrierley.com/#person',
                  name: 'Tom Brierley',
                  jobTitle: 'AI Developer',
                  description:
                    'London-based AI Developer with 14+ years experience specializing in OpenAI, LangChain, and AWS Bedrock applications. Expert in AI-powered application development, custom model creation, and intelligent automation.',
                  url: 'https://tombrierley.com',
                  email: 'hello@tombrierley.com',
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
                    name: 'AI Developer',
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
                    url: 'https://tombrierley.com',
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
                      description: '14+ years of software development experience',
                    },
                  ],
                  sameAs: [
                    'https://github.com/tombrierley',
                    'https://linkedin.com/in/tombrierley',
                  ],
                  image: {
                    '@type': 'ImageObject',
                    url: 'https://tombrierley.com/ogimage.png',
                    caption: 'Tom Brierley - AI Developer London',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://tombrierley.com/#organization',
                  name: 'Tom Brierley AI Development',
                  url: 'https://tombrierley.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://tombrierley.com/ogimage.png',
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+44',
                    contactType: 'Customer Service',
                    email: 'hello@tombrierley.com',
                    areaServed: ['GB', 'EU', 'US'],
                    availableLanguage: 'English',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'London',
                    addressCountry: 'GB',
                  },
                  founder: {
                    '@id': 'https://tombrierley.com/#person',
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
                  '@id': 'https://tombrierley.com/#website',
                  url: 'https://tombrierley.com',
                  name: 'Tom Brierley - AI Developer London',
                  description:
                    'Portfolio and services of Tom Brierley, London-based AI Developer specializing in OpenAI, LangChain, and AWS Bedrock applications.',
                  publisher: {
                    '@id': 'https://tombrierley.com/#person',
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://tombrierley.com/?s={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                  mainEntity: {
                    '@id': 'https://tombrierley.com/#person',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
