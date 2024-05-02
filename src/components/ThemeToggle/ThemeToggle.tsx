import classNames from 'classnames';

import useMemoSelector from '@hooks/useMemoSelector';
import { setIsEnabled } from '@store/features/theme/themeSlice';
import { useAppDispatch } from '@store/store';
import { getThemeState } from '@store/features/theme/themeSelectors';
import SvgIcon from '@components/helpers/SvgIcon';

import useStyles from './styles';

const ThemeToggle = () => {
  const styles = useStyles();
  const isEnabled = useMemoSelector(getThemeState);
  const dispatch = useAppDispatch();
  const handleThemeChange = () => {
    dispatch(setIsEnabled(!isEnabled));
  };
  return (
    <div className={styles.toggleWrapper}>
      <label htmlFor="toggle">
        <div className={classNames(styles.toggle, isEnabled && styles.toggleEnabled)}>
          <div className={styles.icons}>
            <SvgIcon icon="icon_sun" width={24} height={24} />
            <SvgIcon icon="icon_moon" width={24} height={24} />
          </div>
          <input
            className={styles.checkboxInput}
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onChange={handleThemeChange}
            readOnly
            aria-label="Change theme button"
          />
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
