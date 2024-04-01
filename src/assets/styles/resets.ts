const resets = {
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      '&::after': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      '&::before': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
    },
    html: {
      fontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',
      fontFeatureSettings: 'normal',
      scrollBehavior: 'smooth',
      '-webkit-text-size-adjust': 'none',
    },
    'a, abbr, acronym, address, applet, b, big, blockquote, body, caption, center, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, kbd, label, legend, li, object, ol, p, pre, q, s, samp, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, tr, tt, u, ul, var':
      {
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        boxSizing: 'border-box',
      },
    body: {
      // WebkitUserSelect: 'none',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, .05)',
      lineHeight: 1,
      overflow: 'hidden',
    },
    'ol, ul': {
      listStyle: 'none',
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block',
    },
    input: {
      margin: 0,
      padding: 0,
      background: '0 0',
      border: 'none',
      outline: 0,
      fontFamily: 'inherit',
      '&::-ms-clear': {
        display: 'none',
      },
      '&:focus': {
        outline: 0,
      },
    },
    button: {
      padding: 0,
      background: '0 0',
      border: 'none',
      outline: 0,
      fontFamily: 'inherit',
      cursor: 'pointer',
    },
    a: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
};

export default resets;
