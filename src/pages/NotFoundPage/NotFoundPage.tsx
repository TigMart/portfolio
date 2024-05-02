import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import PAGETITLES from '@constants/pageTitles';

import useStyles from './styles';

const NotFoundPage = () => {
  const styles = useStyles();
  return (
    <>
      <Helmet>
        <title>{PAGETITLES.NOTFOUND}</title>
      </Helmet>
      <div className={styles.root}>
        <h4 className={styles.heading}>404</h4>
        <p className={styles.info}>But don&apos;t worry, use the button to go back to the portfolio home page.</p>
        <Link to="/" className={styles.button}>
          Go to Home page
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
