import { Page } from '@components/Page';
import { PageContent } from '@components/PageContent';
import Link from 'next/link';

import type { NextPage } from 'next';

const AcercaPage: NextPage = () => {
  return (
    <Page title="Acerca">
      <PageContent>
        <p>Acerca de OpenCepa.</p>
        <p>
          <Link href="/">
            <a>Volver al Inicio</a>
          </Link>
        </p>
      </PageContent>
    </Page>
  );
};

export default AcercaPage;
