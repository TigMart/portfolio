import { createUseStyles } from 'react-jss';
import { isIOS } from 'react-device-detect';

import { deepMergeStyles, mediaQueryMax, selection } from './helpers';
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
        width: '100%',
        height: '100%',
      },

      '.container': {
        maxWidth: '1920px',
        margin: '0 auto',
        paddingLeft: '64px',
        paddingRight: '64px',

        [mediaQueryMax(1200)]: {
          maxWidth: '1200px',
          paddingLeft: '44px',
          paddingRight: '44px',
        },
        [mediaQueryMax(992)]: {
          maxWidth: '992px',
          paddingLeft: '32px',
          paddingRight: '32px',
        },
        [mediaQueryMax(600)]: {
          maxWidth: '600px',
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      },
      '.flex': {
        display: 'flex',
      },
      '.aic': {
        alignItems: 'center',
      },
    },
  }),
}));

export default useBaseStyles;
