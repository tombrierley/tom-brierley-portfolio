import React, { useContext, FunctionComponent } from 'react';
import Head from 'next/head';

import ProjectList from '../components/ProjectList';
import Typography from '../components/Typography';
import Section from '../components/Section';
import Tag from '../components/Tag';

import ContentContext from '../state/ContentContext';

import { Content } from '../types';

const Home: FunctionComponent = () => {
  const {
    intro,
    about,
    projects,
    interests,
    contactEmail,
    metaTitle,
    metaDescription,
    howIWork,
  }: Content = useContext(ContentContext);

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:url" content="http://tombrierley.com/" />
        <meta property="og:image" content="/ogimage.png" />
      </Head>

      <Section size="medium" setThemeOnEntry="dark">
        <Typography as="h3" type="h1" line>
          {intro}
        </Typography>
      </Section>

      <Section size="medium" setThemeOnEntry="dark">
        <Typography as="h2" type="h1" line marginBottomLarge>
          About
        </Typography>

        <Typography as="p" type="h2">
          {about}
        </Typography>
      </Section>

      <Section size="medium" setThemeOnEntry="dark">
        <Typography as="h2" type="h1" line marginBottom>
          I&lsquo;m currently excited by
        </Typography>

        <Tag>
          {interests.map((interest) => (
            <Tag>{interest}</Tag>
          ))}
        </Tag>
      </Section>

      <Section size="medium" setThemeOnEntry="dark">
        <Typography as="h2" type="h1" line marginBottomLarge>
          How I work
        </Typography>

        <Typography as="p" type="h2">
          {howIWork}
        </Typography>
      </Section>

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
