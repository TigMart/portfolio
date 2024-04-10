import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import myImage from '@assets/images/photo.webp';
import SvgIcon from '@components/helpers/SvgIcon';
import Button from '@components/common/Button';
import useGapSupport from '@hooks/useGapSupport';
import myCV from '@assets/Tigran-Martirosyan-CV.pdf';

import useStyles from './styles';

function IntroSection() {
  const { t } = useTranslation();
  const isGapSupport = useGapSupport();
  const classes = useStyles({ isGapSupport });
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.setAttribute('download', 'Tigran_Martirosyan_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleHireMe = () => {
    window.location.href = 'mailto:tigran.v.mart@gmail.com?subject=Job%20Application&body=Hello%20Tigran';
  };
  return (
    <section className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <div className={classes.left}>
          <div className={classes.leftInner}>
            <p className={classes.sayHi}>{t('intro.sayHi')}</p>
            <p className={classes.fullName}>{t('intro.fullName')}</p>
            <h1 className={classes.profession}>{t('intro.profession')}</h1>
            <div className={classes.socialButtonsGroup}>
              <a target="_blank" href="https://www.linkedin.com/in/tigran-martirosyan-b261591ab" className={classes.socialBtn} aria-label="go to Linkedin page" rel="noreferrer">
                <SvgIcon icon="icon_linkedin" fill="#BABABA" width={24} height={24} />
              </a>
              <a target="_blank" href="https://github.com/TigMart" className={classes.socialBtn} aria-label="go to Github profile" rel="noreferrer">
                <SvgIcon icon="icon_github" fill="#BABABA" width={24} height={24} />
              </a>
            </div>
            <div className={classes.actionButtonGroup}>
              <Button styleType="primary" name={t('intro.buttonHire')} size="large" onClick={handleHireMe} />
              <Button styleType="secondary" name={t('intro.buttonCV')} size="large" onClick={handleDownloadCV} />
            </div>
            <div className={classes.infoGroup}>
              <div className={classes.infoItem}>
                <span className={classes.count}>3+</span>
                <p className={classes.text}>{t('intro.info.0')}</p>
              </div>
              <div className={classes.infoItem}>
                <span className={classes.count}>10+</span>
                <p className={classes.text}>{t('intro.info.1')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <picture>
            <source media="(max-width: 576px)" srcSet={`${myImage}?w=362&dpr=1 1x, ${myImage}?w=362&dpr=2 2x`} />
            <source media="(min-width: 576px) and (max-width: 668px)" srcSet={`${myImage}?w=403&dpr=1 1x, ${myImage}?w=403&dpr=2 2x`} />
            <source media="(min-width: 668px) and (max-width: 1350px)" srcSet={`${myImage}?w=448&dpr=1 1x, ${myImage}?w=448&dpr=2 2x`} />
            <source media="(min-width: 1350px)" srcSet={`${myImage}?w=560&dpr=1 1x, ${myImage}?w=560&dpr=2 2x`} />
            <img className={classes.myImg} src={`${myImage}?w=560&dpr=1`} alt="Tigran Martirosyan" width={560} height={675} />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
