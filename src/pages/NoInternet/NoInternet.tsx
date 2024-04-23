import useStyles from './styles';

function NoInternet() {
  const classes = useStyles();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.glass}>
          <div>
            <h3 className={classes.title}>No internet connection</h3>
            <div>
              <p className={classes.content}>Oops! It seems like you&prime;re offline. </p>
              <p className={classes.content}>Please check your connection and try again. </p>
            </div>
          </div>
          <button type="button" className={classes.button} onClick={handleRefresh}>
            Retry
          </button>
        </div>
      </div>
    </section>
  );
}

export default NoInternet;
