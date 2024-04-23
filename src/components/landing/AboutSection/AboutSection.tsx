import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import use3dAnimation from '@hooks/use3dAnimation';
import handleDownloadCV from '@service/downloadCV';
import SvgIcon from '@components/helpers/SvgIcon';
import Button from '@components/common/Button';
import SKILLS from '@constants/skills';

import useStyles from './styles';

function AboutSection() {
  const { t } = useTranslation();
  const [buttonsVisible, setButtonsVisible] = useState<boolean>(false);
  const buttonsContainerRef = useRef(null);
  const { rotation, handleMove, handleDown, handleOut, handleUp } = use3dAnimation();
  const classes = useStyles({ rotation });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setButtonsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.6 }, // Adjust threshold as needed
    );

    const currentRef = buttonsContainerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className={classes.root}>
      <div className={classNames(classes.inner, 'container')}>
        <h2 className={classes.heading}>{t('about.title.0')}</h2>
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
        <div className={classes.skills}>
          <h2 className={classes.heading}>{t('about.title.1')}</h2>
          <div ref={buttonsContainerRef} className={classes.buttonsContainer} style={{ opacity: buttonsVisible ? '1' : '0' }}>
            {SKILLS.map((skill, index) => (
              <Button
                key={+index}
                type="button"
                styleType="secondary"
                className={classes.skill}
                name={skill.name}
                onMouseMove={handleMove}
                onMouseOut={handleOut}
                onMouseDown={handleDown}
                onMouseUp={handleUp}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
