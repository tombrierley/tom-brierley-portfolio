'use client';

import React, { createContext, ReactNode, FunctionComponent } from 'react';
import { Content } from '../types';

const initialContent: Content = {
  name: 'Tom Brierley',
  contactEmail: 'hello@tombrierley.com',
  location: 'London, UK',
  introduction: `Hi, I'm Tom Brierley, an AI Developer based in London, UK, with over 10 years' industry experience. I help businesses harness AI to create intelligent, efficient, and user-friendly products.`,
  introText: `I build AI-powered applications that combine advanced AI capabilities with clean, scalable code and thoughtful design. I specialise in rapid prototyping, turning business challenges into tangible solutions, and delivering AI systems that are practical, high-impact, and seamlessly integrated into operations.`,
  services: [
    {
      title: 'AI-Assisted Software Development',
      description:
        'As a London-based AI Developer, I use AI tools strategically to accelerate software development. I focus on automating repetitive tasks, improving workflows, and building robust, maintainable applications.',
      details: [
        'AI-assisted feature development and enhancements',
        'Rapid prototyping & MVP builds',
        'Codebase modernisation and refactoring',
        'Automation of software engineering workflows',
        'Performance optimisation for AI-powered applications',
      ],
    },
    {
      title: 'AI Discovery & Opportunity Assessment',
      description:
        'I help businesses identify high-value AI opportunities. Through stakeholder interviews, workflow mapping, and technical audits, I deliver actionable insights and a roadmap for AI integration.',
      details: [
        'AI opportunity identification and validation',
        'Workflow and process mapping for AI implementation',
        'Technical landscape review',
        'ROI & feasibility assessment for AI projects',
        'AI readiness evaluation for businesses',
      ],
    },
    {
      title: 'AI-Powered Applications',
      description:
        'I design and build AI-powered applications that integrate seamlessly into your existing systems. Using frameworks like LangFlow and LangChain with custom APIs, I create intelligent agents, automated workflows, and domain-specific AI tools.',
      details: [
        'Custom AI assistants and intelligent agents',
        'RAG-powered knowledge systems',
        'Automated business workflows using AI',
        'API integrations with CRMs, CMSs, and internal systems',
        'Interactive AI dashboards and analytics interfaces',
      ],
    },
    {
      title: 'Custom Model Development',
      description:
        'I develop domain-specific AI models using RAG and PEFT to bring your business knowledge into AI solutions. These models provide accurate, context-aware responses while being efficient and cost-effective.',
      details: [
        'Domain-specific AI model tuning (RAG, PEFT)',
        'Dataset preparation, cleaning, and curation',
        'Model evaluation and benchmarking for accuracy',
        'Guidance on AI governance, security, and compliance',
      ],
    },
    {
      title: 'UX & UI Design for AI Applications',
      description:
        'I create user experiences for AI applications that are intuitive, accessible, and enjoyable. By combining research, prototyping, and design iteration, I ensure AI solutions are easy to use and understand.',
      details: [
        'UX research and journey mapping for AI applications',
        'Wireframing, user flows, and interactive prototypes',
        'Usability testing and recommendations for AI systems',
      ],
    },
    {
      title: 'Front-End & UI Development',
      description:
        'I build scalable, responsive, and accessible front-end applications that bring AI products to life. Using modern frameworks and design systems, I ensure performance, maintainability, and an excellent user experience.',
      details: [
        'UI development with React and Next.js',
        'Design system creation and component libraries',
        'Tailwind CSS, SCSS, CSS-in-JS for clean styling',
        'Responsive and accessible front-end development',
        'Interactive animations and transitions',
        'Node.js and modern TypeScript tooling',
      ],
    },
  ],
  workProcess: [
    {
      title: 'Discovery & Alignment',
      description:
        'Understanding your goals, challenges, and the AI outcomes that will have the greatest impact.',
    },
    {
      title: 'Architecture & Strategy',
      description:
        'Designing a clear AI and software architecture with technical choices, timelines, and cost planning.',
    },
    {
      title: 'Build & Iterate',
      description:
        'Rapid prototyping provides tangible results fast. We then iterate based on real feedback to refine AI features and workflows.',
    },
    {
      title: 'Integrate & Deploy',
      description:
        'Deploy AI systems into your existing infrastructure with reliability, security, and maintainability.',
    },
    {
      title: 'Support & Scale',
      description:
        'Ongoing AI optimisation, feature expansion, and scaling support to ensure long-term business impact.',
    },
  ],
  technologies: [
    {
      category: 'AI & ML',
      items: [
        'OpenAI (GPT, ChatGPT), Anthropic, Groq, AWS Bedrock',
        'LangChain, LangFlow',
        'RAG (Retrieval-Augmented Generation), PEFT, model fine-tuning pipelines',
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        'Node.js, Express, Serverless architecture',
        'PostgreSQL, MongoDB, vector databases',
        'GraphQL, REST APIs',
      ],
    },
    {
      category: 'Frontend',
      items: [
        'React, Next.js',
        'Tailwind CSS, SCSS, CSS-in-JS',
        'Typescript, JavaScript',
      ],
    },
  ],
  clients: [
    { name: 'Clinique' },
    { name: 'Lenovo' },
    { name: "Levi's" },
    { name: 'Ganni' },
    { name: 'Leon' },
  ],
  metaTitle:
    'Tom Brierley - AI Developer London | Expert in OpenAI, LangChain & AWS Bedrock',
  metaDescription:
    'London-based AI Developer with 14+ years experience. I build AI-powered applications using OpenAI, LangChain, and AWS Bedrock. Specializing in rapid prototyping, intelligent agents, and seamless AI integration for businesses.',
  startProjectText: `If you're looking for an AI Developer in London or the UK to bring AI capabilities into your business, I'd love to discuss your project. Whether it's building AI-powered applications, custom models, or intelligent automation workflows, I focus on delivering practical, high-impact AI solutions. Get in touch via the contact form on my portfolio site to start the conversation and explore how AI can transform your business.`,
  // Legacy properties for backward compatibility
  intro: `Hi, I'm Tom Brierley, an AI Developer based in London, UK, with over 14 years' industry experience.`,
  about: `I help businesses harness AI to create intelligent, efficient, and user-friendly products. I build AI-powered applications that combine advanced AI capabilities with clean, scalable code and thoughtful design.`,
  howIWork: `My approach is practical, results-driven, and focused on delivering tangible AI solutions quickly.`,
  interests: [
    'OpenAI & GPT Models',
    'LangChain & LangFlow',
    'AWS Bedrock',
    'RAG Systems',
    'Custom AI Models',
    'AI-Powered Applications',
    'React & TypeScript',
    'Next.js',
    'Node.js',
    'Vector Databases',
    'AI UX/UI Design',
    'Intelligent Agents',
  ],
  projects: [],
};

const ContentContext = createContext<Content>(initialContent);

interface ProviderProps {
  children: ReactNode;
}

export const ContentProvider: FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <ContentContext.Provider value={initialContent}>
    {children}
  </ContentContext.Provider>
);

export default ContentContext;
