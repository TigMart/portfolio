import { Helmet } from 'react-helmet';

import PAGETITLES from '@constants/pageTitles';
import Header from '@layouts/Header/Header';

function Home() {
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      <Header />
    </>
  );
}

export default Home;
