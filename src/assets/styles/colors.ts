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

        // Text

        '--dark-text-color-tint-1': '#ffffff',
        '--dark-text-color-tint-2': '#959595',
        '--dark-text-color-tint-3': '#FD6F00',

        // Gradients

        '--dark-bg-gradient-1': 'linear-gradient(90deg, rgba(253,111,0,1) 0%, rgba(228,100,0,1) 100%)',
        '--dark-bg-gradient-2': 'linear-gradient(90deg, rgba(228,100,0,1) 0%, rgba(253,111,0,1) 100%)',
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

        // Text

        '--light-text-color-tint-1': '#ffffff',
        '--light-text-color-tint-2': '#959595',
        '--light-text-color-tint-3': '#FD6F00',

        // Gradients
        '--light-bg-gradient-1': 'linear-gradient(90deg, rgba(253,111,0,1) 0%, rgba(228,100,0,1) 100%)',
        '--light-bg-gradient-2': 'linear-gradient(90deg, rgba(228,100,0,1) 0%, rgba(253,111,0,1) 100%)',
      },
    },
  },
};

export default colors;
