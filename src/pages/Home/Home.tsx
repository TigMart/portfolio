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
      <h1 style={{ textAlign: 'center', color: 'white' }}>Coming Soon...</h1>
    </>
  );
}

export default Home;
