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
    lineHeight: 'normal',
    [mediaQueryMax(themeDark.breakpoints.mobile)]: {
      fontSize: '44px',
      lineHeight: 'normal',
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
};

export enum FontStyle {
  Normal = 'normal',
  Italic = 'italic',
  Oblique = 'oblique',
}

export const fontFamilyName = 'portfolio-font-am';

export const systemFonts = 'system-ui, sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Helvetica, Arabic, sans-serif';

export const defaultFonts = `${fontFamilyName}, ${systemFonts}`;
