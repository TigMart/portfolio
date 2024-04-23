import { createUseStyles } from 'react-jss';

import image from '@assets/images/noInternet.webp';

const useStyles = createUseStyles(
  () => ({
    root: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      background: `url(${image}),  50% / cover no-repeat`,
      backgroundPosition: 'center',
    },
    glass: {
      width: '100%',
      background: 'rgba(0, 0, 0, 0.02)',
      backdropFilter: 'blur(30px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10rem',
    },
    wrapper: {
      background: 'linear-gradient(0deg, rgb(0, 0, 0) 100%, rgb(0, 0, 0) 100%)',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: '99999',
    },
    title: {
      color: '#FFF',
      textAlign: 'center',
      fontWeight: '700px',
      fontSize: '44px',
      fontStyle: 'normal',
      lineHeight: '64px',
    },
    content: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '500px',
      lineHeight: '28px',
    },
    button: {
      background: 'linear-gradient(68deg, #E750F9 14.13%, #7099E5 85.87%)',
      width: '240px',
      height: '48px',
      padding: '16px 28px',
      borderRadius: '16px',
      color: 'white',
      cursor: 'pointer',
      border: 'none',
    },
  }),
  { name: 'no-internet', link: true },
);
export default useStyles;
