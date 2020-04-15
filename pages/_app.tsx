import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';

import GlobalStyle from '../theme/GlobalStyle';
import main from '../theme/main';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={main}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
