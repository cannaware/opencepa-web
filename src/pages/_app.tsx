import '../styles/globals.css';

import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import type { FC } from 'react';
import { Toaster } from 'react-hot-toast';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AuthProvider session={pageProps.session}>
        <Toaster position="bottom-center" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
};

export default App;
