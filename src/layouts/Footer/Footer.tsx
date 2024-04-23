import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import SECTIONS from '@constants/sections';
import useGapSupport from '@hooks/useGapSupport';
import SocialIcons from '@components/common/SocialIcons';
import SvgIcon from '@components/helpers/SvgIcon';

import useStyles from './styles';

function Footer() {
  const isGapSupport = useGapSupport();

  const classes = useStyles({ isGapSupport });
  const { t } = useTranslation();
  return (
    <footer className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <div className={classes.top}>
          <div>
            <Link to="/" className={classes.logo}>
              <img src="/logo.webp" alt="Tigran's portfolio logo" width={40} height={48} />
            </Link>
            <SocialIcons />
          </div>
          <nav className={classes.nav}>
            <ul className={classes.navList}>
              {SECTIONS.map((section, index) => (
                <li key={uuidv4()} className={classes.item}>
                  <a href={section} className={classes.link}>
                    {t(`header.nav.${index}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={classes.infoBox}>
          <div className="flex aic">
            <SvgIcon icon="icon_mail" width={24} height={24} />
            <a className={classes.text} href="mailto:info@tigmar.com?subject=Job%20Application&body=Hello%20Tigran">
              info@tigmar.com
            </a>
          </div>
          <div className="flex aic">
            <SvgIcon icon="icon_phone" width={24} height={24} />
            <a className={classes.text} href="tel:+37494696566">
              +37494696566
            </a>
          </div>
        </div>
        <p className={classes.copyright}>
          Copyright &copy; Tigran Martirosyan <span className="year">{new Date().getFullYear()}</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
