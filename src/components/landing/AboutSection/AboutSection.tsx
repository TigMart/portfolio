import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import Button from '@components/common/Button';
import SvgIcon from '@components/helpers/SvgIcon';
import handleDownloadCV from '@service/downloadCV';

import useStyles from './styles';

function AboutSection() {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <section id="about" className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <h2 className={classes.heading}>{t('about.title')}</h2>
        <p className={classes.subTitle}>{t('about.subTitle')}</p>
        <p className={classes.content}>{t('about.content')}</p>
        <Button
          type="button"
          styleType="primary"
          name={t('about.buttonCV')}
          iconLeft={<SvgIcon icon="icon_download" width={24} height={24} fill="none" />}
          size="large"
          onClick={handleDownloadCV}
        />
      </div>
    </section>
  );
}

export default AboutSection;
