/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider } from 'react-jss';

import { themeDark, useBaseStyles } from '@styles/';

interface ISingleToolsBootstrap {
  children: ReactNode;
}

const StyledWrapper = ({ children }: PropsWithChildren<unknown>) => {
  useBaseStyles();

  return <>{children}</>;
};

const SingleToolsBootstrap = ({ children }: ISingleToolsBootstrap) => {
  // const { isEnabled } = useMemoSelector(state => ({
  //   isEnabled: getIsEnabled(state),
  // }));
  // isEnabled ? (theme = themeDark) : (theme = themeLight);
  const theme = themeDark;
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>{children}</StyledWrapper>
    </ThemeProvider>
  );
};

export default SingleToolsBootstrap;
