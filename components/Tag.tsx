'use client'
import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  children: ReactNode;
};

const Tag: FunctionComponent<TagProps> = ({ children }) => (
  <TagWrapper>{children}</TagWrapper>
);

const TagWrapper = styled.div(
  ({ theme }) => `
    display: inline-block;
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xSmall};
    margin-right:  ${theme.spacing.xSmall};
    text-transform: uppercase;
  `,
);

export default Tag;
