import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme, removeAutocompleteBackground, mediaQueryMax } from '@styles/';

const useStyles = createUseStyles(
  ({ colors, transition, radiuses, breakpoints, spacings }: ITheme) => ({
    root: {
      position: 'relative',
      width: '100%',
    },
    label: {
      display: 'block',
      fontSize: '12px',
      fontWeight: FontWeight.Light,
      lineHeight: spacings.s4,
      marginLeft: spacings.s16,
      transform: 'translateY(calc(-100% - 39px))',
      color: colors.text.tint2,
      transition: `all ${transition.Fast}`,
    },

    input: {
      display: 'block',
      width: '100%',
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: FontWeight.Regular,
      color: colors.text.tint2,
      padding: '16px',
      borderRadius: radiuses.r8,
      backgroundColor: colors.background.tint4,
      border: 'none',
      transition: `all ${transition.Fast}`,
      ...removeAutocompleteBackground('#272727', colors.text.tint1),
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
      },
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

      '&:placeholder-shown + label': {
        opacity: 0,
        visibility: 'hidden',
        transform: 'translateY(1px)',
      },
    },
    inputError: {
      border: `1px solid ${colors.status.error}`,
    },
    labelError: {
      color: colors.status.error,
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

  { name: 'formField' },
);

export default useStyles;
