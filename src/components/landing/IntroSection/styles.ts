import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme, mediaQueryMax, typography } from '@styles/';
import vector from '@images/vector.webp';

type StyleProps = {
  isGapSupport: boolean;
  isLoading: boolean;
};

const useStyles = createUseStyles<string, StyleProps, ITheme>(
  ({ colors, spacings, radiuses, breakpoints }: ITheme) => ({
    root: {
      width: '100%',
      height: 'calc(100vh - 7rem)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [mediaQueryMax(breakpoints.laptop)]: {
        height: '100%',
      },
    },
    inner: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '3rem',
      paddingBottom: '8.5rem',
      [mediaQueryMax(breakpoints.mediumDesktop)]: {
        paddingTop: '6rem',
      },
      [mediaQueryMax(breakpoints.laptop)]: {
        flexDirection: 'column',
      },
      [mediaQueryMax(breakpoints.mobile)]: {
        paddingBottom: '6rem',
      },
    },
    left: {
      flex: '2',
      [mediaQueryMax(668)]: {
        flex: 'unset',
        width: '100%',
      },
    },
    leftInner: {
      width: 'fit-content',
      backgroundImage: `url(${vector})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [mediaQueryMax(breakpoints.desktop)]: {
        backgroundSize: 'contain',
      },
      [mediaQueryMax(breakpoints.laptop)]: {
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      [mediaQueryMax(668)]: {
        width: '100%',
      },
      [mediaQueryMax(breakpoints.mobile)]: {
        backgroundSize: 'contain',
      },
    },
    right: {
      flex: '1',
      position: 'relative',
    },
    sayHi: {
      width: 'fit-content',
      fontSize: '2.4rem',
      lineHeight: '2.9rem',
      letterSpacing: '0.5px',
      fontWeight: FontWeight.SemiBold,
      color: colors.text.tint4,
      marginBottom: spacings.s12,
      [mediaQueryMax(450)]: {
        fontSize: '2rem',
        lineHeight: '2.8rem',
      },
      [mediaQueryMax(400)]: {
        fontSize: '1.8rem',
        lineHeight: '2.4rem',
      },
    },
    fullName: {
      width: 'fit-content',
      fontSize: '2.8rem',
      lineHeight: '3.4rem',
      letterSpacing: '0.5px',
      fontWeight: FontWeight.Bold,
      color: colors.text.tint2,
      marginBottom: spacings.s20,
      [mediaQueryMax(450)]: {
        fontSize: '2.4rem',
        lineHeight: '3rem',
      },
      [mediaQueryMax(400)]: {
        fontSize: '2.2rem',
        lineHeight: '3rem',
      },
    },
    profession: {
      width: 'fit-content',
      ...typography.H1,
      background: colors.gradient.tint3,
      color: 'transparent',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      marginBottom: spacings.s32,
      textAlign: 'left',
      [mediaQueryMax(breakpoints.laptop)]: {
        textAlign: 'center',
      },
    },

    actionButtonGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: spacings.s24,

      '& > button:first-child': {
        marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : spacings.s24),
      },
      marginBottom: '8rem',
      marginTop: '6rem',
      [mediaQueryMax(450)]: {
        marginTop: spacings.s48,
        marginBottom: spacings.s60,
        gap: spacings.s12,
        '& > button:first-child': {
          marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : spacings.s12),
        },
      },
    },
    infoGroup: {
      width: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: colors.background.tint4,
      padding: spacings.s24,
      borderRadius: radiuses.r8,
      boxShadow: 'rgba(0, 0, 0, 0.6) 0px 2px 2px',
      [mediaQueryMax(breakpoints.mobile)]: {
        padding: spacings.s16,
      },
    },
    infoItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacings.s12,
      '&:not(:last-child)': {
        borderRight: '1px solid #959595',
        paddingRight: spacings.s30,
        [mediaQueryMax(450)]: {
          paddingRight: spacings.s20,
        },
      },
      '&:last-child': {
        marginLeft: spacings.s30,
        [mediaQueryMax(450)]: {
          marginLeft: spacings.s20,
        },
      },
    },
    count: {
      color: colors.primary,
      fontSize: '2.4rem',
      lineHeight: '2.9rem',
      letterSpacing: '0.5px',
      fontWeight: FontWeight.Bold,
    },
    text: {
      color: colors.text.tint5,
      fontSize: '2rem',
      lineHeight: '2.4rem',
      letterSpacing: '0.5px',
      fontWeight: FontWeight.Bold,
    },
    myImg: {
      display: 'block',
      objectFit: 'cover',
      objectPosition: 'center',
      [mediaQueryMax(breakpoints.mediumDesktop)]: {
        width: '448px',
        height: '540px',
      },
      [mediaQueryMax(668)]: {
        width: '403px',
        height: '486px',
      },
      [mediaQueryMax(breakpoints.mobile)]: {
        width: '362px',
        height: '437px',
      },
      [mediaQueryMax(450)]: {
        width: '100%',
        height: '100%',
      },
      opacity: (props: StyleProps) => (props.isLoading ? 1 : 0),
      transition: 'opacity 250ms ease-in-out',
    },
  }),
  { name: 'intro-section' },
);

export default useStyles;
