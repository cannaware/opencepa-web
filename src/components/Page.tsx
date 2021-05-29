import Head from 'next/head';
import type { FC, ReactNode } from 'react';

type PageProp = {
  children?: ReactNode;
  title?: string;
};

export const Page: FC<PageProp> = ({ children, title }) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <main>{children}</main>
    </>
  );
};
