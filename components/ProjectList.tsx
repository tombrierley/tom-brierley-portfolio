'use client'
import React, { FunctionComponent } from 'react';

import ProjectBlock from './ProjectBlock';

import { Project } from '../types';

type ProjectListProps = {
  projects?: Project[];
};

const ProjectList: FunctionComponent<ProjectListProps> = ({ projects }) => {
  if (!projects || !projects.length) return <></>;

  return (
    <>
      {projects.map((project) => (
        <ProjectBlock key={project.id} {...project} />
      ))}
    </>
  );
};

export default ProjectList;
