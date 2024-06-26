import { MouseEventHandler, SVGProps } from 'react';

export type IconTypes =
  | 'icon_humburger'
  | 'icon_close_humburger'
  | 'icon_arrow_down'
  | 'icon_arrow_up'
  | 'icon_checked'
  | 'icon_moon'
  | 'icon_sun'
  | 'icon_AmFlag'
  | 'icon_github'
  | 'icon_linkedin'
  | 'icon_mail'
  | 'icon_phone'
  | 'icon_download';

export interface ISvgIconChildren {
  icon: IconTypes;
}

export interface ISvgIconHOC extends ISvgIconChildren {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
  name?: string;
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
}

export type ISvgIcon = Omit<SVGProps<SVGSVGElement>, 'ref'>;
