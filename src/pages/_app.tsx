import '../styles/globals.css';

import Layout from '@components/Layout';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster position="bottom-center" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
