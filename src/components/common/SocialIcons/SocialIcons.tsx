import SvgIcon from '@components/helpers/SvgIcon';

import useStyles from './styles';

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.socialButtonsGroup}>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/tigran-martirosyan-b261591ab"
        className={classes.socialBtn}
        aria-label="go to Linkedin page"
        rel="noreferrer"
      >
        <SvgIcon icon="icon_linkedin" fill="#BABABA" width={24} height={24} />
      </a>
      <a target="_blank" href="https://github.com/TigMart" className={classes.socialBtn} aria-label="go to Github profile" rel="noreferrer">
        <SvgIcon icon="icon_github" fill="#BABABA" width={24} height={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
