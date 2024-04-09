import { Helmet } from 'react-helmet';

import PAGETITLES from '@constants/pageTitles';
import Header from '@layouts/Header/Header';
import IntroSection from '@components/landing/IntroSection/IntroSection';

function Home() {
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      <Header />
      <IntroSection />
    </>
  );
}

export default Home;
