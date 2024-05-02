import useStyles from './styles';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingOverlay}>
      <div className={classes.spinner} />
    </div>
  );
};

export default Loading;
