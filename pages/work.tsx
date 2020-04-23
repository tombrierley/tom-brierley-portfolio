import React, { useContext, FunctionComponent } from 'react';
import Head from 'next/head';

import ProjectList from '../components/ProjectList';
import Typography from '../components/Typography';
import Section from '../components/Section';

import ContentContext from '../state/ContentContext';

import { Content } from '../types';

const Home: FunctionComponent = () => {
  const {
    projects,
    contactEmail,
    metaTitle,
    metaDescription,
  }: Content = useContext(ContentContext);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <Section size="medium" setThemeOnEntry="light">
        <Typography as="h2" type="h1" line>
          Work
        </Typography>
      </Section>

      <ProjectList projects={projects} />

      <Section center setThemeOnEntry="light">
        <Typography as="h2" type="h1" line marginBottom center>
          Let&lsquo;s start a project
        </Typography>

        <Typography as="p" type="p" center>
          {contactEmail}
        </Typography>
      </Section>
    </>
  );
};

export default Home;
