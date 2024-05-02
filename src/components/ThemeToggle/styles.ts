import { createUseStyles } from 'react-jss';

import { ITheme, mediaQueryMax } from '@styles/';

const useStyles = createUseStyles(
  ({ breakpoints }: ITheme) => ({
    toggleWrapper: {
      width: '46px',
      marginTop: '1.8rem',

      [mediaQueryMax(breakpoints.tablet)]: {
        marginTop: '1.2rem',
      },
    },
    toggle: {
      height: '24px',
      width: '46px',
      background: 'linear-gradient(68deg, #9960ED 25.72%, #5C92F7 78.39%)',
      borderRadius: '18px',
      position: 'relative',
      transition: '0.5s ease',
      cursor: 'pointer',
      '&::before': {
        content: '""',
        display: 'block',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 2,
        top: '2px',
        transform: 'translate(2px)',
        transition: 'transform 0.5s ease, background 0.5s ease',
      },
    },
    toggleEnabled: {
      '&::before': {
        transform: 'translateX(24px)',
      },
    },
    checkboxInput: {
      opacity: 0,
      position: 'absolute',
      bottom: 0,
    },
    icons: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      margin: '0 5px',
      '& svg ': {
        fill: '#fff',
        height: '14px',
        width: '14px',
        zIndex: 0,
      },
    },
  }),
  { name: 'theme-toggle' },
);

export default useStyles;
