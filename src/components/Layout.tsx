import Head from 'next/head';
import type { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="description" content="OpenCepa" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>OpenCepa</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
