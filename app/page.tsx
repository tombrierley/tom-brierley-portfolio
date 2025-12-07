'use client';

import React, { useContext } from 'react';
import ContentContext from '../state/ContentContext';
import Typography from '../components/Typography';
import Section from '../components/Section';
import List from '../components/List';
import styled from 'styled-components';

const ClientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ServicesList = styled.div`
  margin-bottom: 2rem;
`;

export default function Home(): JSX.Element {
  const {
    introduction,
    introText,
    services,
    workProcess,
    technologies,
    clients,
    startProjectText,
    contactEmail,
  } = useContext(ContentContext);

  return (
    <>
      <Section size="medium" setThemeOnEntry="dark">
        <header role="banner">
          <Typography as="h1" type="h1" line marginBottomLarge>
            {introduction}
          </Typography>

          <Typography as="p" type="h2">
            {introText}
          </Typography>
        </header>
      </Section>

      <Section size="medium" setThemeOnEntry="dark" id="services">
        <Typography as="h2" type="h1" line id="services-heading">
          Services
        </Typography>
      </Section>

      <section 
        itemScope 
        itemType="https://schema.org/ProfessionalService"
        aria-labelledby="services-heading"
      >
        {services.map((service, index) => (
          <Section key={index} size="medium" setThemeOnEntry="light">
            <article 
              itemScope 
              itemType="https://schema.org/Service"
              role="article"
              aria-labelledby={`service-${index}-heading`}
            >
              <ServicesList>
                <Typography as="h3" type="h2" marginBottom>
                  <span itemProp="name" id={`service-${index}-heading`}>{service.title}</span>
                </Typography>

                <Typography
                  as="p"
                  type="p-alt"
                  marginBottom
                  itemProp="description"
                >
                  {service.description}
                </Typography>

                <div itemProp="serviceOutput">
                  <List>
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} itemProp="serviceFeature">
                        <Typography as="span" type="p-alt">
                          {detail}
                        </Typography>
                      </li>
                    ))}
                  </List>
                </div>
              </ServicesList>
            </article>
          </Section>
        ))}
      </section>

      <Section size="medium" setThemeOnEntry="light" id="how-i-work">
        <Typography as="h2" type="h1" line marginBottomLarge>
          How I Work
        </Typography>

        <Typography as="p" type="p-alt" marginBottomLarge>
          My approach is practical, results-driven, and focused on delivering
          tangible AI solutions quickly.
        </Typography>

        <div itemScope itemType="https://schema.org/HowTo">
          <meta itemProp="name" content="AI Development Process" />
          <List ordered>
            {workProcess.map((step, index) => (
              <li
                key={index}
                itemScope
                itemType="https://schema.org/HowToStep"
                itemProp="step"
              >
                <Typography as="p" type="p-alt" itemProp="text">
                  <strong itemProp="name">{step.title}</strong>{' '}
                  {step.description}
                </Typography>
              </li>
            ))}
          </List>
        </div>
      </Section>

      <Section size="medium" setThemeOnEntry="light" id="technologies">
        <Typography as="h2" type="h1" line marginBottomLarge>
          Technologies Used
        </Typography>

        <Typography as="p" type="p-alt" marginBottomLarge>
          I use modern, scalable, and reliable technologies to build AI-powered
          applications and models.
        </Typography>

        <div itemScope itemType="https://schema.org/TechArticle">
          {technologies.map((tech, index) => (
            <div
              key={index}
              style={{ marginBottom: '2rem' }}
              itemScope
              itemType="https://schema.org/ItemList"
              itemProp="about"
            >
              <Typography as="h3" type="p-alt" bold marginBottom>
                <span itemProp="name">{tech.category}</span>:
              </Typography>
              <List>
                {tech.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    itemScope
                    itemType="https://schema.org/SoftwareApplication"
                    itemProp="itemListElement"
                  >
                    <Typography as="span" type="p" itemProp="name">
                      {item}
                    </Typography>
                  </li>
                ))}
              </List>
            </div>
          ))}
        </div>
      </Section>

      <Section size="medium" setThemeOnEntry="light" id="clients">
        <Typography as="h2" type="h1" line marginBottomLarge>
          Clients Include
        </Typography>

        <div itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="name" content="Previous Clients" />
          <ClientList>
            {clients.map((client, index) => (
              <Typography
                key={index}
                as="span"
                type="h2"
                itemScope
                itemType="https://schema.org/Organization"
                itemProp="itemListElement"
              >
                <span itemProp="name">{client.name}</span>
              </Typography>
            ))}
          </ClientList>
        </div>
      </Section>

      <Section size="medium" setThemeOnEntry="light" id="start-project">
        <Typography as="h2" type="h1" line marginBottom>
          Start a Project
        </Typography>

        <Typography as="p" type="p-alt" marginBottom>
          {startProjectText}
        </Typography>

        <Typography as="p" type="p-alt">
          <a href={`mailto:${contactEmail}`}>
            <Typography type="h3" as="p">
              {contactEmail}
            </Typography>
          </a>
        </Typography>
      </Section>

      <Section size="medium" setThemeOnEntry="light" id="faq">
        <Typography as="h2" type="h1" line marginBottomLarge>
          Frequently Asked Questions
        </Typography>

        <div itemScope itemType="https://schema.org/FAQPage">
          <div
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
            style={{ marginBottom: '2rem' }}
          >
            <Typography as="h3" type="h2" marginBottom itemProp="name">
              What AI technologies do you specialise in?
            </Typography>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <Typography as="p" type="p-alt" itemProp="text">
                I work with modern, production-ready AI tools including OpenAI
                GPT models, Anthropic Claude, AWS Bedrock, and the LangChain
                ecosystem. I also build custom Retrieval-Augmented Generation
                (RAG) systems, fine-tune models using PEFT, and design
                intelligent AI agents for automation and internal tools. Much of
                my work involves vector databases and bespoke API integrations
                to make AI genuinely useful inside real products.
              </Typography>
            </div>
          </div>

          <div
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
            style={{ marginBottom: '2rem' }}
          >
            <Typography as="h3" type="h2" marginBottom itemProp="name">
              How long does it take to build an AI-powered application?
            </Typography>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <Typography as="p" type="p-alt" itemProp="text">
                Timelines vary depending on complexity, but I always prioritise
                getting something tangible in your hands as early as possible.
                Simple AI features can often be delivered within a couple of
                weeks, while full AI applications usually take around one to two
                months. More complex systems involving custom models may take
                longer. Throughout the project, I work iteratively and share
                regular, working prototypes so progress is clear and you can
                help shape the direction as we go.
              </Typography>
            </div>
          </div>

          <div
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
            style={{ marginBottom: '2rem' }}
          >
            <Typography as="h3" type="h2" marginBottom itemProp="name">
              What makes your approach to AI development different?
            </Typography>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <Typography as="p" type="p-alt" itemProp="text">
                I combine 10+ years of software engineering experience with a
                strong background in UX and UI design. That means the solutions
                I build don&apos;t just function well—they&apos;re intuitive,
                robust, and focused on solving real problems. My approach is
                practical and grounded, centred around rapid iteration, clean
                architecture, and selecting the right tools for the job rather
                than chasing trends.
              </Typography>
            </div>
          </div>

          <div
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
            style={{ marginBottom: '2rem' }}
          >
            <Typography as="h3" type="h2" marginBottom itemProp="name">
              Do you work with businesses outside of London?
            </Typography>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <Typography as="p" type="p-alt" itemProp="text">
                Yes. Although I&apos;m based in London, I work with clients
                across the UK, Europe, and the United States. Most projects are
                delivered remotely, and I&apos;m flexible with time zones to
                ensure communication stays smooth and efficient throughout the
                project.
              </Typography>
            </div>
          </div>

          <div
            itemScope
            itemType="https://schema.org/Question"
            itemProp="mainEntity"
          >
            <Typography as="h3" type="h2" marginBottom itemProp="name">
              What does it cost to hire you as a Software Engineer & Developer specialising in AI?
            </Typography>
            <div
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <Typography as="p" type="p-alt" itemProp="text">
                Costs depend on the size and scope of the project. I offer
                fixed-price options for well-defined work, as well as day-rate
                arrangements for ongoing development or longer-term engagements.
                Once I understand your requirements, I&apos;ll provide a clear
                and transparent estimate. My goal is always to deliver the
                highest value solution within your budget.
              </Typography>
            </div>
          </div>
        </div>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://tombrierley.co.uk/#ai-development-service',
                name: 'AI Development Services',
                description:
                  'Professional AI development services including OpenAI integration, LangChain development, and custom AI applications',
                provider: {
                  '@id': 'https://tombrierley.co.uk/#person',
                },
                areaServed: ['London', 'United Kingdom', 'Remote'],
                serviceType: 'AI Development',
                category: 'Technology Services',
                offers: [
                  {
                    '@type': 'Offer',
                    name: 'AI-Powered Application Development',
                    description:
                      'Custom AI applications using OpenAI, LangChain, and AWS Bedrock',
                    category: 'AI Development',
                  },
                  {
                    '@type': 'Offer',
                    name: 'AI Discovery & Assessment',
                    description:
                      'AI opportunity identification and feasibility assessment',
                    category: 'AI Consulting',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Custom Model Development',
                    description:
                      'Domain-specific AI models using RAG and PEFT techniques',
                    category: 'AI Development',
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
