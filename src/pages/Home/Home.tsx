import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import PAGETITLES from '@constants/pageTitles';
import Header from '@layouts/Header/Header';
import Loading from '@components/helpers/Loading';
import Footer from '@layouts/Footer';

const IntroSection = React.lazy(() => import('@components/landing/IntroSection'));
const AboutSection = React.lazy(() => import('@components/landing/AboutSection'));
const ContactMe = React.lazy(() => import('@components/landing/ContactMe'));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      <Header />
      <Suspense fallback={<Loading />}>
        <IntroSection />
        <AboutSection />
        <ContactMe />
      </Suspense>
      <Footer />
    </>
  );
};

export default Home;
