import { mediaQueryMax } from './helpers';
import { themeDark } from './theme';

export enum FontWeight {
  Thin = 100,
  ExtraLight = 200,
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  Black = 900,
}

export const typography = {
  H1: {
    fontSize: '64px',
    lineHeight: '77px',
    [mediaQueryMax(668)]: {
      fontSize: '44px',
      lineHeight: '53px',
    },
    [mediaQueryMax(450)]: {
      fontSize: '36px',
      lineHeight: '44px',
    },
    [mediaQueryMax(400)]: {
      fontSize: '32px',
      lineHeight: '44px',
    },
    [mediaQueryMax(376)]: {
      fontSize: '28px',
      lineHeight: '36px',
    },
  },
  H2: {
    fontSize: '40px',
    lineHeight: 'normal',
    [mediaQueryMax(themeDark.breakpoints.mobile)]: {
      fontSize: '24px',
      lineHeight: 'normal',
    },
  },
  t1: {
    fontSize: '16px',
    lineHeight: '26px',
    letterSpacing: '0.5px',
  },
  t2: {
    fontSize: '20px',
    lineHeight: '24px',
    letterSpacing: '0.5px',
  },
  t3: {
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0.5px',
    [mediaQueryMax(themeDark.breakpoints.mobile)]: {
      fontSize: '16px',
      lineHeight: '26px',
    },
  },
};

export enum FontStyle {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
}

export const fontFamilyName = 'portfolio-font-am';

export const systemFonts =
  'system-ui, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Helvetica, Arabic, sans-serif';

export const defaultFonts = `${fontFamilyName}, ${systemFonts}`;
