//import Amplify from '@aws-amplify/core';
import '@aws-amplify/ui-react/styles.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
//import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Amplify } from 'aws-amplify';
import { AppProps } from 'next/app';
import * as React from 'react';

import { awsConfig } from '@/src/config/aws-export';
import createEmotionCache from '@/src/utils/createEmotionCache';
import theme from '@/src/utils/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// AWS-AMPLIFY

Amplify.configure({
  ...awsConfig,
  ssr: true,
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}

        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
