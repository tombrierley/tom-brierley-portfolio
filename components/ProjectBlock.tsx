'use client'
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Button from './Button';
import ImageLoader from './ImageLoader';
import Section from './Section';
import Typography from './Typography';
import Parallax from './Parallax';
import Tag from './Tag';

import { Project } from '../types';

const ProjectBlock: FunctionComponent<Project> = ({
  title,
  description,
  tags,
  image,
  url,
}) => (
  <Section setThemeOnEntry="light">
    <ProjectGrid>
      <ImageCol>
        <ImageLoader alt={title} imageUrl={image} />
      </ImageCol>

      <ContentCol>
        <Parallax>
          <Typography as="h3" type="h1" marginBottom>
            {title}
          </Typography>

          <Typography as="p" type="p-alt" line marginBottom>
            {description}
          </Typography>

          <TagWrapper>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagWrapper>

          {url && <Button href={url}>View Project</Button>}
        </Parallax>
      </ContentCol>
    </ProjectGrid>
  </Section>
);

const ProjectGrid = styled.div(
  ({ theme }) => `
    @media (${theme.breakpoints.medium}) {
      display: flex;
      height: 100%;
      width: 100%;
    }
  `,
);

const ImageCol = styled.div(
  ({ theme }) => `
    display: flex;
    margin-bottom: ${theme.spacing.large};

    @media (${theme.breakpoints.medium}) {
      flex: 0 0 50%;
      margin-bottom: 0;
      width: 50%;
    };
  `,
);

const ContentCol = styled.div(
  ({ theme }) => `
    display: flex;

    @media (${theme.breakpoints.medium}) {
      flex: 0 0 50%;
      padding-left: ${theme.spacing.xxLarge};
      position: relative;
      z-index: 1;
      width: 50%;
    };
  `,
);

const TagWrapper = styled.div(
  ({ theme }) => `
    margin-bottom: ${theme.spacing.large};
  `,
);

export default ProjectBlock;
