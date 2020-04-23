import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Wrapper>
);

const Wrapper = styled.div(
  () => `
    height: 100%;
    width: 100%;
  `,
);

const Content = styled.main(
  ({ theme }) => `
  height: 100%;
  padding: 0 ${theme.spacing.large};
  width: 100%;

  @media (${theme.breakpoints.medium}) {
    padding: 0 ${theme.spacing.xxxLarge};
  }
  `,
);

export default Layout;
