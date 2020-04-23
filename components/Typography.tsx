import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import queryProp from '../utils/queryProp';

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  type?: string | 'h1';
  line?: boolean | false;
  marginBottom?: boolean | false;
  marginBottomLarge?: boolean | false;
  bold?: boolean | false;
  children: ReactNode;
  center?: boolean | false;
};

const Typography: FunctionComponent<TypographyProps> = ({
  children,
  ...props
}) => <StyledTypography {...props}>{children}</StyledTypography>;

type TypographyStyleProps = {
  type?: string | 'h1';
  line?: boolean | false;
  marginBottom?: boolean | false;
  marginBottomLarge?: boolean | false;
  bold?: boolean | false;
  center?: boolean | false;
};

const StyledTypography = styled.h3<TypographyStyleProps>(
  ({
    theme, type, line, marginBottom, marginBottomLarge, bold, center,
  }) => `
    display: block;
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.33;
    margin: 0;
  

    ${queryProp(
    type === 'h1',
    `
        font-size: ${theme.fontSizes.xxxLarge};
        transform: translateY(0.3em);
      `,
  )}

    ${queryProp(
    type === 'h2',
    `
        font-family:  ${theme.base.fontFamilyAlt};
        font-size: ${theme.fontSizes.xxLarge};
      `,
  )}


    ${queryProp(
    type === 'p',
    `
        font-size: ${theme.fontSizes.medium};
        line-height: 1;
      `,
  )}


    ${queryProp(
    type === 'p-alt',
    `
      font-family:  ${theme.base.fontFamilyAlt};
      font-size: ${theme.fontSizes.medium};
      line-height: 1.7;
      `,
  )}

    ${queryProp(
    marginBottom,
    `
        margin-bottom: ${theme.spacing.base};
      `,
  )}

    ${queryProp(
    marginBottomLarge,
    `
        margin-bottom: ${theme.spacing.large};
      `,
  )}


    ${queryProp(
    line,
    `
        &:before {
          background-color: ${theme.colors.textColor};
          content: '';
          display: block;
          height: 1px;
          margin-bottom: ${theme.spacing.xLarge};
          width: ${theme.spacing.xxLarge};
        }
      `,
  )}

    ${queryProp(
    bold,
    `
        font-weight: ${theme.fontWeights.bold};
      `,
  )}

    ${queryProp(
    center,
    `
        text-align: center;

        &:before {
          margin-left: auto;
          margin-right: auto;
        }
      `,
  )}
`,
);

export default Typography;
