import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme, mediaQueryMax, typography } from '@styles/';

type StyleProps = {
  isGapSupport: boolean;
};

const useStyles = createUseStyles<string, StyleProps, ITheme>(
  ({ colors, breakpoints, spacings }: ITheme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
    },
    inner: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: spacings.s40,
      paddingBottom: spacings.s24,
      gap: spacings.s32,
      '& > *': {
        marginBottom: (props: StyleProps) => (props.isGapSupport ? '0' : spacings.s32),
      },
      [mediaQueryMax(breakpoints.mobile)]: {
        gap: spacings.s30,
        paddingBottom: spacings.s16,

        '& > *': {
          marginBottom: (props: StyleProps) => (props.isGapSupport ? '0' : spacings.s30),
        },
      },
    },
    logo: {
      display: 'block',
      height: '48px',
    },
    nav: {
      [mediaQueryMax(600)]: {
        padding: spacings.s16,
      },
    },
    navList: {
      display: 'flex',
      alignItems: 'center',
      gap: '6rem',

      lineHeight: '28px',
      [mediaQueryMax(breakpoints.laptop)]: {
        gap: '3rem',
      },
      [mediaQueryMax(breakpoints.mobile)]: {
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
    },
    item: {
      marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : '6rem'),
      [mediaQueryMax(breakpoints.laptop)]: {
        marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : '1.2rem'),
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
    infoBox: {
      display: 'flex',
      alignItems: 'center',

      gap: spacings.s40,
      position: 'relative',
      [mediaQueryMax(breakpoints.mobile)]: {
        flexDirection: 'column',
        gap: spacings.s16,
      },
      '& > div:first-child': {
        marginBottom: (props: StyleProps) => (props.isGapSupport ? '0' : '4rem'),
        [mediaQueryMax(breakpoints.mobile)]: {
          marginBottom: (props: StyleProps) => (props.isGapSupport ? '0' : '1.6rem'),
        },
      },
      '&::after': {
        content: '""',
        width: '100%',
        height: '1px',
        position: 'absolute',
        bottom: '-22px',
        backgroundColor: colors.text.tint2,
        [mediaQueryMax(breakpoints.mobile)]: {
          bottom: '-16px',
          width: '150%',
        },
      },
    },
    text: {
      ...typography.t2,
      color: colors.text.tint2,
      marginLeft: spacings.s12,
    },
    copyright: {
      fontSize: '1.4rem',
      color: colors.text.tint4,
      [mediaQueryMax(breakpoints.mobile)]: {
        fontSize: '1.2rem',
        textAlign: 'center',
      },
    },
  }),
  { name: 'footer' },
);

export default useStyles;
