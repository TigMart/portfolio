/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createUseStyles } from 'react-jss';

import { FontWeight, ITheme } from '@assets/styles';

import { ButtonStyleType, IButtonProps, StateColors } from './type';

const useStyles = createUseStyles<string, IButtonProps, ITheme>(
  ({ colors, radiuses, spacings }: ITheme) => {
    type InnerType = keyof typeof typeColors;
    const typeColors: { [key in ButtonStyleType]: StateColors } = {
      primary: {
        regular: colors.gradient.tint1,
        hover: colors.gradient.tint2,
        textColorRegular: colors.text.tint1,
        textColorHover: colors.text.tint1,
        borderColor: '',
      },
      secondary: {
        regular: colors.transparent,
        hover: colors.gradient.tint2,
        textColorRegular: colors.text.tint1,
        textColorHover: colors.text.tint1,
        borderColor: colors.gradient.tint2,
      },
    };

    return {
      customBtnTheme: {
        display: 'inline-block',
        cursor: 'pointer',
        borderRadius: radiuses.r16,
        outline: 'none',
        fontSize: ({ size }: IButtonProps) => {
          switch (size) {
            case 'large':
              return '1.8rem';
            case 'medium':
              return '1.6rem';
            case 'small':
              return '1.4rem';
            default:
              return '';
          }
        },
        fontWeight: FontWeight.Medium,
        lineHeight: 'normal',
        transition: 'all .3s ease',

        width: ({ isFullWith, width }) => {
          if (isFullWith) {
            return '100%';
          }
          if (!width) {
            return 'fit-content';
          }
          return width === '' ? 'auto' : width;
        },
        height: ({ size }: IButtonProps) => {
          switch (size) {
            case 'large':
              return '54px';
            case 'medium':
              return '48px';
            case 'small':
              return '44px';
            default:
              return '';
          }
        },
        // backgroundColor: ({ styleType = 'primary' }) => (styleType ? typeColors[styleType]?.regular : ''),
        background: ({ styleType = 'primary' }) => (styleType ? typeColors[styleType]?.regular : ''),
        border: ({ styleType = 'primary' }) => (styleType === 'secondary' ? '1px solid transparent' : 'none'),
        borderColor: ({ styleType = 'primary' }) => (styleType !== 'secondary' ? typeColors[styleType].borderColor : ''),
        color: ({ styleType = 'primary' }) => (styleType ? typeColors[styleType]?.textColorRegular : ''),

        padding: ({ size, padding, icon, iconLeft, iconRight }: IButtonProps) => {
          if (padding) {
            return padding;
          }
          if (icon && size === 'small') {
            return `${spacings.s12}`;
          }
          if (icon && (size === 'medium' || size === 'large')) {
            return `${spacings.s16}`;
          }
          if (iconRight && size === 'small') {
            return `${spacings.s12} ${spacings.s20} ${spacings.s12} ${spacings.s24}`;
          }
          if (iconRight && size === 'medium') {
            return `${spacings.s16} ${spacings.s24} ${spacings.s16} ${spacings.s28}`;
          }
          if (iconRight && size === 'large') {
            return `${spacings.s16} ${spacings.s28} ${spacings.s16} ${spacings.s32}`;
          }
          if (iconLeft && size === 'small') {
            return `${spacings.s12} ${spacings.s24} ${spacings.s12} ${spacings.s20}`;
          }
          if (iconLeft && size === 'medium') {
            return `${spacings.s16} ${spacings.s28} ${spacings.s16} ${spacings.s24}`;
          }
          if (iconLeft && size === 'large') {
            return `${spacings.s16} ${spacings.s32} ${spacings.s16} ${spacings.s28}`;
          }
          switch (size) {
            case 'small':
              return `${spacings.s0} ${spacings.s24}`;
            case 'medium':
              return `${spacings.s0} ${spacings.s28}`;
            case 'large':
              return `${spacings.s0} ${spacings.s32}`;
            default:
              return spacings.s0;
          }
        },

        '&:disabled': {
          opacity: 0.3,
          cursor: 'not-allowed',
        },

        '&:hover': {
          '& > div > svg': {
            fill: ({ styleType }: { styleType: InnerType }) => typeColors[styleType]?.textColorHover || '',
          },
          color: ({ styleType }: { styleType: InnerType }) => typeColors[styleType]?.textColorHover || '',
          // backgroundColor: ({ styleType }: { styleType: InnerType }) => typeColors[styleType]?.hover || '',
          background: ({ styleType }: { styleType: InnerType }) => typeColors[styleType]?.hover || '',
        },
      },
      wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: spacings.s4,
      },
      linkBtn: { whiteSpace: 'nowrap' },
    };
  },
  {
    name: 'button',
    link: true,
  },
);

export default useStyles;
