import React, { createContext, ReactNode, FunctionComponent } from 'react';

const initialContent = {
  name: 'Tom Brierley',
  contactEmail: 'hello@tombrierley.com',
  location: 'London, UK',
  intro:
    'Hello, I’m Tom Brierley, a freelance senior front‑end web developer specialising in clean, functional JavaScript and large scale React applications.',
  about:
    'I have over 7 years industry experience and, coming from a UI/UX design background, I have a passion for innovative development and like to combine my technical skills with my design eye to craft scalable and maintainable applications and user interfaces with pixel-perfect precision.',
  howIWork:
    'Working either remotely or on-site, I offer React and JavaScript expertise to agencies, startups and companies, both as a lead or an extension to their development teams.',
  metaTitle: 'Tom Brierley - Freelance Senior Front End Developer',
  metaDescription:
    'London Based Senior Front End Developer and React Engineer for Startups and Agencies',
  interests: [
    'React',
    'React Hooks',
    'Redux',
    'TypeScript',
    'Jest',
    'GraphQL',
    'Apollo',
    'Next',
    'CSS-in-JS',
    'Styled Components',
    'Polymorphic JS',
    'Functional Programming',
    'Micro-interactions',
    'Async Await',
    'Storybook',
    'Prettier',
  ],
  projects: [
    // {
    //   id: '1',
    //   title: 'Leon',
    //   description:
    //     'A CMS Driven staticially generated React, Redux and
    // Next site for the naturually fast food chain Leon.',
    //   tags: ['React', 'Redux', 'SCSS', 'BEM', 'Next'],
    // },
    {
      id: '2',
      title: 'Finmo',
      description:
        'A data driven React and Apollo web app and a React Native mobile app for a new and innovative Fintec startup.',
      tags: ['React', 'React Native', 'Apollo', 'GraphQL'],
      image: '/work/finmo.png',
      url: 'https://portal.finmo.co.uk/',
    },
    {
      id: '3',
      title: 'BandHQ',
      description:
        'GraphQL powered web app and Node and Prisma back end for a new service that connects musicians around the world.',
      tags: [
        'React',
        'Apollo',
        'GraphQL',
        'Styled Components',
        'Node',
        'Prisma',
      ],
      image: '/work/bandhq.png',
      url: 'https://bandhq.app/',
    },
    {
      id: '4',
      title: 'SKAND',
      description:
        'API driven web application that visualises drone photography to produce 3D models of buildings.',
      tags: ['React', 'Redux', 'Styled Components'],
      image: '/work/skand.png',
      url: 'https://app.skand.io/',
    },
    {
      id: '5',
      title: 'The Workability Index',
      description:
        'Polymorphic web application for a new HR startup that utilises server render for optimised performance.',
      tags: ['React', 'Redux', 'Next', 'Styled Components'],
      image: '/work/twi.png',
      url: 'https://app.workabilityindex.com.au/',
    },
    {
      id: '6',
      title: 'The Australian Ballet',
      description:
        'React ticket selection and seating application that integrates with complex booking APIs.',
      tags: ['React', 'Redux', 'SCSS', 'BEM'],
      image: '/work/ballet.png',
      url: 'https://australianballet.com.au/',
    },
    {
      id: '7',
      title: 'Verso',
      description: 'React and Meteor online classroom app.',
      tags: ['React', 'Meteor', 'Styled Components'],
      image: '/work/verso.png',
      url: 'https://v2.versoapp.com/',
    },
    {
      id: '8',
      title: 'Sovereign Hill',
      description:
        'React ticket application for iconic Australian tourist attraction.',
      tags: ['React', 'Redux', 'SASS', 'BEM'],
      image: '/work/soverign-hill.png',
      url: 'https://bookings.sovereignhill.com.au/',
    },
    {
      id: '9',
      title: 'Indigenous Business Australia',
      description:
        'React mentoring application to offer support for indigenous Australian businesses owners.',
      tags: ['React', 'Redux', 'SASS', 'BEM'],
      image: '/work/iba.png',
      url: 'https://www.strongwomenstrongbusiness.com/',
    },
    {
      id: '10',
      title: 'Lenovo',
      description:
        'An early iteration of a staticly generated site for the Lenovo Think Pad campaign, powered by Assemble and Handlebars.',
      tags: ['Assemble', 'Handlebars'],
      image: '/work/lenovo.png',
      url: 'http://www.lenovo.com/uk/en/thisisthinkpad/',
    },
  ],
};

const ContentContext = createContext(initialContent);

type ProviderProps = {
  children: ReactNode;
};

export const ContentProvider: FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <ContentContext.Provider value={initialContent}>
    {children}
  </ContentContext.Provider>
);

export default ContentContext;
