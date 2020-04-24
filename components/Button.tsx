import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  href: string;
  children: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({ href, children }) => (
  <ButtonWrapper rel="noreferrer noopener" target="_blank" href={href}>
    {children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.a(
  ({ theme }) => `
    display: inline-block;
    border-bottom: solid 1px ${theme.colors.textColor};
    font-weight: ${theme.fontWeights.bold};
    font-size: ${theme.fontSizes.xSmall};
    margin-right:  ${theme.spacing.xxSmall};
    text-transform: uppercase;

    &:hover{
      border-bottom: none;
    }
  `,
);

export default Button;
