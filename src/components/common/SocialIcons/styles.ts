import { createUseStyles } from 'react-jss';

import { ITheme } from '@styles/';

const useStyles = createUseStyles(({ colors, radiuses }: ITheme) => ({
  socialButtonsGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  socialBtn: {
    width: '4rem',
    height: '4rem',
    backgroundColor: colors.background.tint4,
    borderRadius: radiuses.circle,
    border: '1px solid #BABABA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:first-child': {
      marginRight: '2rem',
    },
    '&:hover': {
      backgroundColor: colors.background.tint2,
    },
  },
}));
export default useStyles;
