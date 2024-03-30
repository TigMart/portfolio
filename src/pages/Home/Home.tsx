import { Helmet } from 'react-helmet';

import PAGETITLES from '@constants/pageTitles';

function Home() {
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      <div>Home</div>
    </>
  );
}

export default Home;
