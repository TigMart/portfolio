/* eslint-disable react/jsx-no-useless-fragment */
import { PropsWithChildren, ReactNode } from 'react';
import { ThemeProvider } from 'react-jss';

import { themeDark, useBaseStyles } from '@assets/styles';

interface ISingleToolsBootstrap {
  children: ReactNode;
}

function StyledWrapper({ children }: PropsWithChildren<unknown>) {
  useBaseStyles();

  return <>{children}</>;
}

function SingleToolsBootstrap({ children }: ISingleToolsBootstrap) {
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
}

export default SingleToolsBootstrap;
