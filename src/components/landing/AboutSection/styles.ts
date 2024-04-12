import { createUseStyles } from 'react-jss';

import { ITheme, mediaQueryMax, typography } from '@assets/styles';

const useStyles = createUseStyles(
  ({ colors, spacings, breakpoints }: ITheme) => ({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inner: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '8.5rem',
      paddingBottom: '8.5rem',
      [mediaQueryMax(breakpoints.mobile)]: {
        paddingTop: '6rem',
      },
    },
    heading: {
      ...typography.H2,
      marginBottom: spacings.s18,
      color: colors.text.tint6,
    },
    subTitle: {
      ...typography.t3,
      color: colors.text.tint4,
      textAlign: 'center',
    },
    content: {
      maxWidth: '78rem',
      marginTop: '9.6rem',
      marginBottom: '6rem',
      fontSize: '2rem',
      lineHeight: '3.8rem',
      color: colors.text.tint2,
      textAlign: 'justify',
      [mediaQueryMax(breakpoints.mobile)]: {
        marginTop: '6.4rem',
        marginBottom: '4.4rem',
        fontSize: '1.6rem',
        lineHeight: '2.6rem',
      },
    },
  }),
  { name: 'about-section' },
);

export default useStyles;
