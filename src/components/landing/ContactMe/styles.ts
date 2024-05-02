import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme, mediaQueryMax, typography } from '@styles/';

const useStyles = createUseStyles(
  ({ colors, spacings, breakpoints, radiuses, transition }: ITheme) => ({
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
    form: {
      width: '70vmin',
      padding: spacings.s32,
      '& > *:not(:last-child)': {
        marginBottom: spacings.s24,
      },
    },
    textarea: {
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      maxHeight: '16rem',
      minHeight: '16rem',
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: FontWeight.Regular,
      color: colors.text.tint2,
      padding: '16px',
      borderRadius: radiuses.r8,
      backgroundColor: colors.background.tint4,
      border: 'none',
      transition: `all ${transition.Fast}`,
      '&:focus': {
        outline: 'none',
        backgroundColor: colors.background.tint5,
      },
      '&::-webkit-input-placeholder': {
        color: colors.text.tint2,
        fontSize: '14px',
        fontWeight: FontWeight.Medium,
        lineHeight: '16px',
      },
    },
    btn: {
      float: 'right',
      transition: 'box-shadow 0.1s, transform 0.1s',
      '&:hover': {
        boxShadow: '0px 0px 30px rgba(0,0,0, 0.6)',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
      },
    },
    inputError: {
      border: `1px solid ${colors.status.error}`,
    },
    error: {
      color: colors.status.error,
      fontSize: '12px',
      textAlign: 'left',
      marginLeft: spacings.s16,
      [mediaQueryMax(breakpoints.mobile)]: {
        fontSize: '9px',
      },
    },
  }),
  { name: 'contactme' },
);

export default useStyles;
