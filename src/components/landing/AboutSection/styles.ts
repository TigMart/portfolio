import { createUseStyles } from 'react-jss';

import { ITheme, mediaQueryMax, typography } from '@assets/styles';

import { Animation } from './type';

interface IStyleProps {
  rotation: Animation;
}

const useStyles = createUseStyles<string, IStyleProps, ITheme>(
  ({ colors, spacings, breakpoints }: ITheme) => ({
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
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

    skills: {
      marginTop: spacings.s64,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    buttonsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: spacings.s12,
      marginTop: spacings.s32,
      transition: 'all .3s ease-in',
      backfaceVisibility: 'hidden',
    },
    skill: {
      transition: 'box-shadow 0.1s, transform 0.1s',
      '&:hover': {
        boxShadow: '0px 0px 30px rgba(0,0,0, 0.6)',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      },
    },
  }),
  { name: 'about-section' },
);

export default useStyles;
