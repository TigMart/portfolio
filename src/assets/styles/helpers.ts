/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export function deepMergeStyles(...objects: object[]) {
  const isObject = (obj: object) => obj && typeof obj === 'object';

  function deepMergeInner(target: any, source: any) {
    Object.keys(source).forEach((key: string) => {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
        target[key] = targetValue.concat(sourceValue);
      } else if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = deepMergeInner({ ...targetValue }, sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });

    return target;
  }

  if (objects.length < 2) {
    throw new Error('DeepMerge: this export function expects at least 2 objects to be provided');
  }

  if (objects.some(object => !isObject(object))) {
    throw new Error('DeepMerge: all values should be of type "object"');
  }

  const target = objects.shift();
  let source: object | undefined;

  while ((source = objects.shift())) {
    deepMergeInner(target, source);
  }

  return target;
}

export const mediaQueryMax = (breakPoint: number): string => `@media all and (max-width: ${breakPoint}px)`;

export const mediaQueryMin = (breakPoint: number): string => `@media all and (min-width: ${breakPoint}px)`;

export const canHover = (isHover = true): string => `@media (hover: ${isHover ? 'hover' : 'none'})`;

export const isLeftToRight = (isLeft = true): string => `[dir=${isLeft ? 'ltr' : 'rtl'}] & `;

export const ignoreRTL = (): string => '[dir] & ';

export const placeHolders = (color: string): Record<string, Record<string, string>> => ({
  '&::-webkit-input-placeholder': {
    color,
  },
  '&:-ms-input-placeholder': {
    color,
  },
  '&::placeholder': {
    color,
  },
});

export const placeHolderShown = (color?: string): Record<string, Record<string, string | undefined>> => ({
  '&:placeholder-shown': {
    color,
  },
});

export const textOverflowHidden = (lineClamp: number) => ({
  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-line-clamp': lineClamp,
  '-webkit-box-orient': 'vertical',
  textOverflow: 'ellipsis',
});

export const selection = (backgroundColor = '#add8e6', color = 'var(--white)'): Record<string, object> => {
  return {
    '@global': {
      '::-moz-selection': {
        backgroundColor,
        color,
      },
      '::selection': {
        backgroundColor,
        color,
      },
    },
  };
};

export const inputTypeNumberWithoutArrows = {
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
  },
  '-moz-appearance': 'textfield',
};

export const mozScrollbars = (thumbColor = 'var(--x-accent-1-1)', railColor = 'rgba(0,0,0,0.08)'): Record<string, string> => ({
  scrollbarColor: `${thumbColor} ${railColor}`,
  scrollbarWidth: 'thin',
});

export enum ScrollbarCoverage {
  Local = '&',
  Global = '',
}

export interface IScrollbars {
  coverage?: ScrollbarCoverage;
  width?: number;
  height?: number;
  borderRadius?: number;
  trackBackgroundColor?: string;
  trackHoverBackgroundColor?: string;
  thumbBackgroundColor?: string;
  thumbHoverBackgroundColor?: string;
}

export const scrollbars = ({
  coverage = ScrollbarCoverage.Local,
  width = 4,
  height = 4,
  borderRadius = 0,
  trackBackgroundColor = 'rgba(0,0,0,0.08)',
  trackHoverBackgroundColor = '',
  thumbBackgroundColor = 'grey',
  thumbHoverBackgroundColor = 'grey',
}: IScrollbars = {}): Record<string, object> => {
  const styles = {
    [`${coverage}::-webkit-scrollbar`]: {
      width,
      height,
    },
    [`${coverage}::-webkit-scrollbar-track`]: {
      backgroundColor: trackBackgroundColor,

      [canHover()]: {
        '&:hover': {
          backgroundColor: trackHoverBackgroundColor,
        },
      },
    },
    [`${coverage}::-webkit-scrollbar-thumb`]: {
      borderRadius,
      backgroundColor: thumbBackgroundColor,

      [canHover()]: {
        '&:hover': {
          backgroundColor: thumbHoverBackgroundColor,
        },
      },
    },
  };

  return styles;
};

export const hideScrollbars = {
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

export const removeAutocompleteBackground = (color: string, colorText: string): Record<string, object> => ({
  // eslint-disable-next-line max-len
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus textarea:-webkit-autofill, &:-webkit-autofill:hover textarea:-webkit-autofill:focus, &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus':
    {
      boxShadow: `0 0 0 1000px ${color} inset !important`,
      '-webkit-text-fill-color': `${colorText} !important`,
      backgroundColor: `${color} !important`,
    },
});

export function isLightMode() {
  return '@media (prefers-color-scheme: light)';
}

export function isDarkMode() {
  return '@media (prefers-color-scheme: dark)';
}
