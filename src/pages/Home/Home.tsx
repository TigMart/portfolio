/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import PAGETITLES from '@constants/pageTitles';

const lng = {
  en: { nativeName: 'English' },
  am: { nativeName: 'Armenian' },
};

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.HOME}</title>
      </Helmet>
      {Object.keys(lng).map(ln => (
        <button style={{ color: 'white' }} type="button" key={ln} onClick={() => i18n.changeLanguage(ln)} disabled={i18n.resolvedLanguage === ln}>
          {ln}
        </button>
      ))}
      <div style={{ fontSize: '60px', color: 'white' }}>{t('key')}</div>
    </>
  );
}

export default Home;
