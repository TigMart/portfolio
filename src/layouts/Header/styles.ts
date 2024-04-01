import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme } from '@assets/styles';

type StyleProps = {
  isGapSupport: boolean;
};

const useStyles = createUseStyles(
  ({ colors }: ITheme) => ({
    root: {
      width: '100%',
      height: '7rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      lineHeight: 'normal',
    },
    logo: {
      display: 'block',
      height: '48px',
    },
    navList: {
      display: 'flex',
      alignItems: 'center',
      gap: '6rem',
    },
    item: {
      '&:not(:last-child)': {
        marginRight: (isGapSupport: StyleProps) => (isGapSupport ? '' : '6rem'),
      },
    },
    link: {
      fontSize: '2rem',
      fontWeight: FontWeight.Medium,
      letterSpacing: '1px',
      color: colors.text.tint2,
      transition: 'all .3s',
      '&:hover': {
        color: colors.text.tint3,
      },
    },
    right: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
    },
    languageBtn: {
      fontSize: '1.6rem',
      color: colors.text.tint2,
      marginRight: (isGapSupport: StyleProps) => (isGapSupport ? '' : '3rem'),
      '&:disabled': {
        display: 'none',
      },
    },
  }),
  { name: 'header' },
);

export default useStyles;
