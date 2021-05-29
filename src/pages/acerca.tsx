import { Page } from '@components/Page';
import { PageContent } from '@components/PageContent';
import type { NextPage } from 'next';
import Link from 'next/link';

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
