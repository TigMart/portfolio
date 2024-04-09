import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import useGapSupport from '@hooks/useGapSupport';
import Button from '@components/common/Button';
import SvgIcon from '@components/helpers/SvgIcon';

import useStyles from './styles';

const LANG = {
  en: { nativeName: 'English' },
  am: { nativeName: 'Armenian' },
};

function Header() {
  const { t, i18n } = useTranslation();
  const isGapSupport = useGapSupport();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles({ isGapSupport, isOpen });

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng).catch(() => {});
  };
  const handleHireMe = () => {
    window.location.href = 'mailto:tigran.v.mart@gmail.com?subject=Job%20Application&body=Hello%20Tigran';
  };

  return (
    <header className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <Link to="/" className={classes.logo}>
          <img src="/logo.webp" alt="Tigran's portfolio logo" width={40} height={48} />
        </Link>

        <nav className={classes.nav}>
          <ul className={classes.navList}>
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={uuidv4()} className={classes.item}>
                <a href="/" className={classes.link}>
                  {t(`header.nav.${index}`)}
                </a>
              </li>
            ))}
            <Button onClick={handleHireMe} className={classes.mobileHireBtn} name={t('header.button')} />
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
          <Button onClick={handleHireMe} className={classes.hireBtn} name={t('header.button')} />
          <button type="button" className={classes.mobileNavBtn} onClick={() => setIsOpen(!isOpen)} aria-label="mobile navigation button">
            <SvgIcon className={classes.mobileNavIcon} icon="icon_humburger" name="humburger" width={32} height={32} />
            <SvgIcon className={classes.mobileNavIcon} icon="icon_close_humburger" name="close-humburger" width={32} height={32} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
