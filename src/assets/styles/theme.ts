export interface IColors {
  background: { [key: string]: string };
  text: { [key: string]: string };
  border: { [key: string]: string };
  status: { [key: string]: string };
  absolute: { [key: string]: string };
  gradient: { [key: string]: string };
  primary: string;
  secondary: string;
  transparent: string;
}

export interface IThemeBreakpoints {
  smallMobile: number;
  mobile: number;
  tablet: number;
  laptop: number;
  desktop: number;
  mediumDesktop: number;
  bigDesktop: number;
}

export interface ITransition {
  Fast: string;
  Medium: string;
  Default: string;
  DropDown: string;
  Long: string;
}

export interface ITheme {
  colors: IColors;
  radiuses: Record<string, string>;
  baseFontSize: string;
  breakpoints: IThemeBreakpoints;
  layout: Record<string, string>;
  transition: ITransition;
  spacings: Record<string, string>;
}

const DarkColors: IColors = {
  primary: 'var(--dark-primary)',
  secondary: 'var(--dark-secondary)',
  transparent: 'var(--dark-transparent)',
  background: {
    tint1: 'var(--dark-bg-tint-1)',
    tint2: 'var(--dark-bg-tint-2)',
  },
  text: {
    tint1: 'var(--dark-text-color-tint-1)',
    tint2: 'var(--dark-text-color-tint-2)',
    tint3: 'var(--dark-text-color-tint-3)',
  },
  border: {
    tint1: 'var(--dark-border-tint-1)',
  },
  status: {
    error: 'var(--dark-error)',
    success: 'var(--dark-success)',
  },
  absolute: {
    white: 'var(--dark-white)',
    black: 'var(--dark-black)',
    logo: 'var(--dark-logo-gradient)',
  },
  gradient: {
    tint1: 'var(--dark-bg-gradient-1)',
    tint2: 'var(--dark-bg-gradient-2)',
  },
};

const LightColors: IColors = {
  primary: 'var(--light-primary)',
  secondary: 'var(--light-secondary)',
  transparent: 'var(--light-transparent)',
  background: {
    tint1: 'var(--light-bg-tint-1)',
    tint2: 'var(--light-bg-tint-2)',
  },
  text: {
    tint1: 'var(--light-text-color-tint-1)',
    tint2: 'var(--light-text-color-tint-2)',
    tint3: 'var(--light-text-color-tint-3)',
  },
  border: {
    tint1: 'var(--light-border-tint-1)',
  },
  status: {
    placeholder2: 'var(--light-input-placeholder-tint2)',
    error: 'var(--light-input-error-tint1)',
  },
  absolute: {
    white: 'var(--light-white)',
    black: 'var(--light-black)',
  },
  gradient: {
    tint1: 'var(--light-bg-gradient-1)',
    tint2: 'var(--light-bg-gradient-2)',
  },
};

const radiuses: Record<string, string> = {
  circle: 'var(--radius-circle)',
  r0: 'var(--radius-0)',
  r2: 'var(--radius-2)',
  r4: 'var(--radius-4)',
  r8: 'var(--radius-8)',
  r12: 'var(--radius-12)',
  r16: 'var(--radius-16)',
  r18: 'var(--radius-18)',
  r20: 'var(--radius-20)',
  r24: 'var(--radius-24)',
};

const spacings: Record<string, string> = {
  s0: '0',
  s2: '2px',
  s4: '4px',
  s6: '6px',
  s8: '8px',
  s10: '10px',
  s12: '12px',
  s14: '14px',
  s16: '16px',
  s18: '18px',
  s20: '20px',
  s22: '22px',
  s24: '24px',
  s26: '26px',
  s28: '28px',
  s30: '30px',
  s32: '32px',
  s34: '34px',
  s36: '36px',
  s38: '38px',
  s40: '40px',
  s42: '42px',
  s44: '44px',
  s46: '46px',
  s48: '48px',
  s50: '50px',
  s52: '52px',
  s54: '54px',
  s56: '56px',
  s58: '58px',
  s60: '60px',
  s62: '62px',
  s64: '64px',
};

const breakpoints: IThemeBreakpoints = {
  smallMobile: 375,
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200,
  mediumDesktop: 1356,
  bigDesktop: 1600,
};

const transition: ITransition = {
  Fast: '0.1s',
  Medium: '0.2s',
  Default: '0.3s',
  DropDown: '0.46s',
  Long: '1s',
};

const layout: Record<string, string> = {
  smallMobile: '100%',
  mobile: '540px',
  tablet: '720px',
  laptop: '1024px',
  desktop: '1440px',
  bigDesktop: '1600px',
};

export const themeDark: ITheme = {
  colors: DarkColors,
  radiuses,
  baseFontSize: '62.5%',
  spacings,
  breakpoints,
  layout,
  transition,
};

export const themeLight: ITheme = {
  colors: LightColors,
  radiuses,
  baseFontSize: '62.5%',
  spacings,
  breakpoints,
  layout,
  transition,
};
