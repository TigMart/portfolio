import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

import useGapSupport from '@hooks/useGapSupport';
import Button from '@components/common/Button';

import useStyles from './styles';

const LANG = {
  en: { nativeName: 'English' },
  am: { nativeName: 'Armenian' },
};

function Header() {
  const { t, i18n } = useTranslation();
  const isGapSupport = useGapSupport();
  const classes = useStyles({ isGapSupport });

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng).catch(() => {});
  };

  return (
    <header className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <Link to="/" className={classes.logo}>
          <img src="/logo.webp" alt="Tigran's portfolio logo" width={40} height={48} />
        </Link>

        <nav>
          <ul className={classes.navList}>
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={uuidv4()} className={classes.item}>
                <a href="/" className={classes.link}>
                  {t(`header.nav.${index}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.right}>
          <div>
            {Object.keys(LANG).map(lng => (
              <button className={classes.languageBtn} type="button" key={lng} onClick={() => handleLanguageChange(lng)} disabled={i18n.resolvedLanguage === lng}>
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          <Button name={t('header.button')} />
        </div>
      </div>
    </header>
  );
}

export default Header;
