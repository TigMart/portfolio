/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import { LegacyRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { IButtonProps } from './type';

const Button = forwardRef(
  (
    {
      name,
      size = 'medium',
      type = 'button',
      styleType = 'primary',
      isDisabled = false,
      isActive = false,
      onClick,
      iconRight,
      iconLeft,
      icon,
      link,
      isFullWith,
      width,
      height,
      className,
      padding,
      onMouseEnter,
      classNameLink,
      onMouseLeave,
    }: IButtonProps,
    ref?: LegacyRef<HTMLButtonElement>,
  ) => {
    const classes = useStyles({
      size,
      styleType,
      height,
      width,
      padding,
      icon,
      iconLeft,
      iconRight,
      isFullWith,
      isActive,
    });

    if (link) {
      return (
        <Link to={link} className={classNameLink}>
          <button
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            type={type}
            className={classNames(className, classes.customBtnTheme, classes.linkBtn)}
            disabled={isDisabled}
            onClick={onClick}
          >
            <div className={classes.wrapper}>
              {iconLeft}
              {icon}
              {name}
              {iconRight}
            </div>
          </button>
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={classNames(className, classes.customBtnTheme)}
        type={type}
        disabled={isDisabled}
        onClick={onClick}
      >
        <div className={classes.wrapper}>
          {iconLeft}
          {icon}
          {name}
          {iconRight}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
