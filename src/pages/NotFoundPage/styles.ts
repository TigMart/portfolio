import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme } from '@assets/styles';

const useStyles = createUseStyles(
  ({ colors }: ITheme) => ({
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '.6rem',
      padding: '2rem',
      backgroundColor: colors.background.tint2,
    },
    headingWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: '3rem',
      color: colors.absolute.white,
      fontWeight: FontWeight.Medium,
      padding: '1rem',
      borderBottom: '1px solid white',
    },
    info: {
      textAlign: 'center',
      fontWeight: FontWeight.Medium,
      fontSize: '1.4rem',
      padding: '1rem',
      lineHeight: '1.6',
      color: colors.absolute.white,
    },
    button: {
      display: 'block',
      fontSize: '1.6rem',
      color: colors.absolute.white,
    },
  }),
  {
    name: 'not-found-page',
  },
);

export default useStyles;
