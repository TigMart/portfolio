import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme, mediaQueryMax } from '@assets/styles';

type StyleProps = {
  isGapSupport: boolean;
  isOpen: boolean;
};

const useStyles = createUseStyles<string, StyleProps, ITheme>(
  ({ colors, breakpoints, spacings }: ITheme) => ({
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
    nav: {
      [mediaQueryMax(breakpoints.laptop)]: {
        position: 'absolute',
        display: (props: StyleProps) => (props.isOpen ? 'block' : 'none'),
        right: 0,
        top: '8rem',
        minWidth: '220px',
        width: '30%',
        boxShadow: 'rgba(0, 0, 0, 0.6) 0px 2px 4px',
        padding: spacings.s32,
        backfaceVisibility: 'hidden',
        transition: 'all .3s ease',
        zIndex: 9,
      },
      [mediaQueryMax(600)]: {
        padding: spacings.s16,
      },
    },
    navList: {
      display: 'flex',
      alignItems: 'center',
      gap: '6rem',
      [mediaQueryMax(breakpoints.laptop)]: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '3rem',
      },
    },
    item: {
      marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : '6rem'),
      [mediaQueryMax(breakpoints.laptop)]: {
        marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : '0rem'),
        marginBottom: (props: StyleProps) => (props.isGapSupport ? '0' : '3rem'),
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
    hireBtn: {
      [mediaQueryMax(breakpoints.laptop)]: {
        display: 'none',
      },
    },
    mobileHireBtn: {
      display: 'none',
      [mediaQueryMax(breakpoints.laptop)]: {
        display: 'inline-block',
      },
    },
    languageBtn: {
      fontSize: '1.6rem',
      color: colors.text.tint2,
      marginRight: (props: StyleProps) => (props.isGapSupport ? '0' : '3rem'),
      '&:disabled': {
        display: 'none',
      },
    },
    mobileNavBtn: {
      display: 'none',
      cursor: 'pointer',
      lineHeight: 0,
      [mediaQueryMax(breakpoints.laptop)]: {
        display: 'block',
        zIndex: 99,
      },
    },
    mobileNavIcon: {
      fill: colors.text.tint2,
      '&[name="close-humburger"]': {
        display: 'none',
        [mediaQueryMax(breakpoints.laptop)]: {
          display: (props: StyleProps) => (props.isOpen ? 'block' : ''),
        },
      },
      '&[name="humburger"]': {
        [mediaQueryMax(breakpoints.laptop)]: {
          display: (props: StyleProps) => (props.isOpen ? 'none' : ''),
        },
      },
    },
  }),
  { name: 'header', link: true },
);

export default useStyles;
