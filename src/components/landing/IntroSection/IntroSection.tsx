import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import myImage from '@assets/images/photo.webp';
import Button from '@components/common/Button';
import useGapSupport from '@hooks/useGapSupport';
import handleDownloadCV from '@service/downloadCV';
import SocialIcons from '@components/common/SocialIcons';

import useStyles from './styles';

function IntroSection() {
  const { t } = useTranslation();
  const isGapSupport = useGapSupport();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const classes = useStyles({ isGapSupport, isLoading });

  const handleHireMe = () => {
    window.location.href = 'mailto:tigran.v.mart@gmail.com?subject=Job%20Application&body=Hello%20Tigran';
  };
  return (
    <section id="intro" className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <div className={classes.left}>
          <div className={classes.leftInner}>
            <p className={classes.sayHi}>{t('intro.sayHi')}</p>
            <p className={classes.fullName}>{t('intro.fullName')}</p>
            <h1 className={classes.profession}>{t('intro.profession')}</h1>
            <SocialIcons />
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
          <img className={classes.myImg} src={myImage} alt="Tigran Martirosyan" width={560} height={675} onLoad={() => setIsLoading(!isLoading)} />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
