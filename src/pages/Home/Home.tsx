import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import PAGETITLES from '@constants/pageTitles';
import Header from '@layouts/Header/Header';
import Loading from '@components/helpers/Loading';

const IntroSection = React.lazy(() => import('@components/landing/IntroSection/IntroSection'));

function Home() {
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Loading />}>
        <IntroSection />
      </Suspense>
    </>
  );
}

export default Home;
