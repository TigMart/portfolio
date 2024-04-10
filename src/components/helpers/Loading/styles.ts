import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  loadingOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Black with opacity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, // Ensure it appears on top of other content
  },
  spinner: {
    border: '6px solid #f3f3f3' /* Light grey */,
    borderTop: '6px solid #3498db' /* Blue */,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: '$spin 2s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

export default useStyles;
