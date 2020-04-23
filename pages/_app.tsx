import React from 'react';
import { AppProps } from 'next/app';

import Layout from '../components/Layout';

import GlobalStyle from '../theme/GlobalStyle';

import { ContentProvider } from '../state/ContentContext';
import { ThemeColorProvider } from '../state/ThemeColorProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContentProvider>
      <ThemeColorProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeColorProvider>
    </ContentProvider>
  );
}

export default MyApp;
