const colors = {
  '@global': {
    ':root': {
      '&, &.dark': {
        '--dark-primary': '#FD6F00',
        '--dark-secondary': '#9086EB',
        '--dark-transparent': 'transparent',

        // Borders
        '--dark-border-tint-1': '#959595',

        //  absolute

        '--dark-white': '#ffffff',
        '--dark-black': '#000000',

        // status
        '--dark-error': '#FF3333',
        '--dark-success': '#00A91B',

        // Backgrounds

        '--dark-bg-tint-1': '#FD6F00',
        '--dark-bg-tint-2': '#1E1E1E',
        '--dark-bg-tint-3': '#959595',
        '--dark-bg-tint-4': 'rgba(255,255,255,0.04)',

        // Text

        '--dark-text-color-tint-1': '#ffffff',
        '--dark-text-color-tint-2': '#959595',
        '--dark-text-color-tint-3': '#FD6F00',
        '--dark-text-color-tint-4': '#707070',
        '--dark-text-color-tint-5': '#DFDFDF',
        '--dark-text-color-tint-6': '#FEFEFE',

        // Gradients

        '--dark-bg-gradient-1': 'linear-gradient(90deg, rgba(253,111,0,1) 0%, rgba(228,100,0,1) 100%)',
        '--dark-bg-gradient-2': 'linear-gradient(90deg, rgba(228,100,0,1) 0%, rgba(253,111,0,1) 100%)',
        '--dark-bg-gradient-3': 'linear-gradient(100deg, rgba(152,67,0,1) 0%, rgba(253,111,0,1) 46%, rgba(202,89,0,1) 100%)',
      },

      /// ////////////// Light ////////////////
      '&.light': {
        '--light-primary': '#FD6F00',
        '--light-secondary': '#9086EB',
        '--light-transparent': 'transparent',

        // Borders
        '--light-border-tint-1': '#959595',

        //  absolute

        '--light-white': '#ffffff',
        '--light-black': '#000000',

        // status
        '--light-error': '#FF3333',
        '--light-success': '#00A91B',

        // Backgrounds

        '--light-bg-tint-1': '#FD6F00',
        '--light-bg-tint-2': '#ffffff',
        '--light-bg-tint-3': '#959595',
        '--light-bg-tint-4': 'rgba(255,255,255,0.04)',

        // Text

        '--light-text-color-tint-1': '#ffffff',
        '--light-text-color-tint-2': '#959595',
        '--light-text-color-tint-3': '#FD6F00',
        '--light-text-color-tint-4': '#707070',
        '--light-text-color-tint-5': '#DFDFDF',
        '--light-text-color-tint-6': '#FEFEFE',

        // Gradients
        '--light-bg-gradient-1': 'linear-gradient(90deg, rgba(253,111,0,1) 0%, rgba(228,100,0,1) 100%)',
        '--light-bg-gradient-2': 'linear-gradient(90deg, rgba(228,100,0,1) 0%, rgba(253,111,0,1) 100%)',
        '--light-bg-gradient-3': 'linear-gradient(100deg, rgba(152,67,0,1) 0%, rgba(253,111,0,1) 46%, rgba(202,89,0,1) 100%)',
      },
    },
  },
};

export default colors;
