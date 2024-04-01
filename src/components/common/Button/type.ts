import { MouseEventHandler, ReactNode } from 'react';

export type ButtonStyleType = 'primary' | 'secondary';
export type ButtonSize = 'large' | 'medium' | 'small';
type ButtonType = 'button' | 'reset' | 'submit';

export interface IButtonProps {
  name?: string;
  size?: ButtonSize;
  styleType?: ButtonStyleType;
  type?: ButtonType;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  icon?: ReactNode;
  isFullWith?: boolean;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  link?: string;
  width?: string;
  height?: string;
  className?: string;
  classNameLink?: string;
  padding?: string;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
}

export type StateColors = {
  regular: string;
  hover: string;
  textColorRegular: string;
  textColorHover: string;
  borderColor: string;
};
