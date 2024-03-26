import { createUseStyles } from 'react-jss';
import { isIOS } from 'react-device-detect';

import { deepMergeStyles, mediaQueryMin, selection } from './helpers';
import resets from './resets';
import { defaultFonts } from './fonts';
import { ITheme } from './theme';
import themeVariables from './colors';
import radius from './radiuses';

const useBaseStyles = createUseStyles(({ baseFontSize, colors }: ITheme) => ({
  ...deepMergeStyles(resets, selection(), themeVariables, radius, {
    '@global': {
      html: {
        height: isIOS ? '-webkit-fill-available' : 'auto',
        fontFamily: defaultFonts,
        fontSize: baseFontSize,
      },
      body: {
        backgroundColor: colors.background.tint2,
      },

      '.container': {
        maxWidth: '100%',
        margin: '0 auto',
        paddingLeft: '16px',
        paddingRight: '16px',

        [mediaQueryMin(600)]: {
          maxWidth: '960px',
          paddingLeft: '24px',
          paddingRight: '24px',
        },
        [mediaQueryMin(960)]: {
          maxWidth: '1280px',
          paddingLeft: '44px',
          paddingRight: '44px',
        },
        [mediaQueryMin(1200)]: {
          maxWidth: '1920px',
          paddingLeft: '70px',
          paddingRight: '70px',
        },
      },
    },
  }),
}));

export default useBaseStyles;
